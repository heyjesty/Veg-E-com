'use client';

import React from 'react';
import Navbar from '@/components/store/Navbar';
import Footer from '@/components/store/Footer';
import { Sprout, Users, Award, ShieldCheck, Heart } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            
            <main style={{ flex: 1, padding: '80px 0' }}>
                <div className="container">
                    {/* Hero Section */}
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '24px' }}>
                            Our Mission for <span style={{ color: 'var(--primary)' }}>Freshness</span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
                            At VegFresh, we believe that everyone deserves access to the highest quality, pesticide-free, and farm-fresh vegetables. We're bridging the gap between local farmers and your dinner table.
                        </p>
                    </div>

                    {/* Story Section */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '100px' }}>
                        <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                            <Image src="/images/real_spinach.png" alt="Our Farm" width={600} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '24px' }}>How We Started</h2>
                            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '20px' }}>
                                Started in 2023, VegFresh began as a small initiative to help local farmers in our community get fair prices for their organic produce. We noticed that people wanted fresh vegetables but couldn't find a reliable source that combined quality with convenience.
                            </p>
                            <p style={{ color: 'var(--text-light)', lineHeight: 1.8 }}>
                                Today, we work with over 50+ local farms to bring you a hand-picked selection of the season's best vegetables, delivered right to your doorstep within hours of being harvested.
                            </p>
                        </div>
                    </div>

                    {/* Values */}
                    <div style={{ background: 'var(--primary-50)', padding: '80px 40px', borderRadius: 'var(--radius-3xl)', marginBottom: '100px' }}>
                        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 700, marginBottom: '60px' }}>Our Core Values</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                            {[
                                { icon: Sprout, title: '100% Organic', desc: 'Sourced from farms that use natural fertilizers.' },
                                { icon: Award, title: 'Quality First', desc: 'Multi-stage quality checks before every delivery.' },
                                { icon: Users, title: 'Community', desc: 'Supporting local farmers and sustainable practices.' },
                                { icon: ShieldCheck, title: 'Transparent', desc: 'Full traceability from farm to your kitchen.' }
                            ].map((val, i) => (
                                <div key={i} style={{ textAlign: 'center' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', margin: '0 auto 20px', boxShadow: 'var(--shadow-md)' }}>
                                        <val.icon size={30} />
                                    </div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>{val.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
