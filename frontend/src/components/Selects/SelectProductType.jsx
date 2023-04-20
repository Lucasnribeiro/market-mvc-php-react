import { Form } from "react-bootstrap";
import { useProductTypes } from "../../hooks/useProductTypes";



export default function({register}){
    const { listProductTypes, createProductType } = useProductTypes();
    const { productTypes, isFetching } = listProductTypes({filter: false});

    return (
        <Form.Group className="mb-3" >
            <Form.Label>Tipo de Produto</Form.Label>

            
        

                <Form.Select {...register('product_type_id')}>
                    {isFetching ? 
                            <option > carregando... </option>
                        :

                        productTypes.map((productType) => 
                            <>
                                <option > Selecione um Tipo </option>
                                <option value={productType.id}> {productType.title} </option>
                            </>
                        )
                    }
                </Form.Select>            
                

        </Form.Group>
    )
}