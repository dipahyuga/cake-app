import { Clock, Heart, Shield, Truck } from 'lucide-react'
import React from 'react'
import sv1 from '../assets/sv1.jpg'


const Service = () => {
    const services = [
        {
            icon: <Truck className='w-8 h-8' />,
            title: 'Express Delivery',
            desc: 'Kami menjamin hidangan utama Anda tiba dalam keadaan panas dan sempurna. Pengiriman cepat untuk memuaskan hasrat makan Anda segera.'
        },
        {
            icon: <Clock className='w-8 h-8' />,
            title: 'Jam Makan Non-Stop',
            desc: 'Lapar kapan saja? Restoran kami siap melayani pesanan Anda 24 jam sehari, 7 hari seminggu. Kelezatan tersedia tanpa batas waktu.'
        },
        {
            icon: <Shield className='w-8 h-8' />,
            title: 'Jaminan Kualitas Bahan',
            desc: 'Kami hanya menggunakan bahan baku premium dan segar. Kami berjanji menyajikan makanan yang lezat, aman, dan memuaskan.'
        },
        {
            icon: <Heart className='w-8 h-8' />,
            title: 'Menu Sesuai Pesanan',
            desc: 'Butuh porsi khusus atau modifikasi alergi? Kami melayani permintaan kreasi kustom untuk memastikan pengalaman bersantap yang personal.'
        },
    ]
  return (
    <section className='scroll-4 w-full bg-white py-16 px-4 md:px-8 flex justify-center overflow-hidden' id='services'> 
        <div className='w-full max-w-6xl'>
            <div className='text-center mb-12'
                data-aos='fade-down'
                data-aos-duration='1000'>
                    <h1 className='text-3xl md:text-5xl font-extrabold text-gray-900'>
                        Our <span className='text-[#b6732c]'>Premium</span> Services
                    </h1>
                    <p className='text-gray-700 max-w-2xl mx-auto'>
                        Kami tidak hanya menyajikan hidangan kami menyajikan pengalaman kuliner mewah yang didukung oleh layanan yang cepat, andal, dan berpusat pada pelanggan.
                    </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-start'>
                <div className='space-y-6 order-1 md:order-none'>
                    {services.slice(0, 2).map((service, index) => (
                        <ServiceCard 
                            key={index}
                            service={service}
                            aos='fade-right'
                            delay={index * 150} />
                    ))}
                </div>
                {/* center images */}
                <div className='flex justify-center items-center order-first md:order-none'
                    data-aos='zoom-in'
                    data-aos-delay='300'>
                        <div className='relative'>
                            <div className='absolute -inset-4 bg-[#8b5e34] rounded-full opacity-10 blur-lg'>
                                </div>
                            <img src={sv1} alt='service'
                                className='relative w-56 h-56 md:w-80 md:h-80 object-contain z-10 animate-float' /> 
                        </div>
                </div>

                <div className='space-y-6 order-3 md:order-none'>
                    {services.slice(2, 4).map((service, index) => (
                        <ServiceCard 
                            key={index}
                            service={service}
                            aos='fade-left'
                            delay={index * 150}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

const ServiceCard = ({service, aos = 'fade-up', delay = 0}) => (
    <div className='bg-white/70 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#b6723c] hover:scale-105 hover:-translate-y-1'
        data-aos={aos}
        data-aos-delay={delay}
        data-aos-duration='800'>
            <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-[#8b5e34] rounded-full flex items-center justify-center text-white flex-shrink-0'>
                    {service.icon}
                </div>
                <div>
                    <h3 className='text-lg font-bold text-gray-900 mb-2'>
                        {service.title}
                    </h3>
                    <p className='text-gray-700 leading-relaxed'> 
                       {service.desc} 
                    </p>
                </div>
            </div>

    </div>
)

export default Service
