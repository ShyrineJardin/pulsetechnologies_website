
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-gradient-to-b from-black to-gray-900 py-20 mx-auto mt-20" id="contact">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Learn Smarter, Grow Faster with <span className='text-[#189677]'>US</span>
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Full Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    placeholder='John Doe' 
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#189677] focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    placeholder='john@example.com' 
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#189677] focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                    Phone Number
                                </label>
                                <input 
                                    type="tel" 
                                    id="phone"
                                    placeholder='+639 123 456 789' 
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#189677] focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input 
                                    type="text" 
                                    id="subject"
                                    placeholder='How can we help you?' 
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#189677] focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea 
                                    id="message"
                                    rows={5}
                                    placeholder='Tell us more about your inquiry...' 
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#189677] focus:border-transparent transition resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-[#189677] hover:bg-[#147a5f] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#189677] p-3 rounded-lg">
                                        <FaPhoneAlt className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Phone</h3>
                                        <p className="text-gray-300">+639 678 372 893</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#189677] p-3 rounded-lg">
                                        <FaEnvelope className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Email</h3>
                                        <p className="text-gray-300">pulsetechnologies@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#189677] p-3 rounded-lg">
                                        <FaMapMarkerAlt className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Location</h3>
                                        <p className="text-gray-300">One Global Place, Fort Bonifacio, Taguig, NCR</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
                            <div className="space-y-3 text-gray-300">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span className="font-semibold text-[#189677]">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="font-semibold text-[#189677]">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="font-semibold text-red-400">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;