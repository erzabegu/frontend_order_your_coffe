import {View, Text, SafeAreaView, FlatList, Image, Pressable} from "react-native";
import styles from "@/components/templates/CoffeeShopMenuTemplate/CoffeeShopMenuTemplate.styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import Animated, {useSharedValue} from "react-native-reanimated";
import React, {useEffect} from "react";
import {BottomSheet} from "@/components/atoms";
import {router, useLocalSearchParams, usePathname, useRouter, useSegments} from "expo-router";
import useGetStoreItems from "@/queries/useGetStoreItems";

const CoffeeShopMenuTemplate = () => {
    const isOpen = useSharedValue(true);
    const {shop_id} = useLocalSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const {data, fetchNextPage} = useGetStoreItems(shop_id as string)


    return <SafeAreaView style={styles.safeContainer}>
        <View style={styles.header}>
            <View>
                <Text style={styles.welcomeText}>Welcome!</Text>
                <Text style={styles.credentials}>Alex</Text>
            </View>
            <View style={styles.iconsWrapper}>
                <Ionicons name="cart-outline" size={26} color="#001833"/>
                <Ionicons name="person-outline" size={26} color="#001833"/>
            </View>
        </View>
        <BottomSheet isOpen={isOpen} externalStyle={{
            backgroundColor: "#324A59",
            paddingTop: 30,
            margin: 0,
            maxHeight: "97%"
        }}>
            <Animated.Text style={styles.title}>
                Select your coffee
            </Animated.Text>
            <FlatList
                data={data?.pages?.flatMap((p) => p?.data?.data || p?.data || [])}
                initialNumToRender={4}
                keyExtractor={(item) => String(item?.item.id)}
                style={{marginBottom: 100}}
                numColumns={2}
                columnWrapperStyle={styles.row}
                renderItem={({item}) => {
                    // @ts-ignore
                    return <Pressable style={styles.itemContainer}
                                      onPress={() => router.push(`/singleShop/1/singleCoffe/${item?.item?.id}`)}>
                        <Image source={{uri: item?.item?.url}} style={styles.image}/>
                        <Text style={styles.text}>{item?.item?.name}</Text>
                    </Pressable>
                }}
                onEndReached={() => fetchNextPage()}
                onEndReachedThreshold={0}
            />
        </BottomSheet>
    </SafeAreaView>
}

export default CoffeeShopMenuTemplate;