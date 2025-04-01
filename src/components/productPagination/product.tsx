import {FC} from "react";
import {IProduct} from "../../models/productsModel.tsx";
import "./product.css";

export type ProductType = {
    product: IProduct
}

const Product: FC<ProductType> = ({product}) => {
    return (
        <div className="product-container">
            <div className="product-id">ID: {product.id}</div>
            <div className="product-title">Категорія: {product.title}</div>
            <div className="product-description">Опис: {product.description}</div>
            <div className="product-category">Категорія: {product.category}</div>
            <div className="product-price">Ціна: {product.price}</div>
            <div className="product-discount">Знижка: {product.discountPercentage}</div>
            <div className="product-rating">Рейтинг: {product.rating}</div>
            <div className="product-stock">Запас: {product.stock}</div>
            <div className="product-brand">Бренд: {product.brand}</div>
            <div className="product-sku">SKU: {product.sku}</div>
            <div className="product-weight">Вага: {product.weight}</div>

            {/* Розміри */}
            <div className="product-dimension">Ширина: {product.dimensions.width}</div>
            <div className="product-dimension">Висота: {product.dimensions.height}</div>
            <div className="product-dimension">Глибина: {product.dimensions.depth}</div>

            {/* Теги */}
            {product.tags.map((value) => (
                <div className="tag-container">
                    {value}
                </div>
            ))}

            {/* Додаткова інформація */}
            <div className="product-warranty">Інформація про гарантію: {product.warrantyInformation}</div>
            <div className="product-shipping">Інформація про доставку: {product.shippingInformation}</div>
            <div className="product-availability">Статус: {product.availabilityStatus}</div>
            <div className="product-availability">Мін. замовлення: {product.minimumOrderQuantity}</div>
            <div className="product-return">{product.returnPolicy}</div>
            <div className="product-min-order">{product.minimumOrderQuantity}</div>

            {/* Відгуки */}
            {product.reviews.map((value) => (
                <div className="review-container">
                    <div className="review-rating">Рейтинг: {value.rating}</div>
                    <div className="review-comment">Коментарій: {value.comment}</div>
                    <div className="review-date">Дата: {value.date}</div>
                    <div className="review-name">Автор: {value.reviewerName}</div>
                    <div className="review-email">Пошта автора: {value.reviewerEmail}</div>
                </div>
            ))}

            {/* Метадані */}
            <div className="product-meta">Дата створення: {product.meta.createdAt}</div>
            <div className="product-meta">Дана оновлення: {product.meta.updatedAt}</div>
            <div className="product-meta">BAR код: {product.meta.barcode}</div>
            <span>QR код:</span>
            <img src={product.meta.qrCode} alt="QR Code" className="w-20 h-20 object-contain"/>

            {/* Зображення */}
            <span>Картинка</span>
            <div className="images">
                {product.images.map((image, index) => (
                    <img key={index} src={image} alt={`Product ${index}`} className="image"/>
                ))}
            </div>
            <span>Мініатюра</span>
            <div className="product-thumbnail">
                <img src={product.thumbnail} alt="Thumbnail" className="w-24 h-24 object-cover rounded"/>
            </div>
        </div>
    );
};

export default Product;