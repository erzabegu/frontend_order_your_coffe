import {useInfiniteQuery} from "@tanstack/react-query";
import StoresService from "@/services/storesService";

const useGetStoreItems = (storeId: string) => {
    return useInfiniteQuery({
        queryKey: [`stores-${storeId}`],
        queryFn: ({pageParam = 1}) => {
            return StoresService.getStoreItems(storeId, 5, pageParam)
        },
        getNextPageParam: (pageParam) => {
            return pageParam?.data?.meta?.currentPage + 1
        },
        cacheTime: 0
    })
}

export default useGetStoreItems;