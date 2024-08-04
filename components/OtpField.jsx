import { StyleSheet, Text, TextInput, View } from 'react-native'
import { OtpInput } from 'react-native-otp-entry'

const OtpField = ({ otherstyles }) => {
    return <View className={`${otherstyles} mt-4`}>
        <OtpInput
            numberOfDigits={4}
            focusColor={"#FFCC08"}
            onTextChange={(e) => console.log(e)}
            disabled={false}

            pinCodeContainerStyle={{
                width: 58,
                height: 58,
                borderRadius: 8
            }}
        />
        <Text className=" text-sm mt-2 font-normal text-gray-950">Resend code in 18 Seconds</Text>
    </View>
}

export default OtpField