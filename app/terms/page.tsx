'use client';

import React from 'react';
import Navbar from '@/components/store/Navbar';
import Footer from '@/components/store/Footer';

export default function TermsPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '40px' }}>Terms & Conditions</h1>
                    
                    <div style={{ color: 'var(--text-light)', lineHeight: 1.8 }}>
                        <p style={{ marginBottom: '24px' }}>Last Updated: May 2026</p>
                        
                        <h3 style={{ color: 'var(--text)', fontSize: '1.4rem', fontWeight: 700, marginTop: '40px', marginBottom: '16px' }}>1. Acceptance of Terms</h3>
                        <p style={{ marginBottom: '24px' }}>By using VegFresh website and services, you agree to comply with and be bound by these terms. If you do not agree, please do not use our services.</p>

                        <h3 style={{ color: 'var(--text)', fontSize: '1.4rem', fontWeight: 700, marginTop: '40px', marginBottom: '16px' }}>2. Product Quality & Returns</h3>
                        <p style={{ marginBottom: '24px' }}>We strive to provide the freshest vegetables. If you receive products that are not fresh, please report it within 2 hours of delivery for a replacement or refund through our Support page.</p>

                        <h3 style={{ color: 'var(--text)', fontSize: '1.4rem', fontWeight: 700, marginTop: '40px', marginBottom: '16px' }}>3. Delivery</h3>
                        <p style={{ marginBottom: '24px' }}>Delivery times are estimates. While we aim for on-time delivery, external factors may occasionally cause delays. We'll keep you notified in such cases.</p>

                        <h3 style={{ color: 'var(--text)', fontSize: '1.4rem', fontWeight: 700, marginTop: '40px', marginBottom: '16px' }}>4. User Accounts</h3>
                        <p style={{ marginBottom: '24px' }}>You are responsible for maintaining the confidentiality of your account credentials. You must be at least 18 years old to place an order.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
