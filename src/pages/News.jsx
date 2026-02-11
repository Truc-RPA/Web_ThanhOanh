import React from 'react';
import { news } from '../data/news';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div className="bg-white pb-20">
            <div className="bg-gray-100 py-16 text-center">
                <div className="container mx-auto px-4">
                    <span className="text-green-600 font-bold tracking-wider uppercase text-sm">Kiến thức nhà nông</span>
                    <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Tin Tức & Sự Kiện</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Cập nhật những kỹ thuật chăn nuôi mới nhất và thông tin thị trường nông nghiệp.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden flex flex-col h-full">
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-gray-400 text-xs mb-3 gap-2">
                                    <Calendar size={14} />
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors cursor-pointer">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                                    {item.summary}
                                </p>
                                <Link to="#">
                                    <Button variant="ghost" size="sm" className="pl-0 text-green-600 hover:bg-transparent hover:text-green-700 hover:underline">
                                        Đọc tiếp <ArrowRight size={16} className="ml-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
