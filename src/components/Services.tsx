
import React from 'react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="border border-secondary/20 p-8 text-center transition-all duration-300 hover:bg-secondary/5 hover:border-secondary/50">
        <div className="flex justify-center mb-4">
            {icon}
        </div>
        <h3 className="font-serif text-2xl font-bold mb-2">{title}</h3>
        <p className="font-sans opacity-70 leading-relaxed">{description}</p>
    </div>
);

const Services: React.FC = () => {
    const services = [
        {
            icon: <PencilSwooshIcon />,
            title: "Content Creation",
            description: "Engaging blog posts, captivating copy, and visual content that tells your unique story."
        },
        {
            icon: <MegaphoneIcon />,
            title: "Social Media Strategy",
            description: "Building and nurturing online communities through strategic content and authentic engagement."
        },
        {
            icon: <CompassIcon />,
            title: "SEO & Discovery",
            description: "Optimizing your digital footprint to connect with the right audience at the right time."
        }
    ];

    return (
        <section id="services" className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl font-bold">What We Do</h2>
                    <p className="font-sans text-lg mt-2 opacity-80">Our services are designed to build and grow your brand&#39s digital presence.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map(service => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const PencilSwooshIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v7"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M2 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10.5-4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/></svg>
);
const MegaphoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
);
const CompassIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
);

export default Services;
