import {ActivityIndicator, FlatList, Pressable, SafeAreaView, Text, TextStyle, View} from "react-native";
import MapView, {Marker} from "react-native-maps";
import {BottomSheet} from "@/components/atoms";
import Animated, {useSharedValue} from "react-native-reanimated";
import {LinearGradient} from "expo-linear-gradient";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, {useEffect} from "react";
import styles from "./CoffeeStoresTemplate.styles";
import {useRouter} from "expo-router";
import useGetStores from "@/queries/useGetStores";

const CoffeeStoresTemplate = () => {
    const isOpen = useSharedValue(true);
    const router = useRouter();

    const toggleSheet = () => {
        isOpen.value = !isOpen.value;
    };

    const {data, error, fetchNextPage, isLoading} = useGetStores();


    const handleLoadMore = () => {
        fetchNextPage()
    }

    const contentStyle: TextStyle = {
        color: "white",
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16,
        paddingBottom: 30,
        textAlign: 'center'
    };
    const initialRegion = {
        latitude: 53.796400,
        longitude: -1.759000,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    return <View style={styles.container}>
        {isLoading ? <ActivityIndicator size="large"/> :
            <>
                <MapView
                    style={styles.map}
                    mapType={"terrain"}
                    initialRegion={initialRegion}
                    showsUserLocation={true}
                    onPress={() => toggleSheet()}
                >
                    {data?.pages?.flatMap((p) => p?.data?.data || p?.data || [])?.map((location) =>
                        <Marker coordinate={{latitude: location?.latitude, longitude: location?.longitude}}
                                title={location?.name}/>
                    )}
                </MapView>

                <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet} externalStyle={{
                    backgroundColor: "#324A59",
                    justifyContent: 'flex-end',
                    paddingTop: 30,
                    margin: 0,
                    maxHeight: 400
                }}>
                    <Text style={contentStyle}>
                        Select Magic Coffee store
                    </Text>
                    <View style={styles.storesContainer}>
                        <FlatList
                            data={data?.pages?.flatMap((p) => p?.data?.data || p?.data || [])}
                            keyExtractor={(item, index) => item?.id.toString()}
                            renderItem={({item, index}) => (
                                <LinearGradient colors={['#EEA4CE', '#C58BF2']} start={{x: 0, y: 0.7}}
                                                style={{borderRadius: 16, marginBottom: 10}}>
                                    <Pressable style={styles.store}
                                        //@ts-ignore
                                               onPress={() => router.push(`/singleShop/${item?.id}/store`)}>
                                        <View style={styles.storeWrapper}>
                                            <Fontisto name="shopping-store" size={24} color="white"/>
                                            <Text style={styles.storeName}>{item?.name}</Text>
                                        </View>
                                        <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>
                                    </Pressable>
                                </LinearGradient>
                            )}
                            onEndReached={handleLoadMore}
                        />
                    </View>
                </BottomSheet>
            </>
        }
    </View>
}

export default CoffeeStoresTemplate;