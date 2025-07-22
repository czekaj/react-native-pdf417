import { Barcode } from '@czekaj/react-native-pdf417';
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

export default function App() {
  const testText = "REACT-NATIVE-PDF417";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>PDF417 Barcode Tests</Text>

        {/* Default barcode */}
        <TestSection
          title="Default Settings"
          subtitle="Auto rows, error level 2"
        >
          <Barcode
            text={testText}
            style={styles.barcode}
            onPress={() => console.log('Default barcode pressed')}
          />
        </TestSection>

        {/* Test different row counts */}
        <TestSection
          title="Custom Row Counts"
          subtitle="Testing rows parameter"
        >
          {[3, 6, 10].map(rowCount => (
            <View key={rowCount} style={styles.testItem}>
              <Text style={styles.label}>Rows: {rowCount}</Text>
              <Barcode
                text={testText}
                rows={rowCount}
                style={styles.barcode}
                onPress={() => console.log(`${rowCount}-row barcode pressed`)}
              />
            </View>
          ))}
        </TestSection>

        {/* Test different error correction levels */}
        <TestSection
          title="Error Correction Levels"
          subtitle="Testing errorCorrectionLevel parameter (0-8)"
        >
          {[0, 2, 4, 8].map(level => (
            <View key={level} style={styles.testItem}>
              <Text style={styles.label}>Error Level: {level}</Text>
              <Barcode
                text={testText}
                errorCorrectionLevel={level}
                style={styles.barcode}
                onPress={() => console.log(`Error level ${level} barcode pressed`)}
              />
            </View>
          ))}
        </TestSection>

        {/* Test combinations */}
        <TestSection
          title="Combined Parameters"
          subtitle="Testing rows + errorCorrectionLevel together"
        >
          <View style={styles.testItem}>
            <Text style={styles.label}>Rows: 5, Error Level: 1</Text>
            <Barcode
              text={testText}
              rows={5}
              errorCorrectionLevel={1}
              style={styles.barcode}
              onPress={() => console.log('Combined params barcode pressed')}
            />
          </View>

          <View style={styles.testItem}>
            <Text style={styles.label}>Rows: 8, Error Level: 6</Text>
            <Barcode
              text={testText}
              rows={8}
              errorCorrectionLevel={6}
              style={styles.barcode}
              onPress={() => console.log('Combined params 2 barcode pressed')}
            />
          </View>
        </TestSection>

        {/* Test different text lengths */}
        <TestSection
          title="Different Text Lengths"
          subtitle="Testing how parameters affect different content sizes"
        >
          <View style={styles.testItem}>
            <Text style={styles.label}>Short text (4 rows)</Text>
            <Barcode
              text="SHORT"
              rows={4}
              style={styles.barcode}
              onPress={() => console.log('Short text barcode pressed')}
            />
          </View>

          <View style={styles.testItem}>
            <Text style={styles.label}>Long text (8 rows, error level 3)</Text>
            <Barcode
              text="This is a much longer text to test how the PDF417 barcode handles larger amounts of data with custom parameters"
              rows={8}
              errorCorrectionLevel={3}
              style={styles.barcode}
              onPress={() => console.log('Long text barcode pressed')}
            />
          </View>
        </TestSection>

        <Text style={styles.footer}>
          Tap any barcode to test onPress functionality
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

interface TestSectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const TestSection: React.FC<TestSectionProps> = ({ title, subtitle, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionSubtitle}>{subtitle}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161616',
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    marginBottom: 30,
    backgroundColor: '#222222',
    borderRadius: 8,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#aaaaaa',
    marginBottom: 16,
  },
  testItem: {
    marginBottom: 16,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  barcode: {
    height: windowWidth / 5,
    width: windowWidth * 0.8,
    backgroundColor: '#ffffff',
  },
  footer: {
    fontSize: 14,
    color: '#aaaaaa',
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },
});
