import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
            // Reset form usually
        }, 1500);
    };

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-green-600 py-16 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h1>
                <p className="text-green-100 max-w-2xl mx-auto px-4">
                    Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bà con.
                </p>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Thông tin liên lạc</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4 hover:bg-green-50 p-4 rounded-xl transition-colors">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Địa chỉ</h3>
                                    <p className="text-gray-600">Thôn Minh Mỹ, Xã Ba Gia, Tỉnh Quảng Ngãi</p>
                                    <p className="text-gray-500 text-sm mt-1">Đồi diện bưu điện văn hóa xã</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 hover:bg-green-50 p-4 rounded-xl transition-colors">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Điện thoại</h3>
                                    <p className="text-gray-600 text-lg font-semibold"><a href="tel:0985747456">0985.747.456</a></p>
                                    <p className="text-gray-600">0985.747.456 (Zalo)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 hover:bg-green-50 p-4 rounded-xl transition-colors">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Email</h3>
                                    <p className="text-gray-600"><a href="mailto:info@thanhoanh.vn">info@thanhoanh.vn</a></p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 hover:bg-green-50 p-4 rounded-xl transition-colors">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Giờ làm việc</h3>
                                    <p className="text-gray-600">Thứ 2 - Chủ Nhật: 7:00 - 18:00</p>
                                    <p className="text-gray-500 text-sm mt-1">Hỗ trợ qua điện thoại 24/7</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Placeholder */}
                        <div className="mt-8 h-64 bg-gray-200 rounded-xl overflow-hidden relative shadow-md">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                                Google Maps Area
                            </div>
                            {/* In a real app, embed Google Map iframe here */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.65757303112!2d106.6!3d10.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQyJzAwLjAiTiAxMDbCsDM2JzAwLjAiRQ!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Gửi thắc mắc cho chúng tôi</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Nguyễn Văn A"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                        placeholder="09xxx"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email (Nếu có)</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Chủ đề cần tư vấn</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-white">
                                    <option>Tư vấn Cám EH</option>

                                    <option>Tư vấn Tinh heo giống</option>
                                    <option>Khác</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nội dung</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Nhập nội dung cần tư vấn..."
                                ></textarea>
                            </div>

                            <Button type="submit" size="lg" className="w-full justify-center" disabled={formStatus === 'submitting' || formStatus === 'success'}>
                                {formStatus === 'submitting' ? 'Đang gửi...' : formStatus === 'success' ? 'Đã gửi thành công!' : 'Gửi Yêu Cầu'}
                                {formStatus === 'idle' && <Send size={18} className="ml-2" />}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
