import React from "react";
import Product from "./Product";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ProductType } from "../../types/app-interfaces";


const guitarProducts: ProductType[] = [
    {name: "Ibanez GRGR120EX", price: 229.99, rating: 4.5, ratingsNum: 96},
    {name: "Ibanez RGA42HPTQM Blue Iceberg Gradation", price: 999.99, rating: 4.5, ratingsNum: 96},
    {name: "Ibanez GRGR120EX", price: 229.99, rating: 4.5, ratingsNum: 96},
    {name: "Ibanez RGA42HPTQM Blue Iceberg Gradation", price: 999.99, rating: 4.5, ratingsNum: 96},
    {name: "Ibanez GRGR120EX", price: 229.99, rating: 4.5, ratingsNum: 96},
    {name: "Ibanez RGA42HPTQM Blue Iceberg Gradation", price: 999.99, rating: 4.5, ratingsNum: 96},
    {name: "Ibanez GRGR120EX", price: 229.99, rating: 4.5, ratingsNum: 96},
    {name: "Ibanez RGA42HPTQM Blue Iceberg Gradation", price: 999.99, rating: 4.5, ratingsNum: 96},
    {name: "Ibanez GRGR120EX", price: 229.99, rating: 4.5, ratingsNum: 96},
    {name: "Ibanez RGA42HPTQM Blue Iceberg Gradation", price: 999.99, rating: 4.5, ratingsNum: 96},
    {name: "Ibanez GRGR120EX", price: 229.99, rating: 4.5, ratingsNum: 96},
    {name: "Ibanez RGA42HPTQM Blue Iceberg Gradation", price: 999.99, rating: 4.5, ratingsNum: 96}
]

const ProductsToRender = guitarProducts.map((product, i) => {
    return (
        <Product product={product}/>
    )
})

const Products: React.FC = (props) => {
    return (
        <Grid2 container>
            { ProductsToRender }
        </Grid2>
    )
}

export default Products;