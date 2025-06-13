// data/products.js
import pescado from '../assets/images/Pescado Premium.jpg';
import pollo from '../assets/images/pollo y verduras.jpg';
import pollo2 from '../assets/images/pollo y frutas.jpg';
import res from '../assets/images/res y verduras.jpg';
import ternera from '../assets/images/ternera y cordero.jpg';
import horneadito from '../assets/images/horneadito.jpg';

export const products = [
    {
        id: 1,
        name: 'Dieta Pollo y verduras',
        price: '$2.300',
        weight: '200gr',
        image: pollo,
        description: 'Conoce más acerca de este producto...',
        shortDescription: 'A base de pollo, zanahoria, espinaca, remolacha, apio, banano, arveja, arroz. Alimento 100% natural',
        fullDescription: 'Es el mejor alimento que le puedes dar a tu mascota 🐶 Puedes estar completamente seguro porque contamos con la mejor calidad y cuidado para que tu peludo disfrute de un delicioso y sano alimento. Formulado especialmente con pollo fresco y una selección de verduras nutritivas.',
        category: 'Perros',
        featured: true
    },
    {
        id: 2,
        name: 'Dieta Pollo y verduras',
        price: '$5.200',
        weight: '500gr',
        image: pollo,
        description: 'Conoce más acerca de este producto...',
        shortDescription: 'A base de pollo, zanahoria, espinaca, remolacha, apio, banano, arveja, arroz. Alimento 100% natural',
        fullDescription: 'Es el mejor alimento que le puedes dar a tu mascota 🐶 Puedes estar completamente seguro porque contamos con la mejor calidad y cuidado para que tu peludo disfrute de un delicioso y sano alimento. Presentación familiar ideal para perros medianos y grandes.',
        category: 'Perros',
        featured: false
    },
    {
        id: 3,
        name: 'Dieta Pollo y frutas',
        price: '$5.700',
        weight: '400gr',
        image: pollo2,
        description: 'Conoce más acerca de este producto...',
        shortDescription: 'Deliciosa combinación de pollo fresco con frutas naturales, rica en vitaminas y antioxidantes.',
        fullDescription: 'Una mezcla perfecta de proteína de alta calidad y frutas frescas que aportan vitaminas esenciales y antioxidantes naturales. Ideal para perros que buscan una alimentación variada y nutritiva.',
        category: 'Perros',
        featured: true
    },
    {
        id: 4,
        name: 'Dieta Ternera y cordero Premium',
        price: '$7.200',
        weight: '400gr',
        image: ternera,
        description: 'Conoce más acerca de este producto...',
        shortDescription: 'Premium blend de ternera y cordero, fuente excepcional de proteínas de alta calidad.',
        fullDescription: 'Nuestra receta premium combina las mejores carnes de ternera y cordero, proporcionando un perfil completo de aminoácidos esenciales. Ideal para perros exigentes y con necesidades nutricionales especiales.',
        category: 'Perros',
        featured: true
    },
    {
        id: 5,
        name: 'Dieta Res y verduras',
        price: '$6.200',
        weight: '400gr',
        image: res,
        description: 'Conoce más acerca de este producto...',
        shortDescription: 'Res de primera calidad combinada con verduras frescas, rica en hierro y nutrientes.',
        fullDescription: 'Combinación balanceada de res de alta calidad con una selección de verduras frescas. Alto contenido en hierro y proteínas, perfecto para mantener la energía y vitalidad de tu mascota.',
        category: 'Perros',
        featured: false
    },
    {
        id: 6,
        name: 'Horneadito Premium',
        price: '$8.000',
        weight: '500gr',
        image: horneadito,
        description: 'Conoce más acerca de este producto...',
        shortDescription: 'Snack horneado premium, crujiente y nutritivo, perfecto para premiar a tu mascota.',
        fullDescription: 'Nuestro snack premium horneado con ingredientes naturales seleccionados. Textura crujiente que ayuda a mantener la salud dental mientras proporciona un premio delicioso y nutritivo.',
        category: 'Perros',
        featured: false
    },
    {
        id: 9,
        name: 'Pescado Premium',
        price: '$4.700',
        weight: '200gr',
        image: pescado,
        description: 'Conoce más acerca de este producto...',
        shortDescription: 'Pescado fresco de primera calidad, rico en omega-3 y proteínas, ideal para gatos.',
        fullDescription: 'Pescado fresco seleccionado especialmente para gatos, rico en ácidos grasos omega-3 que favorecen un pelaje brillante y una piel saludable. Fuente excelente de proteínas de fácil digestión.',
        category: 'Gatos',
        featured: true
    }
];