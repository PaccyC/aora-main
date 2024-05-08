import { View, Text, ScrollView ,Image} from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '@/components/FormField'
const SignIn = () => {

  const [form, setForm] = useState({
    email:'',
    password:''
  })
  return (
   <SafeAreaView className='bg-primary h-full'>
    <ScrollView>
      <View className='w-full justify-center min-h-[85vh] px-4 my-5'>
       <Image source={images.logo}
          resizeMode='contain' className='w-[115px] h-[35px]'
       />
       <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
        Log in to Aora</Text>

      <FormField
        title="Email"
        value={form.email}
        handleChangeText={(e)=>setForm({...form,email:e})}
        otherStyles="mt-7"
        keyboardType="email-address"
      />
       <FormField
        title="Password"
        value={form.password}
        handleChangeText={(e)=>setForm({...form,password:e})}
        otherStyles="mt-7"
        keyboardType="password"
      />
      </View>

    </ScrollView>
   </SafeAreaView>
  )
}

export default SignIn