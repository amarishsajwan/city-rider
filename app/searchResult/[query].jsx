import { View, ScrollView, Text, FlatList, Image, TouchableOpacity, RefreshControl, Alert } from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import { icons, images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import RecentSearch from '../../components/RecentSearch'
import { router } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'

const Search = () => {
    const { pickup, drop } = useLocalSearchParams();

    // Dummy data for buses. Replace this with actual data from your backend.
    const buses = [
        { id: '1', route: 'Bus 1', pickup, drop },
        { id: '2', route: 'Bus 2', pickup, drop },
        // Add more buses here
    ];
    console.log("locations", pickup, drop)
    return (
        <SafeAreaView className="bg-white h-full px-4">
            <FlatList
                ListHeaderComponent={() => (
                    <>
                        <View>
                            <Text className="text-base font-medium text-black">Found Rides(10)</Text>
                        </View>
                        <View className="p-4  rounded-xl w-full">
                            <View className="space-y-3">
                                <View className="flex-col space-y-3">
                                    <View className="flex-row justify-between items-center">
                                        <View>
                                            <Text className="font-medium text-sm">Ride Detail</Text>
                                            <Text className="font-normal text-gray-600 text-[8px]">04/08/2024</Text>
                                        </View>
                                        <Text className="font-bold text-base ">Rs 150</Text>
                                    </View>
                                    <View className=" space-y-3 ">
                                        <View className="flex-row space-x-2 items-center">
                                            <Image
                                                source={icons.location}
                                                className="w-5  h-5 "
                                                resizeMode='contain'
                                            />
                                            <Text className="" >{pickup}</Text>
                                        </View>
                                        <View className="flex-row space-x-2 items-center">
                                            <Image
                                                source={icons.location}
                                                className="w-5 h-5 "
                                                resizeMode='contain'
                                            />
                                            <Text className="" >{drop}</Text>
                                        </View>
                                    </View>

                                </View>
                                <View className=" border border-gray-200" ></View>
                                <View className="flex-row justify-between items-center">
                                    <View className=" flex-row gap-[10px]">
                                        <View className=" first-letter:rounded-full border-2 border-green-500">
                                            <Image
                                                source={images.profile}
                                                className=" w-[37px]  h-[37px] rounded-full "
                                                resizeMode='contain'
                                            />
                                        </View>
                                        <View className="flex-col space-y-1">
                                            <Text className="font-medium text-sm">Amarish</Text>
                                            <Text className="font-normal text-[8px] text-[#9D9D9D]" >Profile Completed 70%</Text>

                                        </View>

                                    </View>
                                    <View className="flex-row justify-between space-x-2 items-center px-4 rounded-[60px] py-2 bg-primary">
                                        <Image
                                            source={icons.call}
                                            className=" w-[19px]  h-[19px] "
                                            resizeMode='contain'
                                        />
                                        <Text className="font-semibold text-sm">Call</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </>

                )}
            // data={[{ id: 1, pick: "Shivaji NAgar", drop: "Bharati Nagar" }, { id: 2, pick: "Shivaji NAgar", drop: "Bharati Nagar" }, { id: 3, pick: "Shivaji NAgar", drop: "Bharati Nagar" }, { id: 4, pick: "Shivaji NAgar", drop: "Bharati Nagar" }, { id: 6, pick: "Shivaji NAgar", drop: "Bharati Nagar" }, { id: 7, pick: "Shivaji NAgar", drop: "Bharati Nagar" }, { id: 8, pick: "Shivaji NAgar", drop: "Bharati Nagar" }, { id: 9, pick: "Shivaji NAgar", drop: "Bharati Nagar" }, { id: 10, pick: "Shivaji NAgar", drop: "Bharati Nagar" }, { id: 11, pick: "Shivaji NAgar", drop: "Bharati Nagar" }, { id: 12, pick: "Shivaji NAgar", drop: "Bharati Nagar" }, { id: 13, pick: "Shivaji NAgar", drop: "Bharati Nagar" }, { id: 14, pick: "Shivaji NAgar", drop: "Bharati Nagar" }]}
            // keyExtractor={(item) => item.$id}
            // renderItem={({ item }) => <View className=" bg-white mx-8 my-2 py-4 space-y-2 px-3 border border-primary rounded-xl border-1">
            //     <View className="flex-row space-x-2 items-center">
            //         <Image
            //             source={icons.location}
            //             className="w-5  h-5 "
            //             resizeMode='contain'
            //         />
            //         <Text className="" >{item.pick}</Text>
            //     </View>
            //     <View className="flex-row space-x-2 items-center">
            //         <Image
            //             source={icons.location}
            //             className="w-5 h-5 "
            //             resizeMode='contain'
            //         />
            //         <Text className="" >{item.drop}</Text>
            //     </View>
            // </View>
            // }

            // ListEmptyComponent={() =>
            //     <Text className="text-black-200"> No recent rides</Text>
            // }
            // refreshControl={<RefreshControl
            //     refereshing={refreshing}
            //     onRefresh={onRefresh}

            // />}
            />

        </SafeAreaView>
    )
}

export default Search