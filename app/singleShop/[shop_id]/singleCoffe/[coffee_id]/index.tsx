import {useLocalSearchParams, usePathname, useSegments} from "expo-router";
import SingleCoffeeTemplate from "@/components/templates/SingleCoffeeTemplate/SingleCoffeeTemplate";
import {useEffect} from "react";
import useGetStoreItems from "@/queries/useGetStoreItems";

const CoffeeId = () => {
    const pathname = usePathname();
    const {coffee_id, shop_id} = useLocalSearchParams();
    const segments = useSegments()
    const {data} = useGetStoreItems(shop_id as string)

    useEffect(() => {
        console.log(segments, shop_id, data)
    }, [segments, shop_id, data]);
    return <SingleCoffeeTemplate coffee_id={coffee_id as string}
                                 coffee_url={data?.pages?.flatMap((p) => p?.data?.data || p?.data || []).map((items) => items.item).find((single) => Number(single?.id) == Number(coffee_id))?.url}
                                 coffee_name={data?.pages?.flatMap((p) => p?.data?.data || p?.data || []).map((items) => items.item).find((single) => Number(single?.id) == Number(coffee_id))?.name}/>
}

export default CoffeeId