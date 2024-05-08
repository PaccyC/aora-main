import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router'

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className=' text-3xl font-pbold'>Aora!</Text>
      <StatusBar style='auto'/>
      <Link href="/home" style={{color:'blue'}}>Go to Home</Link>
    </View>
  );
}

