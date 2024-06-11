import {useQuery} from "@tanstack/react-query";

const url = `${process.env.EXPO_PUBLIC_API_URI}/api`
const getBridges = async () => {
    const response = await fetch(`${url}/bridges`)
    return response.json();
}

export function useBridges() {
    return useQuery({
        queryKey: ['bridges'],
        queryFn: getBridges,
        refetchInterval: 20000, // TODO: Parameterize
    });
}
const getUserFromId = async (id) => {
    const response = await fetch(`${url}/users/find/${id}`);
    return response.json();

}
export function useUserById(id){
    return useQuery({
        queryKey: ['userId', id],
        queryFn:async () => getUserFromId(id)
    })
}