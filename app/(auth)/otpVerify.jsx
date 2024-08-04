import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useCallback } from 'react'
import { router, Link } from 'expo-router'

import CustomButton from '../../components/CustomButton'
import OtpField from '../../components/OtpField'
const otpVerify = () => {
    const [otp, setOtp] = useState(0)
    const [isSubmitting, setisSubmitting] = useState(false)
    const submit = () => { }
    return <SafeAreaView className="bg-white h-full flex-1 ">
        <ScrollView contentContainerStyle={{ height: '100%' }}>
            <View className="  w-full h-full my-14 min-h-[85vh] px-4">

                <Text className="text-2xl text-black font-bold">
                    Enter the Code?
                </Text>
                <Text className=" text-sm font-normal text-gray-950">A code was sent to +91 9876543245</Text>

                <OtpField
                    otherStyles={"justify-center mt-16 items-center w-full"}
                />
                <CustomButton
                    title="Verify"
                    handlePress={() => router.push('/search')}
                    containerStyles=" w-full mt-[250px] bg-primary"
                    isLoading={isSubmitting}
                />

            </View>

        </ScrollView>
    </SafeAreaView>
}

export default otpVerify
