import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { clsx } from 'clsx';
import Button from './Button';
import logo from '../assets/logo.png';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Trang chủ', href: '/' },
        { name: 'Giới thiệu', href: '/gioi-thieu' },
        { name: 'Sản phẩm', href: '/san-pham' },
        { name: 'Tin tức', href: '/tin-tuc' },
        { name: 'Liên hệ', href: '/lien-he' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="Thanh Oanh Logo" className="h-16 w-auto object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={clsx(
                                    'text-sm font-medium transition-colors hover:text-green-600',
                                    isActive(item.href) ? 'text-green-600' : 'text-gray-600'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <a href="tel:0985747456" className="hidden md:flex items-center gap-2 text-green-700 font-semibold hover:text-green-800">
                            <div className="bg-green-100 p-2 rounded-full">
                                <Phone size={20} className="text-green-600" />
                            </div>
                            <span>0985.747.456</span>
                        </a>

                        <button
                            className="md:hidden p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-2">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={clsx(
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                    isActive(item.href)
                                        ? 'bg-green-50 text-green-700'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <Button className="w-full justify-center gap-2" size="lg">
                                <Phone size={20} />
                                Gọi ngay: 0985.747.456
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
