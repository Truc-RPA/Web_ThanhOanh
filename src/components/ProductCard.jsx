import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

const ProductCard = ({ title, description, image, category, link = '/san-pham' }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
        >
            <div className="relative h-48 sm:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gray-200">
                    {/* Placeholder for real image */}
                    {image ? (
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                            No Image
                        </div>
                    )}
                </div>
                {category && (
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/95 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                            {category}
                        </span>
                    </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className="p-6 flex flex-col flex-grow relative">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow">
                    {description}
                </p>

                <Link to={link}>
                    <Button variant="outline" className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300">
                        Xem chi tiết
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
};


export default ProductCard;
