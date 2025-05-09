export function checkNumberPadding(intStrs: Iterable<string>): number {
    const paddedLengths = new Set<number>();
    let hasPadding = false;
    let hasUnpadded = false;
    let minLength = Infinity;
    let count = 0;

    for (const str of intStrs) {
        const trimmedStr = str.trim(); 
        if (isNaN(Number(trimmedStr))) continue;
        count++;

        const noZeros = String(Number(trimmedStr));
        const isPadded = trimmedStr.length > noZeros.length;

        if (isPadded) {
            hasPadding = true;
            paddedLengths.add(trimmedStr.length);
        } else {
            hasUnpadded = true;
        }

        minLength = Math.min(minLength, trimmedStr.length);
    }

    if (count === 0) return 0;
    if (paddedLengths.size > 1) return -1;
    if (hasPadding && !hasUnpadded) return [...paddedLengths][0];
    if (!hasPadding && hasUnpadded) return 1;
    return -minLength;
}
