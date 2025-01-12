import {Tabs, usePathname} from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import {useEffect} from "react";

const SingleShop = () => {
    const pathname = usePathname()
    return <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1d2e37",
        tabBarStyle: {
            position: "absolute",
            display: pathname?.includes("/singleCoffe/") ? "none":'flex',
            marginBottom: 30,
            paddingBottom: 0,
            borderRadius: 20,
            height: 66,
            marginHorizontal: 20
        },
    }}>
        <Tabs.Screen
            name="store"
            options={{
                headerShown: false,
                tabBarLabelStyle: {
                    display: 'none'
                },
                tabBarIcon: ({color}) => <Ionicons name="storefront-outline" size={24} color={color}/>,
            }}
        />
        <Tabs.Screen
            name="rewards"
            options={{
                tabBarLabelStyle: {
                    display: 'none'
                },
                tabBarIcon: ({color}) => <SimpleLineIcons name="present" size={24} color={color}/>,
            }}
        />
        <Tabs.Screen
            name="orders"
            options={{
                tabBarLabelStyle: {
                    display: 'none'
                },
                tabBarIcon: ({color}) => <Ionicons name="newspaper-outline" size={24} color={color}/>,
            }}
        />
        <Tabs.Screen
            name="singleCoffe/[coffee_id]"
            options={{
                href: null
            }}
        />
    </Tabs>
}

export default SingleShop;