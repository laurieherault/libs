import { useCallback, useRef, useState } from "react";
import { useInterval } from "../useInterval";

/**
 * A countdown timer hook using useInterval under the hood.
 * @param initialSeconds Number of seconds to count down from.
 * @param intervalMs Interval between ticks in ms (default: 1000).
 */
export function useTimer(initialSeconds: number, intervalMs = 1000) {
	const [seconds, setSeconds] = useState(initialSeconds);
	const [isRunning, setIsRunning] = useState(false);

	const start = useCallback(() => {
		if (seconds > 0) {
			setIsRunning(true);
		}
	}, [seconds]);

	const pause = useCallback(() => {
		setIsRunning(false);
	}, []);

	const reset = useCallback(() => {
		setIsRunning(false);
		setSeconds(initialSeconds);
	}, [initialSeconds]);

	// listeners for completion
	const listenersRef = useRef<Array<() => void>>([]);
	const onComplete = useCallback((cb: () => void) => {
		listenersRef.current.push(cb);
	}, []);

	// Decrement the timer on each tick.
	useInterval(
		() => {
			setSeconds((prev) => {
				if (prev <= 1) {
					// Stop at zero
					setIsRunning(false);
					// Notify completion listeners
					for (const cb of listenersRef.current) {
						cb();
					}
					return 0;
				}
				return prev - 1;
			});
		},
		isRunning ? intervalMs : null,
	);

	return { seconds, isRunning, start, pause, reset, onComplete };
}
