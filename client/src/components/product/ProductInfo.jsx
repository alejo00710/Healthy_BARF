import React from 'react';
import styles from '../../styles/product/ProductInfo.module.css'; // Crea este archivo si no existe
import productImage from '../../assets/images/Pescado Premium.jpg'; // Asegúrate de tener esta imagen
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';


const ProductInfo = () => {
    const { id } = useParams();

    // Simular búsqueda del producto
    const product = products.find(p => p.id === parseInt(id)); // `products` debe ser accesible

    if (!product) return <p>Producto no encontrado</p>;
    return (
        <div className={styles.container}>
            <a href="/" className={styles.backLink}>‹Volver</a>

            <div className={styles.productWrapper}>
                <div className={styles.productImage}>
                    <img src={productImage} alt="Dieta Pollo" />
                </div>

                <div className={styles.productInfo}>
                    <div className={styles.productTitle}>Dieta Pollo</div>
                    <div className={styles.productPrice}>
                        Unidad por 500gr<br /><strong>$3.500</strong>
                    </div>

                    <div className={styles.btnGroup}>
                        <button>- 1 +</button>
                        <button>Añadir al carrito</button>
                        <button className={styles.favoriteBtn}>Añadir a favoritos</button>
                    </div>

                    <h2 className={styles.productDesc}>
                        A base de pollo, zanahoria, espinaca, remolacha, apio, banano, arveja, arroz. Alimento 100% natural
                    </h2>

                    <p className={styles.descTitle}>Descripción</p>
                    <h2 className={styles.productDesc}>
                        Es el mejor alimento que le puedes dar a tu mascota 🐶 Puedes estar completamente seguro porque contamos
                        con la mejor calidad y cuidado para que tu peludo disfrute de un delicioso y sano alimento.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
