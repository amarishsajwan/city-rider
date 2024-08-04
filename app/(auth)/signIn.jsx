import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { router, Link } from 'expo-router'

const signIn = () => {
    const [form, setform] = useState({
        number: '',
    })
    const [isSubmitting, setisSubmitting] = useState(false)
    // const submit = () => { }
    return <SafeAreaView className="bg-white h-full flex-1 ">
        <ScrollView contentContainerStyle={{ height: '100%' }}>
            <View className="  w-full h-full my-14 min-h-[85vh] px-4">

                <Text className="text-2xl text-black font-bold">
                    What's your Number?
                </Text>
                <Text className=" text-sm font-normal text-gray-950">we'll text a code to verify your phone</Text>
                <FormField
                    title=""
                    placeHolder="Enter Number"
                    value={form.number}
                    handleChangeText={(e) => setform({
                        ...form,
                        number: e
                    }
                    )}
                    otherStyles=""
                />
                <CustomButton
                    title="Sent Code"
                    handlePress={() => router.push('/otpVerify')}
                    containerStyles=" w-full mt-[300px] bg-primary"
                    isLoading={isSubmitting}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
}

export default signIn

