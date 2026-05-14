'use client';

import React, { useState } from 'react';
import Navbar from '@/components/store/Navbar';
import Footer from '@/components/store/Footer';
import { HelpCircle, MessageSquare, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function SupportPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        orderId: '',
        subject: 'complaint',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false);
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            
            <main style={{ flex: 1, padding: '60px 0', background: '#f9fbf8' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '16px' }}>
                            Customer Support & Complaints
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            Have an issue with your order or want to share feedback? We're here to help you 24/7.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px' }}>
                        {/* Contact Info */}
                        <div>
                            <div style={{ background: 'white', padding: '32px', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)', marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <HelpCircle size={24} color="var(--primary)" /> Get in Touch
                                </h3>
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ display: 'flex', gap: '16px' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Call Us</div>
                                            <div style={{ fontWeight: 600 }}>+91 1800 123 4567</div>
                                        </div>
                                    </div>
                                    
                                    <div style={{ display: 'flex', gap: '16px' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Email Us</div>
                                            <div style={{ fontWeight: 600 }}>support@vegfresh.com</div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '16px' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                            <MessageSquare size={20} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Live Chat</div>
                                            <div style={{ fontWeight: 600 }}>Available 9 AM - 9 PM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))', padding: '32px', borderRadius: 'var(--radius-xl)', color: 'white' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>Our Promise</h3>
                                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, opacity: 0.9 }}>
                                    We guarantee 100% freshness. If you're not satisfied with the quality of your vegetables, we'll replace them or refund your money, no questions asked.
                                </p>
                            </div>
                        </div>

                        {/* Complaint Form */}
                        <div style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)' }}>
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '40px 0' }} className="animate-fadeInUp">
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', margin: '0 auto 24px' }}>
                                        <CheckCircle size={40} />
                                    </div>
                                    <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '12px' }}>Complaint Registered</h2>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
                                        Thank you for reaching out. We have received your complaint and our team will get back to you within 24 hours. Your ticket number is <strong>#VF-{Math.floor(Math.random() * 90000) + 10000}</strong>.
                                    </p>
                                    <button onClick={() => setSubmitted(false)} className="btn-secondary">Submit Another Request</button>
                                </div>
                            ) : (
                                <>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px', color: 'var(--primary-dark)' }}>Complaint Registration</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '32px' }}>Please fill out the form below and we'll resolve your issue on priority.</p>
                                    
                                    <form onSubmit={handleSubmit}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Full Name</label>
                                                <input type="text" name="name" className="input" placeholder="Enter your name" required value={form.name} onChange={handleChange} />
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Email Address</label>
                                                <input type="email" name="email" className="input" placeholder="Enter your email" required value={form.email} onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Order ID (Optional)</label>
                                                <input type="text" name="orderId" className="input" placeholder="e.g. #12345" value={form.orderId} onChange={handleChange} />
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Subject</label>
                                                <select name="subject" className="select" value={form.subject} onChange={handleChange} style={{ padding: '12px' }}>
                                                    <option value="complaint">Register a Complaint</option>
                                                    <option value="quality">Quality Issue</option>
                                                    <option value="delivery">Delivery Delay</option>
                                                    <option value="payment">Payment Problem</option>
                                                    <option value="other">Other Inquiry</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div style={{ marginBottom: '32px' }}>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Message / Issue Details</label>
                                            <textarea name="message" className="input" rows={5} placeholder="Please describe your issue in detail..." required value={form.message} onChange={handleChange} style={{ resize: 'none' }} />
                                        </div>

                                        <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                                            {loading ? 'Registering...' : 'Submit Complaint'} <Send size={18} />
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
