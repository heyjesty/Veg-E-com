'use client';

import React from 'react';
import Navbar from '@/components/store/Navbar';
import Footer from '@/components/store/Footer';

export default function PrivacyPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '40px' }}>Privacy Policy</h1>
                    
                    <div style={{ color: 'var(--text-light)', lineHeight: 1.8 }}>
                        <p style={{ marginBottom: '24px' }}>Last Updated: May 2026</p>
                        
                        <h3 style={{ color: 'var(--text)', fontSize: '1.4rem', fontWeight: 700, marginTop: '40px', marginBottom: '16px' }}>1. Information We Collect</h3>
                        <p style={{ marginBottom: '24px' }}>We collect information you provide directly to us, such as when you create an account, place an order, or contact us for support. This includes name, email, phone number, and delivery address.</p>

                        <h3 style={{ color: 'var(--text)', fontSize: '1.4rem', fontWeight: 700, marginTop: '40px', marginBottom: '16px' }}>2. How We Use Your Information</h3>
                        <p style={{ marginBottom: '24px' }}>We use this information to process your orders, communicate with you about your delivery, and improve our services. We do not sell your personal data to third parties.</p>

                        <h3 style={{ color: 'var(--text)', fontSize: '1.4rem', fontWeight: 700, marginTop: '40px', marginBottom: '16px' }}>3. Data Security</h3>
                        <p style={{ marginBottom: '24px' }}>We implement industry-standard security measures to protect your data. Payment information is handled through secure, encrypted payment gateways like Razorpay.</p>

                        <h3 style={{ color: 'var(--text)', fontSize: '1.4rem', fontWeight: 700, marginTop: '40px', marginBottom: '16px' }}>4. Your Rights</h3>
                        <p style={{ marginBottom: '24px' }}>You have the right to access, update, or delete your personal information at any time through your account settings or by contacting our support team.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
