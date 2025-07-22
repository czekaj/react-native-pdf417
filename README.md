# react-native-pdf417

React-Native library which allows you to generate a barcode in pdf417 format

> **🚀 Enhanced Fork**: This is a fork of [@reeq/react-native-pdf417](https://github.com/reeq-dev/react-native-pdf417) that adds advanced PDF417 customization features and comprehensive test coverage.

## 🆕 Additional Features

This fork adds support for:
- **Custom row count** (`rows` prop) - Control barcode height by specifying the number of rows
- **Error correction level** (`errorCorrectionLevel` prop) - Set error correction level (0-8) for improved barcode robustness
- **Comprehensive test suite** - Unit tests for TypeScript interfaces and prop validation
- **Enhanced example app** - Visual test suite demonstrating all features

Android pdf417 writer is based on zxing library https://github.com/zxing/zxing

## Screenshots

<div>
  <img src="https://user-images.githubusercontent.com/26365596/185647050-5623f0a1-00ca-4c64-a279-866ca21cfad2.png" alt="iOS" width="200"/>
  <img src="https://user-images.githubusercontent.com/26365596/185647152-31297ea9-7014-49f0-a2af-1a0c61feba08.png" alt="Android" width="200"/>
</div>

## Installation

```sh
npm install @czekaj/react-native-pdf417
```

or

```sh
yarn add @czekaj/react-native-pdf417
```

and

```sh
cd ios/
pod install
```

## Usage

### Basic Usage

```js
import { Barcode } from '@czekaj/react-native-pdf417';

// ...

const { width: windowWidth } = useWindowDimensions();

<Barcode
  text="hello pdf417"
  style={{ height: windowWidth / 4, width: windowWidth }}
  onPress={() => {
    console.log('barcode pressed');
  }}
/>;
```

### Advanced Usage with Custom Parameters

```js
// Custom row count for specific barcode height
<Barcode
  text="Custom height barcode"
  rows={8}
  style={{ height: windowWidth / 3, width: windowWidth }}
  onPress={() => console.log('Custom rows barcode pressed')}
/>

// Enhanced error correction for better scanning reliability
<Barcode
  text="High reliability barcode"
  errorCorrectionLevel={6}
  style={{ height: windowWidth / 4, width: windowWidth }}
  onPress={() => console.log('High error correction barcode pressed')}
/>

// Combined custom parameters
<Barcode
  text="Fully customized barcode"
  rows={10}
  errorCorrectionLevel={4}
  style={{ height: windowWidth / 3, width: windowWidth }}
  onPress={() => console.log('Custom barcode pressed')}
/>
```

## Props

Most of the default `View` props and:

- `text`: text string you want to convert into barcode. **Required**
- `onPress`: on barcode press event. **Optional**
- `rows`: number of rows in the barcode (controls height). **Optional** 
  - When set to 0 or not provided, rows are auto-calculated
  - Higher values create taller barcodes
- `errorCorrectionLevel`: error correction level (0-8). **Optional**
  - Default: 2
  - Higher values provide better error recovery but may increase barcode size
  - Range: 0 (minimal) to 8 (maximum error correction)

## Testing

This fork includes comprehensive test coverage:

```sh
# Run unit tests
npm test

# Run example app for visual testing
cd example
npm run ios
# or
npm run android
```

See [TESTING.md](TESTING.md) for detailed testing instructions and guidelines.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

**Original library**: [@reeq/react-native-pdf417](https://github.com/reeq-dev/react-native-pdf417)  
**Enhanced by**: This fork adds advanced PDF417 customization and testing capabilities

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
