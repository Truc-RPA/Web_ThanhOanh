import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white">
            {/* Header Banner */}
            <div className="bg-green-600 py-16 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Về Công Ty Thanh Oanh</h1>
                <p className="text-green-100 max-w-2xl mx-auto px-4">
                    Hơn 10 năm đồng hành cùng nhà nông Việt Nam, mang đến giải pháp chăn nuôi hiệu quả và bền vững.
                </p>
            </div>

            <div className="container mx-auto px-4 py-16">
                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1592985652399-653556094b96?q=80&w=800&auto=format&fit=crop"
                            alt="Thanh Oanh Warehouse"
                            className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Câu chuyện của chúng tôi</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Thành lập từ năm 2012, Công ty TNHH Thanh Oanh khởi đầu là một đại lý nhỏ cung cấp thức ăn chăn nuôi tại địa phương. Thấu hiểu những khó khăn của bà con nông dân trong việc tìm kiếm nguồn vật tư nông nghiệp uy tín, chúng tôi đã không ngừng mở rộng và phát triển.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Đến nay, Thanh Oanh tự hào là nhà phân phối chính thức các dòng sản phẩm **Cám EH**, thuốc bảo vệ thực vật và tinh heo giống chất lượng cao, phục vụ hàng ngàn hộ chăn nuôi và trang trại trên khắp cả nước.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-green-600">10+</span>
                                <span className="text-sm text-gray-500">Năm kinh nghiệm</span>
                            </div>
                            <div className="text-center border-l ps-4">
                                <span className="block text-3xl font-bold text-green-600">5000+</span>
                                <span className="text-sm text-gray-500">Khách hàng tin dùng</span>
                            </div>
                            <div className="text-center border-l ps-4">
                                <span className="block text-3xl font-bold text-green-600">100%</span>
                                <span className="text-sm text-gray-500">Sản phẩm chính hãng</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-green-50 p-8 rounded-xl border border-green-100">
                        <Award className="w-10 h-10 text-green-600 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Sứ mệnh</h3>
                        <p className="text-gray-600">
                            Cung cấp các sản phẩm nông nghiệp chất lượng cao, giúp bà con tối ưu chi phí và gia tăng lợi nhuận bền vững.
                        </p>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                        <Users className="w-10 h-10 text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Tầm nhìn</h3>
                        <p className="text-gray-600">
                            Trở thành đối tác tin cậy hàng đầu trong lĩnh vực cung ứng vật tư nông nghiệp tại khu vực và cả nước.
                        </p>
                    </div>
                    <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
                        <CheckCircle className="w-10 h-10 text-amber-600 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Giá trị cốt lõi</h3>
                        <p className="text-gray-600">
                            Uy tín - Chất lượng - Tận tâm. Chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
