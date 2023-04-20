import { useMutation, useQuery, QueryClient } from "react-query";
import api from "../../axios";

export function useUsers(){

    function createUser(user){

    }

    function deleteUser(user){

    }

    function updateUser(user){
    
    }

    function listUsers({filter}){

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

        const query = useQuery(['users', queryKey, url], (url) =>
                api.get('/users' + url.queryKey[2])
                .then((res) => res.data)
            );

        return {
            users: query.data, 
            isLoading: query.isLoading, 
            isError: query.error, 
            isFetching: query.isFetching
        };
    }

    function countUsers(filter){

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
        
        const query = useQuery(['usersCount', queryKey, url], (url) =>
                api.get('/users/count' + url.queryKey[2])
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
        createUser, 
        deleteUser, 
        updateUser, 
        listUsers,
        countUsers
    }
}