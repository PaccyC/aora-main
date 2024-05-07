import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router'
export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text >Aora!</Text>
      <StatusBar style='auto'/>
      <Link href="/profile" style={{color:'blue'}}>Go to profile</Link>
    </View>
  );
}

