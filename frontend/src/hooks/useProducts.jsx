import { useMutation, useQuery, useQueryClient  } from "react-query";
import { toast } from "react-toastify";
import api from "../../axios";

export function useProducts(){
    const queryClient = useQueryClient()

    async function createProduct(product){
        const query = await api.post('/products', product)
        toast.success('Produto cadastrado.')
        queryClient.invalidateQueries({ queryKey: ['products'] })
    }

    function deleteProduct(product){

    }

    function updateProduct(product){
    
    }

    function listProducts({filter}){

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

        const query = useQuery(['products', queryKey, url], (url) =>
                api.get('/products' + url.queryKey[2])
                .then((res) => res.data)
            );

        return {
            products: query.data, 
            isLoading: query.isLoading, 
            isError: query.error, 
            isFetching: query.isFetching
        };
    }

    function countProducts(filter){

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
        
        const query = useQuery(['productsCount', queryKey, url], (url) =>
                api.get('/products/count' + url.queryKey[2])
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
        createProduct, 
        deleteProduct, 
        updateProduct, 
        listProducts,
        countProducts
    }
}