import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/product/CatalogoProducts.module.css';
import pollo from '../../assets/images/pd1.jpg';

const productData = [
    {
        category: 'Perros',
        products: [
            { id: 1, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
            { id: 2, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
            { id: 3, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
            { id: 4, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
            { id: 5, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
            { id: 6, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
            { id: 7, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
            { id: 8, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
        ],
    },
    {
        category: 'Gatos',
        products: [
            { id: 9, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
            { id: 10, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
            { id: 11, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
            { id: 12, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
            { id: 13, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
            { id: 14, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
            { id: 15, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
            { id: 16, title: 'Dieta Pollo', price: '$3.500 • 500gr', img: pollo, alt: 'Dieta Pollo' },
        ],
    },
];

const Products = () => {
    return (
        <section className={styles.perros}>
            {/* Botón de volver igual que en ProductInfo */}
            <Link to="/" className={styles.backLink}>‹ Volver</Link>

            <h1 className={styles.mainTitle}>Frescura y nutrición en cada bocado</h1>
            <h2 className={styles.subTitle}>Consiente a tu peludo de la manera más sana</h2>

            <h3 className={styles.sectionTitle}>Alimentos BARF</h3>

            {productData.map(({ category, products }) => (
                <div key={category}>
                    <h3 className={styles.categoryTitle}>{category}</h3>
                    {[...Array(Math.ceil(products.length / 4))].map((_, gridIndex) => {
                        const start = gridIndex * 4;
                        const gridItems = products.slice(start, start + 4);
                        return (
                            <div className={styles.grid} key={`${category}-grid-${gridIndex}`}>
                                {gridItems.map(({ id, title, price, img, alt }) => (
                                    <div className={styles.card} key={id}>
                                        <img src={img} alt={alt} />
                                        <div className={styles.cardTitle}>{title}</div>
                                        <div className={styles.cardPrice}>{price}</div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            ))}
        </section>
    );
};

export default Products;

