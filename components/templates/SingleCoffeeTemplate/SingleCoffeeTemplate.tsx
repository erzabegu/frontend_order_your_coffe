import {Pressable, SafeAreaView, View, Text, Image, Switch, Button, Animated} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {useLocalSearchParams, useRouter, useSegments} from "expo-router";
import styles from './SingleCoffeeTemplate.styles'
import Ionicons from "@expo/vector-icons/Ionicons";
import React, {useEffect, useState} from "react";
import TakeAwayIcon from "@/assets/icons/TakeAwayIcon";
import OnSiteIcon from "@/assets/icons/OnSiteIcon";
import SmallCup from "@/assets/icons/SmallCup";
import LargeCup from "@/assets/icons/LargeCup";
import MediumCup from "@/assets/icons/MediumCup";
import DateTimePicker from '@react-native-community/datetimepicker';
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {LinearGradient} from "expo-linear-gradient";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import ScrollView = Animated.ScrollView;
import {SingleCoffeeTemplateTypes} from "@/components/templates/SingleCoffeeTemplate/SingleCoffeeTemplate.types";
import useOrderState from "@/store/useOrderStore";
import useGetStoreItems from "@/queries/useGetStoreItems";

const SingleCoffeeTemplate = ({coffee_id, coffee_name, coffee_url}: SingleCoffeeTemplateTypes) => {
    const router = useRouter();
    useEffect(() => {
        console.log(coffee_url, "coffee_url")
    }, [coffee_url]);
    const [coffeeProperties, setCoffeeProperties] = useState({
        amount: 1,
        ristretto: 1,
        onSite: false,
        volume: "L",
        isCertainTimeEnabled: false,
        date: undefined
    });

    const [date, setDate] = useState(new Date(1598051730000));
    const {shop_id} = useLocalSearchParams();
    const segments = useSegments()
    const {data} = useGetStoreItems(shop_id as string)


    const {order, setOrder} = useOrderState();

    useEffect(() => {
        useOrderState.setState((state) => ({
            order: {
                ...state.order,
                storeId: Number(shop_id as string),
            },
        }));
    }, [shop_id])
    useEffect(() => {
        const foundCoffee = order?.items?.find((item) => item?.itemId === coffee_id);
        if (Number(order?.storeId) === Number(shop_id) && foundCoffee) {
            // @ts-ignore
            setCoffeeProperties((prev) => ({
                ...prev,
                amount: foundCoffee?.amount ?? prev.amount,
                ristretto: foundCoffee?.ristretto ?? prev.ristretto,
                onSite: foundCoffee?.onSite ?? prev.onSite,
                volume: foundCoffee?.volume ?? prev.volume,
                isCertainTimeEnabled: foundCoffee?.isCertainTimeEnabled ?? prev.isCertainTimeEnabled,
                date: foundCoffee?.date ?? prev.date,
                coffeeUrl: coffee_url
            }));
        }
    }, [coffee_id, shop_id, order]);


    return <SafeAreaView style={styles.safeContainer}>
        <ScrollView>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Pressable onPress={() => router.back()}>
                        <FontAwesome6 name="arrow-left-long" size={24} color="black"/>
                    </Pressable>
                    <Text style={styles.title}>
                        Orders
                    </Text>
                    <Ionicons name="cart-outline" size={26} color="#001833"/>
                </View>
                <View style={styles.coffeeImage}>
                    <Image source={{uri: coffee_url}} width={152} height={121}/>
                </View>
                <View style={styles.propertyWrapper}>
                    <Text style={styles.propertyTitle}>{coffee_name}</Text>
                    <View style={styles.amount}>
                        <Pressable
                            onPress={() => {
                                setCoffeeProperties({...coffeeProperties, amount: coffeeProperties.amount - 1})
                            }}>
                            <Text style={styles.propertyTitle}>-</Text>
                        </Pressable>
                        <Text style={styles.propertyTitle}>{coffeeProperties?.amount}</Text>
                        <Pressable
                            onPress={() => setCoffeeProperties({
                                ...coffeeProperties,
                                amount: coffeeProperties.amount + 1
                            })}>
                            <Text style={styles.propertyTitle}>+</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.propertyWrapper}>
                    <Text style={styles.propertyTitle}>Ristretto</Text>
                    <View style={styles.ristrettoContainer}>
                        <View
                            style={[styles.ristrettoAmount, coffeeProperties?.ristretto === 1 && styles.activeRistretto]}>
                            <Pressable
                                onPress={() => setCoffeeProperties({...coffeeProperties, ristretto: 1})}>
                                <Text style={styles.propertyTitle}>One</Text>
                            </Pressable>

                        </View>
                        <View
                            style={[styles.ristrettoAmount, coffeeProperties?.ristretto === 2 && styles.activeRistretto]}>
                            <Pressable
                                onPress={() => setCoffeeProperties({...coffeeProperties, ristretto: 2})}>
                                <Text style={styles.propertyTitle}>Two</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={styles.propertyWrapper}>
                    <Text style={styles.propertyTitle}>Onsite / Takeaway</Text>
                    <View style={styles.onSiteContainer}>
                        <Pressable onPress={() => setCoffeeProperties({...coffeeProperties, onSite: true})}>
                            <OnSiteIcon
                                active={coffeeProperties?.onSite}
                            />
                        </Pressable>
                        <Pressable
                            onPress={() => setCoffeeProperties({...coffeeProperties, onSite: false})}
                        >
                            <TakeAwayIcon
                                active={!coffeeProperties?.onSite}
                            />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.propertyWrapper}>
                    <Text style={styles.propertyTitle}>Volume, ml</Text>
                    <View style={styles.volumeContainer}>
                        <Pressable onPress={() => setCoffeeProperties({...coffeeProperties, volume: "S"})}>
                            <SmallCup
                                active={coffeeProperties?.volume === "S"}
                            />
                        </Pressable>
                        <Pressable
                            onPress={() => setCoffeeProperties({...coffeeProperties, volume: "M"})}
                        >
                            <MediumCup
                                active={coffeeProperties?.volume === "M"}
                            />
                        </Pressable>
                        <Pressable
                            onPress={() => setCoffeeProperties({...coffeeProperties, volume: "L"})}
                        >
                            <LargeCup
                                active={coffeeProperties?.volume === "L"}
                            />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.certainTimeWrapper}>
                    <Text style={styles.propertyTitle}>Prepare by a certain time today?</Text>
                    <View style={styles.volumeContainer}>
                        <Switch
                            trackColor={{false: '#767577', true: '#34C759'}}
                            thumbColor={coffeeProperties?.isCertainTimeEnabled ? '#ffffff' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={(e) => setCoffeeProperties({...coffeeProperties, isCertainTimeEnabled: e})}
                            value={coffeeProperties?.isCertainTimeEnabled}
                        />
                    </View>
                </View>
                {coffeeProperties?.isCertainTimeEnabled && <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={"time"}
                    is24Hour={true}
                    onChange={(e) => {
                        // @ts-ignore
                        setCoffeeProperties({...coffeeProperties, date: e?.nativeEvent?.timestamp})
                    }}
                />}
                <LinearGradient
                    colors={['#EEA4CE', '#C58BF2']}
                    start={{x: 0, y: 0.7}}
                    style={{borderRadius: 16, marginTop: 20, marginHorizontal: 20}}>
                    <Pressable style={styles.store}
                               onPress={() => router.push(`/singleShop/${shop_id}/singleCoffe/${coffee_id}/assemblage`)}>
                        <View style={styles.storeWrapper}>
                            <SettingsIcon/>
                            <Text style={styles.storeName}>Coffee lover assemblage</Text>
                        </View>
                        <View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>
                        </View>
                    </Pressable>
                </LinearGradient>
                <View style={styles.totalWrapper}>
                    <Text style={styles.propertyTitle}>Total Amount</Text>
                    <Text style={styles.propertyTitle}>BYN 3.00</Text>
                </View>
                <Pressable style={styles.submitButton} onPress={() => {


                    useOrderState.setState((state) => {
                        const existingItemIndex = state.order.items.findIndex(
                            (item) => item.itemId === coffee_id
                        );

                        let updatedItems;

                        if (existingItemIndex !== -1) {
                            updatedItems = state.order.items.map((item, index) =>
                                index === existingItemIndex
                                    ? {
                                        ...item,
                                        amount: coffeeProperties?.amount,
                                        isCertainTimeEnabled: coffeeProperties?.isCertainTimeEnabled,
                                        onSite: coffeeProperties?.onSite,
                                        ristretto: coffeeProperties?.ristretto,
                                        volume: coffeeProperties?.volume,
                                        date: coffeeProperties?.date,
                                        coffeeUrl: coffee_url
                                    }
                                    : item
                            );
                        } else {
                            updatedItems = [
                                ...state.order.items,
                                {itemId: coffee_id, amount: 1, coffeeUrl: coffee_url},
                            ];
                        }

                        return {
                            order: {
                                ...state.order,
                                items: updatedItems,
                            },
                        };
                    });


                    router.push(`/singleShop/${shop_id}/orders`)


                }}>
                    <Text style={styles.nextTitle}>Add to cart</Text>
                </Pressable>
            </View>
        </ScrollView>
    </SafeAreaView>
}

export default SingleCoffeeTemplate;