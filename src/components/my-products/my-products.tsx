import {FC} from "react";
import {IProduct} from "../../models/product.tsx";

type MyPropType = {
    productsList: IProduct
}

const MyProducts: FC<MyPropType> = ({productsList}) => {
    return (
        <div>
            <h2>{productsList.title}. {productsList.price} uah</h2>
            <img src={productsList.img} alt={productsList.title}/>
        </div>
    );
};

export default MyProducts;