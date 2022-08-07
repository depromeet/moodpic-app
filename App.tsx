import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const BASE_URI = 'https://moodpic.kr';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: BASE_URI }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
});
