import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ShieldCheck, TrendingUp } from 'lucide-react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const features = [
        {
            icon: <Leaf className="w-8 h-8 text-green-600" />,
            title: "Nông nghiệp Bền vững",
            description: "Giải pháp canh tác và chăn nuôi thân thiện với môi trường, hiệu quả lâu dài."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
            title: "Chất lượng Đảm bảo",
            description: "Sản phẩm được kiểm định nghiêm ngặt, nguồn gốc rõ ràng, an toàn sử dụng."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
            title: "Hiệu quả Kinh tế",
            description: "Tối ưu chi phí, tăng năng suất cây trồng vật nuôi cho bà con nông dân."
        }
    ];

    const categories = [
        {
            title: "Cám EH Chất Lượng Cao",
            category: "Thức ăn chăn nuôi",
            description: "Dòng sản phẩm cám EH cung cấp đầy đủ dinh dưỡng, giúp vật nuôi tăng trưởng nhanh, khỏe mạnh và đạt năng suất tối đa.",
            image: "https://images.unsplash.com/photo-1605000797499-95a05354507e?q=80&w=600&auto=format&fit=crop" // Placeholder unsplash
        },

        {
            title: "Tinh Heo Giống Chuẩn",
            category: "Chăn nuôi",
            description: "Nguồn tinh heo giống chất lượng cao, tỉ lệ đậu thai tốt, con giống khỏe mạnh, tăng trưởng vượt trội.",
            image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=600&auto=format&fit=crop"
        }
    ];

    return (
        <div className="space-y-0">
            {/* Hero Banner */}
            <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
                        alt="Farm and Rice Field"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block py-1 px-3 rounded-full bg-green-500/20 text-green-400 font-semibold mb-4 border border-green-500/30"
                        >
                            Đồng hành cùng nhà nông Việt
                        </motion.span>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                            Giải pháp Chăn nuôi & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Nông nghiệp Bền vững</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Công ty TNHH Thanh Oanh cam kết mang đến những sản phẩm Cám EH và Tinh heo chất lượng cao nhất, giúp bà con làm giàu từ chính mảnh đất quê hương.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/lien-he">
                                <Button size="lg" className="w-full sm:w-auto font-bold shadow-xl shadow-green-600/20 hover:shadow-green-500/30">
                                    Liên hệ Tư vấn Ngay
                                    <ArrowRight className="ml-2" />
                                </Button>
                            </Link>
                            <Link to="/san-pham">
                                <Button variant="secondary" size="lg" className="w-full sm:w-auto font-bold bg-white/5 text-white border-white/10 hover:bg-white hover:text-green-800 backdrop-blur-sm">
                                    Xem Sản Phẩm
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Features */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-green-600 font-bold tracking-wider uppercase text-sm">Về Thanh Oanh</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Uy tín tạo nên Thương hiệu</h2>
                        <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="p-8 rounded-2xl bg-gray-50 hover:bg-green-50/50 transition-colors border border-gray-100 text-center group"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <span className="text-green-600 font-bold tracking-wider uppercase text-sm">Sản phẩm nổi bật</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Giải pháp toàn diện cho nhà nông</h2>
                        </div>
                        <Link to="/san-pham">
                            <Button variant="ghost" className="hidden md:flex">
                                Xem tất cả sản phẩm <ArrowRight className="ml-2" size={18} />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <ProductCard
                                    title={cat.title}
                                    category={cat.category}
                                    description={cat.description}
                                    image={cat.image}
                                />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/san-pham">
                            <Button variant="outline" className="w-full">
                                Xem tất cả sản phẩm <ArrowRight className="ml-2" size={18} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-green-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-grid-lg text-white" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Bạn cần tư vấn kỹ thuật chăn nuôi?</h2>
                    <p className="text-green-50 text-xl max-w-2xl mx-auto mb-10">
                        Đội ngũ chuyên gia của Thanh Oanh luôn sẵn sàng hỗ trợ bà con 24/7. Hãy liên hệ ngay để được giải đáp thắc mắc.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/lien-he">
                            <Button variant="secondary" size="lg" className="font-bold shadow-xl hover:shadow-2xl min-w-[200px]">
                                Gửi yêu cầu tư vấn
                            </Button>
                        </Link>
                        <motion.a
                            href="tel:0985747456"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button className="bg-green-700 text-white border-green-500 hover:bg-green-800 w-full sm:w-auto shadow-xl min-w-[200px]" size="lg">
                                <span className="animate-pulse mr-2">📞</span> Gọi ngay: 0985.747.456
                            </Button>
                        </motion.a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
