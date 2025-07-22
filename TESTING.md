# Testing Guide for PDF417 Barcode Features

This guide covers how to test the new `rows` and `errorCorrectionLevel` features added to the react-native-pdf417 library.

## Unit Tests

Run the unit tests to verify TypeScript interfaces and basic functionality:

```bash
npm test
# or
yarn test
```

The unit tests cover:
- ✅ TypeScript interface validation
- ✅ Prop type validation
- ✅ Edge cases for `rows` (0-50)
- ✅ Edge cases for `errorCorrectionLevel` (0-8)
- ✅ Various text input scenarios
- ✅ Prop combination testing

## Visual Testing with Example App

The example app provides a comprehensive visual test suite:

### 1. Setup Example App

```bash
cd example
yarn install
npx pod-install ios  # For iOS
```

### 2. Run the Example App

**For iOS:**
```bash
yarn ios
```

**For Android:**
```bash
yarn android
```

### 3. Test Scenarios in Example App

The example app demonstrates:

#### Default Settings
- Basic barcode with auto-calculated rows and default error correction level (2)

#### Custom Row Counts
- 3 rows: Compact barcode
- 6 rows: Medium height barcode  
- 10 rows: Tall barcode

#### Error Correction Levels
- Level 0: Minimal error correction
- Level 2: Default error correction
- Level 4: Higher error correction
- Level 8: Maximum error correction

#### Combined Parameters
- Various combinations of rows + errorCorrectionLevel
- Short text vs long text with different parameters

### 4. What to Test

**Visual Verification:**
1. **Different Heights**: Barcodes with different `rows` values should have visibly different heights
2. **Error Correction**: Higher `errorCorrectionLevel` values should produce more robust barcodes (may appear denser)
3. **Readability**: All barcodes should be scannable with a PDF417 barcode scanner
4. **Interaction**: Tapping any barcode should trigger the onPress callback (check console logs)

**Performance Testing:**
1. **Rendering Speed**: Barcodes should render quickly without blocking the UI
2. **Memory Usage**: No memory leaks when switching between different barcode configurations
3. **Edge Cases**: Very large `rows` values or extreme `errorCorrectionLevel` values should handle gracefully

## Manual Testing Checklist

- [ ] Default barcode renders correctly
- [ ] Different `rows` values produce different barcode heights
- [ ] Different `errorCorrectionLevel` values work without crashes
- [ ] Combination of both props works correctly
- [ ] onPress callback triggers on tap
- [ ] Long text handles properly with custom parameters
- [ ] Short text works with various parameter combinations
- [ ] Barcodes are scannable with PDF417 scanner apps
- [ ] TypeScript compilation works without errors
- [ ] No console errors or warnings

## Barcode Scanner Testing

To fully validate the barcodes:

1. Install a PDF417 scanner app on your device
2. Scan the generated barcodes
3. Verify the decoded text matches the input
4. Test barcodes with different error correction levels for robustness

**Recommended Scanner Apps:**
- iOS: "QR Reader for iPhone" or "Barcode Scanner"
- Android: "QR & Barcode Scanner" or "ZXing"

## Performance Benchmarks

Expected performance characteristics:
- Initial render: < 100ms
- Parameter changes: < 50ms re-render
- Memory usage: Stable (no leaks)
- CPU usage: Minimal impact

## Common Issues & Troubleshooting

1. **Barcode not rendering**: Check console for errors, ensure text is not empty
2. **TypeScript errors**: Verify prop types match interface definitions
3. **Scanner can't read**: Try increasing errorCorrectionLevel or adjusting rows
4. **Performance issues**: Test with shorter text or fewer rows

## API Usage Examples

```typescript
// Basic usage
<Barcode text="Hello World" />

// Custom rows
<Barcode text="Hello World" rows={5} />

// Custom error correction
<Barcode text="Hello World" errorCorrectionLevel={4} />

// Combined parameters
<Barcode 
  text="Hello World" 
  rows={8}
  errorCorrectionLevel={6}
  onPress={() => console.log('Barcode pressed')}
/>
``` 