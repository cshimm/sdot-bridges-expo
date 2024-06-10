import {useQuery} from "@tanstack/react-query";

const url = `${process.env.EXPO_PUBLIC_API_URI}/api`
const getBridges = async () => {
    const response = await fetch(`${url}/bridges`)
    return response.json();
}

export function useBridges() {
    return useQuery({
        queryKey: ['bridges'],
        queryFn: getBridges
    });
}