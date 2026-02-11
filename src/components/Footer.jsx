import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-green-600 p-2 rounded-lg">
                                <span className="text-white font-bold text-xl">TO</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold uppercase leading-none">Thanh Oanh</h3>
                                <span className="text-xs text-gray-400">Nông nghiệp bền vững</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Chuyên cung cấp cám EH, thuốc trừ sâu và tinh heo chất lượng cao. Đồng hành cùng nhà nông vươn tới thành công.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 border-l-4 border-green-500 pl-3">Liên kết nhanh</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-green-400 transition-colors">Trang chủ</Link></li>
                            <li><Link to="/gioi-thieu" className="text-gray-400 hover:text-green-400 transition-colors">Về chúng tôi</Link></li>
                            <li><Link to="/san-pham" className="text-gray-400 hover:text-green-400 transition-colors">Sản phẩm</Link></li>
                            <li><Link to="/tin-tuc" className="text-gray-400 hover:text-green-400 transition-colors">Kiến thức chăn nuôi</Link></li>
                            <li><Link to="/lien-he" className="text-gray-400 hover:text-green-400 transition-colors">Liên hệ tư vấn</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 border-l-4 border-green-500 pl-3">Thông tin liên hệ</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-green-500 flex-shrink-0" size={20} />
                                <span>Thôn Minh Mỹ, Xã Ba Gia, Tỉnh Quảng Ngãi</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-green-500 flex-shrink-0" size={20} />
                                <a href="tel:0985747456" className="hover:text-green-400">0985.747.456</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-green-500 flex-shrink-0" size={20} />
                                <a href="mailto:info@thanhoanh.vn" className="hover:text-green-400">info@thanhoanh.vn</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Công ty TNHH Thanh Oanh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
