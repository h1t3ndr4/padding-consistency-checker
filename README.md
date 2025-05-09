# Number Padding Consistency Checker

This project provides a utility function `checkNumberPadding()` implemented in TypeScript, designed to analyze numeric strings and detect padding patterns (e.g., leading zeros).

## ✅ Function Purpose

The function inspects an iterable of numeric strings and returns:

- `1` → All valid numeric strings are unpadded (e.g., `"1"`, `"23"`)
- `N` → All valid numeric strings are zero-padded to length `N` (e.g., `"01"`, `"02"`)
- `-1` → Mixed padded lengths or inconsistent formatting
- `-N` → Mixed padded and unpadded values, with consistent padded length; returns negative of the minimum length
- `0` → No valid numeric strings present

## How to Run the Program

### 1. Clone the Repository

```bash
git clone https://github.com/h1t3ndr4/padding-consistency-checker.git
cd padding-consistency-checker
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Program
```bash
node test.js
```

### 4. Compilation Note

The TypeScript code has already been compiled to JavaScript (checkNumberPadding.js). You do not need to compile it again.

However, if you wish to recompile manually, you can do so with:
```bash
npx tsc
```


