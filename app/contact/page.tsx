'use client';

import React from 'react';
import Navbar from '@/components/store/Navbar';
import Footer from '@/components/store/Footer';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

export default function ContactPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            
            <main style={{ flex: 1, padding: '80px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '16px' }}>Contact Us</h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>We'd love to hear from you. Get in touch with our team.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                        <div style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', textAlign: 'center' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', margin: '0 auto 24px' }}>
                                <Mail size={30} />
                            </div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>Email Us</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>For general inquiries</p>
                            <a href="mailto:hello@vegfresh.com" style={{ textDecoration: 'none', color: 'var(--primary)', fontWeight: 600 }}>hello@vegfresh.com</a>
                        </div>

                        <div style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', textAlign: 'center' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', margin: '0 auto 24px' }}>
                                <Phone size={30} />
                            </div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>Call Us</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Available 9 AM - 9 PM</p>
                            <a href="tel:+9118001234567" style={{ textDecoration: 'none', color: 'var(--primary)', fontWeight: 600 }}>+91 1800 123 4567</a>
                        </div>

                        <div style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', textAlign: 'center' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', margin: '0 auto 24px' }}>
                                <MapPin size={30} />
                            </div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>Our Office</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Bengaluru, Karnataka</p>
                            <p style={{ color: 'var(--text)', fontWeight: 600 }}>123 Green Lane, HSR Layout</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '80px', background: '#f8fafc', borderRadius: 'var(--radius-2xl)', padding: '60px', textAlign: 'center' }}>
                        <Globe size={48} color="var(--primary)" style={{ marginBottom: '24px' }} />
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>Global Presence, Local Sourcing</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)', lineHeight: 1.8 }}>
                            While our roots are in Bengaluru, we are expanding our network of local farm partnerships across India to bring our farm-to-table promise to more cities soon.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
