import { Button, Container, Row, Stack } from "react-bootstrap";
import ProductForm from "../components/Forms/ProductForm";
import ProductTypeForm from "../components/Forms/ProductTypeForm";
import BaseFormModal from "../components/Modals/BaseFormModal";
import ProductsTable from "../components/Tables/ProductsTable";
import { useProducts } from "../hooks/useProducts";
import { useProductTypes } from "../hooks/useProductTypes";


export default function Products(){

    const { listProducts, createProduct } = useProducts();
    const { listProductTypes, createProductType } = useProductTypes();

    const { products, isFetching: isFetchingProducts } = listProducts({filter: false});
    const { productTypes } = listProductTypes({filter: false});


    return (
        <Container className="mt-5">
            <Row>
                <Stack direction="horizontal" gap={3}>
                    <BaseFormModal buttonText={'Criar Tipo de Produto'} form={<ProductTypeForm />} submitFunction={createProductType}/>
                    <BaseFormModal buttonText={'Criar Produto'} form={<ProductForm />} submitFunction={createProduct}/>
                </Stack>
            </Row>

            <Row className="mt-5">
                <ProductsTable products={products} isFetching={isFetchingProducts} />
            </Row>
        </Container>
    )
}