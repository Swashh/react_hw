import {IPaginationProduct, IProduct} from "../models/productsModel.tsx";

const baseProductsUrl = import.meta.env.VITE_API_BASE_URL + '/products'

export const getProducts = async (): Promise<IProduct[]> => {
    const res: IPaginationProduct = await fetch(baseProductsUrl)
        .then(response => response.json())
    return res.products
}