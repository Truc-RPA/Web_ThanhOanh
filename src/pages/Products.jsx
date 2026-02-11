import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Filter } from 'lucide-react';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('Tất cả');

    const categories = ['Tất cả', 'Cám EH', 'Tinh heo'];

    const filteredProducts = activeCategory === 'Tất cả'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            <div className="bg-green-600 py-12 text-center text-white mb-10">
                <h1 className="text-4xl font-bold mb-2">Sản Phẩm Của Chúng Tôi</h1>
                <p className="text-green-100">Cam kết chất lượng - Hiệu quả vượt trội</p>
            </div>

            <div className="container mx-auto px-4">
                {/* Filter */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                    <div className="flex items-center gap-2 text-gray-700 font-medium">
                        <Filter size={20} />
                        <span>Lọc theo danh mục:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                    ? 'bg-green-600 text-white shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-green-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                <ProductCard
                                    title={product.name}
                                    category={product.category}
                                    description={product.description}
                                    image={product.image}
                                />
                                <div className="mt-3 px-2 flex justify-between items-center">
                                    <span className="text-green-700 font-bold text-lg bg-green-50 px-3 py-1 rounded-lg">{product.price}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        Không tìm thấy sản phẩm nào trong danh mục này.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
