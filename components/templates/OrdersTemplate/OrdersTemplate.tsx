import React, {FunctionComponent, useEffect, useState} from "react";
import useOrderState from "@/store/useOrderStore";
import {View, Text, SafeAreaView, ScrollView, TouchableOpacity, Pressable, Image} from "react-native";
import styles from "./OrdersTemplate.styles";
import {GestureHandlerRootView, Swipeable} from "react-native-gesture-handler";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {useRouter} from "expo-router";
import Octicons from '@expo/vector-icons/Octicons';
const renderRightActions = (progress, dragX) => {
    return (
        <TouchableOpacity style={styles.deleteButton}>
            <Octicons name="trash" size={24} color="black" />
        </TouchableOpacity>
    );
};
const OrdersTemplate = () => {
    const {order, setOrder} = useOrderState();

    useEffect(() => {
        console.log(order, "order")
    }, [order]);
    const router = useRouter();
    return <SafeAreaView style={styles.safeContainer}>
        <ScrollView>
            <GestureHandlerRootView style={styles.container}>
                <Pressable onPress={() => router.back()}>
                    <FontAwesome6 name="arrow-left-long" size={24} color="black"/>
                </Pressable>
                <Text style={styles.title}>
                    My order
                </Text>
                {order?.items.map((item) => (
                    <Swipeable
                        key={item?.itemId}
                        renderRightActions={(progress, dragX) => (
                            <TouchableOpacity
                                style={styles.deleteButton}
                            >
                                <Text style={styles.deleteText}>🗑️</Text>
                            </TouchableOpacity>
                        )}
                    >
                        <View style={styles.itemContainer}>
                            <Image source={{uri: item?.coffeeUrl}} style={styles.itemImage}/>
                            <View style={styles.itemDetails}>
                                {/*<Text style={styles.itemName}>{item.name}</Text>*/}
                                {/*<Text style={styles.itemDescription}>{item.description}</Text>*/}
                                {/*<Text style={styles.itemPrice}>BYN {item.price}</Text>*/}
                            </View>
                        </View>
                    </Swipeable>
                ))}
            </GestureHandlerRootView>
        </ScrollView>
    </SafeAreaView>
}
export default OrdersTemplate;