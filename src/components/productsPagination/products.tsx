import {useEffect, useState} from "react";
import {getProducts} from "../../services/arrProducts.tsx";
import Product from "../productPagination/product.tsx";
import {IProduct} from "../../models/productsModel.tsx";

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        getProducts()
            .then(res => {
                setProducts(res)
            })
    }, []);


    return (
        <div>
            {
                products.map(value => <Product key={value.id} product={value}/>)
            }
        </div>
    );
};

export default Products;