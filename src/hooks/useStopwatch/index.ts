import { useCallback, useState } from "react";
import { useInterval } from "../useInterval";

/**
 * A stopwatch hook using useInterval under the hood.
 * @param intervalMs Interval between ticks in ms (default: 1000).
 */
export function useStopwatch(intervalMs = 1000) {
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	const start = useCallback(() => {
		setIsRunning(true);
	}, []);

	const pause = useCallback(() => {
		setIsRunning(false);
	}, []);

	const reset = useCallback(() => {
		setIsRunning(false);
		setSeconds(0);
	}, []);

	// Increment the stopwatch on each tick.
	useInterval(
		() => {
			setSeconds((prev) => prev + 1);
		},
		isRunning ? intervalMs : null,
	);

	return { seconds, isRunning, start, pause, reset };
}
