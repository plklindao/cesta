import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Saudacao, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bora um apzinho d 20?</Text>
       <Saudacao nome='Plk' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
