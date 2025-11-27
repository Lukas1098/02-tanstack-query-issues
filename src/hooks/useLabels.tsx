import { getLabels } from "../issues/actions/get-labels";
import { useQuery } from "@tanstack/react-query";

export const useLabels = () => {
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        staleTime: 1000 * 60 * 60,
    })

    return {
        labelsQuery
    }
}
