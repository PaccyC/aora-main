import { View, Text, ScrollView ,Image} from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
const SignIn = () => {

  const [form, setForm] = useState({
    email:'',
    password:''
  })
  const [isSubmitting, setisSubmitting] = useState(false)

  const handleSUbmit= ()=>{

  }
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
        placeholder="Enter your email address"
      />
       <FormField
        title="Password"
        value={form.password}
        handleChangeText={(e)=>setForm({...form,password:e})}
        otherStyles="mt-7"
        keyboardType="password"
        placeholder="Enter your password"
      
      />
      <CustomButton
      title="Sign in"
      handlePress={handleSUbmit}
      isLoading={isSubmitting}
      containerStyles="mt-7"
      />

      <View className='justify-center pt-5 gap-2 flex-row'>
        <Text className='text-lg text-gray-100 font-plegular'>
          Don't have an account?
          <Link href='/sign-up' className='text-lg font-semibold text-secondary-100'>Sign up</Link>
      
        </Text>
      </View>
      </View>

    </ScrollView>
   </SafeAreaView>
  )
}

export default SignIn