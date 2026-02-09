import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';
import Sobrenome from './src /Telas/Sobrenome';


export default function App() {
  return (
    <SafeAreaView>
      <Text>Ap de 3,50</Text>
      <Sobrenome nome='full ump e xm8'/>
      <Sobrenome nome='Vale duas ump adm?'/>
      <Sobrenome nome='W.O adm'/>
      <Sobrenome nome='Pode Música adm?'/>
      <Sobrenome nome='Pode se ensconder adm?'/>
      <Sobrenome nome='Pode falar da mãe adm?'/>
      
     <StatusBar />
    </SafeAreaView>
  );
}


