import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Custom hook to manage the Screen Wake Lock API.
 * @returns { isSupported: boolean, isActive: boolean, request: () => Promise<void>, release: () => Promise<void> }
 */
export function useWakeLock() {
	const wakeLockApi =
		typeof navigator !== "undefined" ? navigator.wakeLock : undefined;
	const isSupported = typeof wakeLockApi?.request === "function";
	const [isActive, setIsActive] = useState(false);
	const sentinelRef = useRef<WakeLockSentinel | null>(null);

	const request = useCallback(async () => {
		if (!isSupported || sentinelRef.current) return;
		try {
			if (!wakeLockApi) throw new Error("Wake Lock API is not available.");
			const sentinel = await wakeLockApi.request("screen");
			sentinelRef.current = sentinel;
			setIsActive(true);
			sentinel.addEventListener("release", () => {
				setIsActive(false);
				sentinelRef.current = null;
			});
		} catch {
			// ignore errors
		}
	}, [isSupported, wakeLockApi]);

	const release = useCallback(async () => {
		if (sentinelRef.current) {
			await sentinelRef.current.release();
			// release event handler will update state
		}
	}, []);

	// Re-request on visibility change
	useEffect(() => {
		if (!isSupported) return;
		const handleVisibility = async () => {
			if (document.visibilityState === "visible" && sentinelRef.current) {
				await request();
			}
		};
		document.addEventListener("visibilitychange", handleVisibility);
		return () =>
			document.removeEventListener("visibilitychange", handleVisibility);
	}, [isSupported, request]);

	return { isSupported, isActive, request, release };
}
