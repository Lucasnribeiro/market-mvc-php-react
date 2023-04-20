import { useMutation, useQuery, QueryClient } from "react-query";
import { toast } from "react-toastify";
import api from "../../axios";

export function useProductTypes(){

    async function createProductType(productType){
        const query = await api.post('/product_types', productType)
        toast.success('Produto cadastrado.')
    }

    function deleteProductType(productType){

    }

    function updateProductType(productType){
    
    }

    function listProductTypes({filter}){

        let url;
        let queryKey;
    
        if(filter){
            queryKey = "list";
            url = `?name=${filter.name??''}&date=${filter.date??''}&city=${filter.city??''}&state=${filter.state??''}`
        }
    
        if(!filter){
            queryKey = "list";
            url = '';
        }

        const query = useQuery(['productsTypes', queryKey, url], (url) =>
                api.get('/product_types' + url.queryKey[2])
                .then((res) => res.data)
            );

        return {
            productTypes: query.data, 
            isLoading: query.isLoading, 
            isError: query.error, 
            isFetching: query.isFetching
        };
    }

    function countProductTypes(filter){

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
        
        const query = useQuery(['productTypesCount', queryKey, url], (url) =>
                api.get('/product_types/count' + url.queryKey[2])
                .then((res) => res.data)
            );

        return {
            count: query.data, 
            isLoading: query.isLoading, 
            isError: query.error, 
            isFetching: query.isFetching
        };

    }


    return {
        createProductType, 
        deleteProductType, 
        updateProductType, 
        listProductTypes,
        countProductTypes
    }
}