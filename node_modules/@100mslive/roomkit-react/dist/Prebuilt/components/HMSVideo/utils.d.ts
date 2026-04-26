export declare function getPercentage(a: number, b: number): number;
/**
 * Take a time in seconds and return its equivalent time in hh:mm:ss format
 * @param {number} timeInSeconds if given as floating point value, it is floored.
 *
 * @returns a string representing timeInSeconds in HH:MM:SS format.
 */
export declare function getDurationFromSeconds(timeInSeconds: number): string;
export declare function getDuration(videoEl: HTMLVideoElement): number;
