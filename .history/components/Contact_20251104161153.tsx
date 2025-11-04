'use client';

import React, { useState, useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus('idle');

        try {
            // EmailJS credentials
            const SERVICE_ID = 'service_jkspszq';
            const TEMPLATE_ID = 'template_jcjniap';
            const PUBLIC_KEY = '58ECh6MWL5naHgSe0';

            // Initialize EmailJS with public key (only needed once, but safe to call multiple times)
            emailjs.init(PUBLIC_KEY);

            // Use sendForm with the form reference for better compatibility
            if (formRef.current) {
                const result = await emailjs.sendForm(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    formRef.current,
                    PUBLIC_KEY
                );

                console.log('Email sent successfully:', result.text);
                setSubmitStatus('success');
                
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });

                // Clear success message after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            }

        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
            
            // Log more details about the error
            if (error instanceof Error) {
                console.error('Error message:', error.message);
            }
            
            // Clear error message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-gradient-to-b from-black to-gray-900 py-20 mx-auto mt-20" id="contact">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="pt-20 text-5xl font-semibold mb-5 text-white">
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
                        
                        {/* Success Message */}
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-600 text-white rounded-lg">
                                ✓ Message sent successfully! We'll get back to you soon.
                            </div>
                        )}

                        {/* Error Message */}
                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-600 text-white rounded-lg">
                                ✗ Failed to send message. Please try again or contact us directly.
                            </div>
                        )}

                        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Full Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="from_name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    placeholder='John Doe' 
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#189677] focus:border-transparent transition"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="from_email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    placeholder='john@example.com' 
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#189677] focus:border-transparent transition"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                    Phone Number
                                </label>
                                <input 
                                    type="tel" 
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    placeholder='+639 123 456 789' 
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#189677] focus:border-transparent transition"
                                    disabled={isLoading}
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input 
                                    type="text" 
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                    placeholder='How can we help you?' 
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#189677] focus:border-transparent transition"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    rows={5}
                                    placeholder='Tell us more about your inquiry...' 
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#189677] focus:border-transparent transition resize-none"
                                    required
                                    disabled={isLoading}
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-[#189677] hover:bg-[#147a5f] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
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

                        {/* Map */}
                        <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-6">Find Us</h2>
                            <div className="w-full h-64 rounded-lg overflow-hidden">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6447447447447!2d121.04694431484043!3d14.551904689827418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90264a0f537%3A0x2b063d32b27c97e4!2sOne%20Global%20Place!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="One Global Place Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;