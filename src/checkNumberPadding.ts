export function checkNumberPadding(intStrs: Iterable<string>): number {
    const strings = Array.from(intStrs);
    if (strings.length === 0) {
        return 0; // No observations
    }
    // Track minimum length and presence of single-digit numbers
    let minLength = Infinity;
    let hasSingleDigit = false;
    let hasPadding = false;
    let paddingLength: number | null = null;
    // Single pass through the data to gather information
    for (const str of strings) {
         // Check if all strings are valid numbers
        if (!/^\d+$/.test(str)) {
            return 0; // Invalid input - not a number
        }
        const len = str.length;
        minLength = Math.min(minLength, len);
        if (len === 1) {
            hasSingleDigit = true;
            continue;
        }
        // Check for leading zeros (padding)
        if (str[0] === '0') {
            hasPadding = true;
            // Set or check padding length consistency
            if (paddingLength === null) {
                paddingLength = len;
            } else if (paddingLength !== len) {
                return -1; // Inconsistent padding length
            }
        }
    }
    // Mixed padding (some with padding, some without)
    if (hasPadding && hasSingleDigit) {
        return -1;
    }
    // If we found consistent padding
    if (paddingLength !== null) {
        // Validate all strings follow this padding pattern
        for (const str of strings) {
            const numDigits = parseInt(str).toString().length;
            // If number is smaller than padding length
            if (numDigits < paddingLength) {
                // Must have proper padding
                if (str.length !== paddingLength || str[0] !== '0') {
                    return -1; // Inconsistent padding
                }
            } else {
                // Number overflows padding - must have exact digits with no padding
                if (str.length !== numDigits) {
                    return -1; // Inconsistent padding
                }
            }
        }
        return paddingLength;
    }
    // If we have at least one single digit and no padding
    if (hasSingleDigit) {
        return 1;
    }
    // All numbers have multiple digits with no padding - inconclusive
    return -minLength;
}
