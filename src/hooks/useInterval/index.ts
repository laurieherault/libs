import { useEffect, useRef } from "react";

/**
 * A custom hook that runs a callback every specified delay when delay is not null.
 * @param callback Function to be called on each interval tick.
 * @param delay Delay in milliseconds. If null, the interval is paused.
 */
export function useInterval(callback: () => void, delay: number | null): void {
	const savedCallback = useRef<(() => void) | undefined>(undefined);

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		if (delay === null) {
			return;
		}
		const id = setInterval(() => {
			if (savedCallback.current) {
				savedCallback.current();
			}
		}, delay);
		return () => clearInterval(id);
	}, [delay]);
}
