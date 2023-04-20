import { Button } from "react-bootstrap";
import { CartContext } from "../../contexts/ShoppingCartProvider";
import { toast } from "react-toastify";
import api from "../../../axios";
import { useContext } from "react";
import { useOrders } from "../../hooks/useOrders";



export default function BuyButton({cart}){
    const { emptyCart } = useContext(CartContext);
    const { createOrder } = useOrders(cart);

    async function submitBuy(){
        const query = await createOrder(cart)

        if(query.status === 200){
            toast.success('Compra realizada!')
            emptyCart()
        }
    }

    return (
        <Button onClick={submitBuy}>Comprar</Button>
    )
}