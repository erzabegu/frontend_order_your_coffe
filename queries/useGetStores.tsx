import {useInfiniteQuery} from "@tanstack/react-query";
import StoresService from "@/services/storesService";

const useGetStores = () => {
    return useInfiniteQuery({
        queryKey: ["stores"],
        queryFn: ({pageParam = 1}) => {
            return StoresService.getAllStores(10, pageParam)
        },
        getNextPageParam: (pageParam) => {
            return pageParam?.data?.meta?.currentPage + 1
        },
    })
}

export default useGetStores;

