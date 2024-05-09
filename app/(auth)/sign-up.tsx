import { View, Text, ScrollView ,Image, Alert} from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import {createUser} from '../../lib/appWrite'
const SignUp = () => {

  const [form, setForm] = useState({
    username:'',
    email:'',
    password:''
  })
  const [isSubmitting, setisSubmitting] = useState(false)

  const handleSubmit= async()=>{
    console.log("Submitting...");
    
    if(!form.username || !form.password || !form.email){
      Alert.alert("Error","please fill in all fields")


      setisSubmitting(true)
      try {
        
        const result = await createUser(form.username,form.email,form.password)

        router.push('/home')
      } catch (error) {
        Alert.alert("Error",error.message)
      }
      finally{
        setisSubmitting(false)
      }
    }

  }
  return (
   <SafeAreaView className='bg-primary h-full'>
    <ScrollView>
      <View className='w-full justify-center min-h-[85vh] px-4 my-5'>
       <Image source={images.logo}
          resizeMode='contain' className='w-[115px] h-[35px]'
       />
       <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
        Sign up to Aora</Text>

      <FormField
        title="Username"
        value={form.username}
        handleChangeText={(e)=>setForm({...form,username:e})}
        otherStyles="mt-10"
        keyboardType="username"
        placeholder="Enter your username"
      /> 

      <FormField
        title="Email"
        value={form.email}
        handleChangeText={(e)=>setForm({...form,email:e})}
        otherStyles="mt-7"
        keyboardType="email"
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
      title="Sign up"
      handlePress={handleSubmit}
      isLoading={isSubmitting}
      containerStyles="mt-7"
      />

      <View className='justify-center pt-5 gap-2 flex-row'>
        <Text className='text-lg text-gray-100 font-plegular'>
          Already have an account?
          <Link href='/sign-in' className='text-lg font-semibold text-secondary-100'>Sign in</Link>
      
        </Text>
      </View>
      </View>

    </ScrollView>
   </SafeAreaView>
  )
}

export default SignUp