import React from "react";
import Product from "./Product";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ProductType } from "../../types/app-interfaces";



const Products: React.FC<{products: ProductType[], productType: "guitars" | "amplifiers" | "accessories";}> = (props) => {


    const ProductsToRender = props.products.map((product, i) => {
        return (
            <Product key={`product${i}`} product={product} productType={props.productType}/>
        )
    })

    return (
        <Grid2 container columns={60} columnSpacing={2} rowSpacing={3} alignContent={"flex-start"}>
            { ProductsToRender }
        </Grid2>
    )
}

export default Products;