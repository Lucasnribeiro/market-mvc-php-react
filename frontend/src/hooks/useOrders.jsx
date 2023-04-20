import { useMutation, useQuery, QueryClient } from "react-query";
import api from "../../axios";

export function useOrders(){

    async function createOrder(order){

        const response = await api.post('/sales', order)

        return response
    }

    function deleteOrder(order){

    }

    function updateOrder(order){
    
    }

    function listOrders({filter}){

        let url;
        let queryKey;
    
        if(filter){
            queryKey = "list";
            url = `?name=${filter.name??''}&date=${filter.date??''}}`
        }
    
        if(!filter){
            queryKey = "list";
            url = '';
        }

        const query = useQuery(['orders', queryKey, url], (url) =>
                api.get('/orders' + url.queryKey[2])
                .then((res) => res.data)
            );

        return {
            orders: query.data, 
            isLoading: query.isLoading, 
            isError: query.error, 
            isFetching: query.isFetching
        };
    }

    function countOrders(filter){

        let url;
        let queryKey;
    
        if(filter){
            queryKey = "list";
            url = `?status=${filter.status??''}&type=${filter.type??''}`
        }
    
        if(!filter){
            queryKey = "list";
            url = '';
        }
        
        const query = useQuery(['ordersCount', queryKey, url], (url) =>
                api.get('/orders/count' + url.queryKey[2])
                .then((res) => res.data)
            );

        return {
            count: query.data?.count, 
            isLoading: query.isLoading, 
            isError: query.error, 
            isFetching: query.isFetching
        };

    }


    return {
        createOrder, 
        deleteOrder, 
        updateOrder, 
        listOrders,
        countOrders
    }
}