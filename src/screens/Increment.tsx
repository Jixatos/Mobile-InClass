import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Incremento from '../components/Incremento';
 
export default function App() {
  return (
    <Incremento value={0} />
  );
}
 