import { prisma } from './index';

// Obtener todos los productos
export const getAllProducts = async () => {
    await prisma.$connect();
    const products = await prisma.product.findMany();
    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(products));
}

// Obtener producto por id
export const getProductById = async (id) => {
    await prisma.$connect();
    const product = await prisma.product.findUnique({
        where: { id }
    });
    await prisma.$disconnect();
    
    return JSON.parse(JSON.stringify(product));
}

// Obtener producto por slug
export const getProductBySlug = async (slug) => {
    await prisma.$connect();
    const product = await prisma.product.findUnique({
        where: { slug }
    });
    await prisma.$disconnect();
    
    return JSON.parse(JSON.stringify(product));
}

// Obtener productos por categoría
export const getProductsByCategory = async (category) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        where: { category }
    });
    await prisma.$disconnect();
    
    return JSON.parse(JSON.stringify(products));
}

// Obtener productos por subcategoría
export const getProductsBySubcategory = async (subcategory) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        where: { subcategory }
    });
    await prisma.$disconnect();
    
    return JSON.parse(JSON.stringify(products));
}

// Obtener productos por categoría y subcategoría
export const getProductsByCategoryAndSubcategory = async (category, subcategory) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        where: { category, subcategory }
    });
    await prisma.$disconnect();
    
    return JSON.parse(JSON.stringify(products));
}

// Obtener productos por precio menor o igual que
export const getProductsByLowPrice = async (price) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        where: { price: {
            lte: price
        }}
    });
    await prisma.$disconnect();
    
    return JSON.parse(JSON.stringify(products));
}

// Obtener productos por precio mayor o igual que
export const getProductsByHighPrice = async (price) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        where: { price: {
            gte: price
        }}
    });
    await prisma.$disconnect();
    
    return JSON.parse(JSON.stringify(products));
}

export const getProductsByPriceRange = async (lowPrice, highPrice) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        where: { price: {
            gte: lowPrice,
            lte: highPrice
        }}
    });
    await prisma.$disconnect();
    
    return JSON.parse(JSON.stringify(products));
}

export const getProductsByTerm = async (term) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        
    });
    await prisma.$disconnect();
    
    return JSON.parse(JSON.stringify(products));
}