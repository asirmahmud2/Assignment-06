import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#295c46] text-white">
            <div className="container mx-auto text-center py-16 px-4">
                <h1 className="text-5xl font-bold mb-4">KeenKeeper</h1>
                <p className="text-gray-200 max-w-2xl mx-auto mb-8">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <h3 className="text-lg font-semibold mb-4">Social Links</h3>
                <div className="flex justify-center gap-4 mb-10">
                    <div className="bg-white text-black p-3 rounded-full">
                        <FaInstagram />
                    </div>
                    <div className="bg-white text-black p-3 rounded-full">
                        <FaFacebookF />
                    </div>
                    <div className="bg-white text-black p-3 rounded-full">
                        <FaXTwitter />
                    </div>
                </div>
                <div className="border-t border-gray-400 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a>Privacy Policy</a>
                        <a>Terms of Service</a>
                        <a>Cookies</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;