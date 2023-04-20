import { Button } from "react-bootstrap";
import { useQueryClient } from 'react-query'




export default function UpdateQueryButton({query}){
    const queryClient = useQueryClient()
    console.log(query)

    return (
        <Button onClick={() => queryClient.invalidateQueries({ queryKey: [query] })}>
            Reload
        </Button>
    )
}