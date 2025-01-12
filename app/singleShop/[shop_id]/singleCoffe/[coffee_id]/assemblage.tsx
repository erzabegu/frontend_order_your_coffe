import {Text} from "react-native";
import AssemblageTemplate from "@/components/templates/AssemblageTemplate /AssemblageTemplate";
import {useLocalSearchParams} from "expo-router";

const Assemblage = () => {
    const {coffee_id, shop_id} = useLocalSearchParams();

    return <AssemblageTemplate coffee_id={coffee_id as string}/>
}

export default Assemblage;