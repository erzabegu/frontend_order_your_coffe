import {ActionSheetIOS, Image, Pressable, SafeAreaView, ScrollView, Switch, Text, View} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, {useEffect, useState} from "react";
import styles from './AssemblageTemplate.styles'
import {useLocalSearchParams, useRouter, useSegments} from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import Slider from '@react-native-community/slider';
import LargeRoasting from "@/assets/icons/LargeRoasting";
import MediumRoasting from "@/assets/icons/MediumRoasting";
import SmallRoasting from "@/assets/icons/SmallRoasting";
import SmallGrinding from "@/assets/icons/SmallGrinding";
import LargeGrinding from "@/assets/icons/LargeGrinding";
import LargeIce from "@/assets/icons/LargeIce";
import MediumIce from "@/assets/icons/MediumIce";
import SmallIce from "@/assets/icons/SmallIce";
import ActionSheet from "@/components/molecules/ActionSheet/ActionSheet";
import useOrderState from "@/store/useOrderStore";
import {AssemblageTemplateTypes} from "@/components/templates/AssemblageTemplate /AssemblageTemplate.types";

const AssemblageTemplate = ({coffee_id}: AssemblageTemplateTypes) => {
    const router = useRouter();
    const [coffeeProperties, setCoffeeProperties] = useState({
        coffee_type: 0,
        roasting: "M",
        grinding: "S",
        ice: "S"
    });
    const {shop_id} = useLocalSearchParams();
    const segments = useSegments()
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
                ice: foundCoffee?.ice ?? prev.ice,
                roasting: foundCoffee?.roasting ?? prev.roasting,
                grinding: foundCoffee?.grinding ?? prev.grinding,
                coffee_type: foundCoffee?.volume ?? prev.coffee_type,
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
                        Coffee lover assemblage
                    </Text>
                    <Ionicons name="cart-outline" size={26} color="#001833"/>
                </View>
                <View style={styles.coffeeSlider}>
                    <Text style={styles.sliderTitle}>Coffee Type</Text>
                    <View style={styles.sliderWrapper}>
                        <Slider
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            maximumValue={1}
                            value={coffeeProperties?.coffee_type}
                            minimumTrackTintColor="#007AFF"
                            maximumTrackTintColor="#78788033"
                            onValueChange={(e) => setCoffeeProperties({...coffeeProperties, coffee_type: e})}
                        />
                        <View style={styles.sliderDescription}>
                            <Text style={styles.sliderDescriptionTitle}>Arabica</Text>
                            <Text style={styles.sliderDescriptionTitle}>Robusta</Text>
                        </View>
                    </View>
                </View>
                {/*<View style={styles.propertyWrapper}>*/}
                {/*    <Text style={styles.propertyTitle}>Coffee sort</Text>*/}
                {/*    <ActionSheet*/}
                {/*        options={[{id: 1, label: "test"}]}*/}
                {/*        onPress={(e) => console.log(e)}*/}
                {/*        title={'What type of milk do you prefer'}*/}
                {/*        triggerElement={<View>*/}
                {/*            <AntDesign name="right" size={16} color="#7B6F72"/>*/}
                {/*        </View>}/>*/}
                {/*</View>*/}
                <View style={styles.propertyWrapper}>
                    <Text style={styles.propertyTitle}>Roasting</Text>
                    <View style={styles.volumeContainer}>
                        <Pressable onPress={() => setCoffeeProperties({...coffeeProperties, roasting: "S"})}>
                            <SmallRoasting
                                active={coffeeProperties?.roasting === "S"}
                            />
                        </Pressable>
                        <Pressable
                            onPress={() => setCoffeeProperties({...coffeeProperties, roasting: "M"})}
                        >
                            <MediumRoasting
                                active={coffeeProperties?.roasting === "M"}
                            />
                        </Pressable>
                        <Pressable
                            onPress={() => setCoffeeProperties({...coffeeProperties, roasting: "L"})}
                        >
                            <LargeRoasting
                                active={coffeeProperties?.roasting === "L"}
                            />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.propertyWrapper}>
                    <Text style={styles.propertyTitle}>Grinding</Text>
                    <View style={styles.onSiteContainer}>
                        <Pressable onPress={() => setCoffeeProperties({...coffeeProperties, grinding: 'S'})}>
                            <SmallGrinding
                                active={coffeeProperties?.grinding === "S"}
                            />
                        </Pressable>
                        <Pressable
                            onPress={() => setCoffeeProperties({...coffeeProperties, grinding: 'L'})}
                        >
                            <LargeGrinding
                                active={coffeeProperties?.grinding === "L"}
                            />
                        </Pressable>
                    </View>
                </View>
                {/*<View style={styles.propertyWrapper}>*/}
                {/*    <Text style={styles.propertyTitle}>Milk</Text>*/}
                {/*    <Text style={styles.propertyTitle}>Select</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.propertyWrapper}>*/}
                {/*    <Text style={styles.propertyTitle}>Syrup</Text>*/}
                {/*    <Text style={styles.propertyTitle}>Select</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.propertyWrapper}>*/}
                {/*    <Text style={styles.propertyTitle}>Additives</Text>*/}
                {/*    <AntDesign name="right" size={16} color="#7B6F72"/>*/}
                {/*</View>*/}
                <View style={styles.propertyWrapper}>
                    <Text style={styles.propertyTitle}>Ice</Text>
                    <View style={styles.volumeContainer}>
                        <Pressable onPress={() => setCoffeeProperties({...coffeeProperties, ice: "S"})}>
                            <SmallIce
                                active={coffeeProperties?.ice === "S"}
                            />
                        </Pressable>
                        <Pressable
                            onPress={() => setCoffeeProperties({...coffeeProperties, ice: "M"})}
                        >
                            <MediumIce
                                active={coffeeProperties?.ice === "M"}
                            />
                        </Pressable>
                        <Pressable
                            onPress={() => setCoffeeProperties({...coffeeProperties, ice: "L"})}
                        >
                            <LargeIce
                                active={coffeeProperties?.ice === "L"}
                            />
                        </Pressable>
                    </View>
                </View>
                <Pressable style={styles.submitButton} onPress={() => {
                    // @ts-ignore
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
                                        ice: coffeeProperties?.ice,
                                        grinding: coffeeProperties?.grinding,
                                        roasting: coffeeProperties?.roasting,
                                        coffee_type: coffeeProperties?.coffee_type,
                                    }
                                    : item
                            );
                        } else {
                            updatedItems = [
                                ...state.order.items,
                                {itemId: coffee_id, amount: 1},
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
                {/*<View style={styles.totalWrapper}>*/}
                {/*    <Text style={styles.propertyTitle}>Total Amount</Text>*/}
                {/*    <Text style={styles.propertyTitle}>BYN 3.00</Text>*/}
                {/*</View>*/}
                {/*<Pressable style={styles.submitButton}>*/}
                {/*    <Text style={styles.nextTitle}>Next</Text>*/}
                {/*</Pressable>*/}
            </View>
        </ScrollView>
    </SafeAreaView>
}
export default AssemblageTemplate