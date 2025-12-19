import { Cake, Heart, Star } from 'lucide-react'
import React from 'react'

import ab2 from '../assets/ab2.jpg'
import ab3 from '../assets/ab3.jpg'

const About = () => {
  return (
    <div className='main-h-screen bg-[#2d2d2d] py-20 px-4 overflow-hidden' id='about'>
        <section className='flex items-center justify-center rounded-4xl mb-20'>
            <div className='relative w-full max-w-6xl bg-[#e9c39b] rounded-4xl shadow-2xl flex flex-col lg:flex-row items-center justify-between overflow-hidden p-8 md:p-16 '
                data-aos='zoom-in'
                data-aos-duration='1200'
                data-aos-easing='ease-out-cubic'>
                {/* text content */}
                <div className='max-w-lg text-center lg:text-left space-y-6 z-10 lg:mr-8 '>
                    <p className='uppercase tracking-widest text-[#8b5e34] font-semibold '
                        data-aos='fade-down'
                        data-aos-delay='300'
                        data-aos-duraation='800'>
                        Sweet Beginnings
                    </p>
                    <div data-aos='faded-right'
                        data-aos-delay='500'>
                            <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight'>
                                Our <span className='text-[#b6723c] '>Delicious</span> Story
                            </h1>
                    </div>
                    <div className='space-y-4 text-gray-700'>
                        <p className='leading-relaxed'
                            data-aos='fade-up'
                            data-aos-delay='700'
                            data-aos-duration='800'>
                            Di Meat & Co., kisah rasa kami berawal dari komitmen pada kepuasan sejati, jauh melampaui keindahan visual. Saat Anda memasuki restoran, aroma kuat dari daging yang diasap perlahan dan rempah yang dibakar hangat segera menyambut, menjanjikan pengalaman yang mengenyangkan dan abadi. Kami merayakan tekstur dan kekuatan rasa bahan premium.
                        </p>
                        <p className='leading-relaxed'
                            data-aos='fade-up'
                            data-aos-delay='900' 
                            data-aos-duration='800'> 
                            Setiap hidangan dari gurihnya Wagyu Patty Smash Burger yang juicy hingga Grilled King Prawn Skewers yang renyah di luar dan kenyal di dalam  dirancang untuk sensasi mulut yang tak terlupakan. Kami percaya bahwa kenikmatan sejati adalah kombinasi dari porsi yang memuaskan dan rasa Umami yang kaya, menciptakan kenyamanan mendalam yang hanya bisa didapat dari hidangan utama yang dimasak dengan gairah.
                        </p>
                    </div>
                    <div className='flex flex-wrap gap-4 pt-4'
                        data-aos='fade-up'
                        data-aos-delay='1100'
                        data-aos-duration='600'>
                            <div className='flex items-center gap-2'
                                data-aos='flip-left'
                                data-aos-delay='1200'>
                                    <Cake className='w-5 h-5 text-[#8b5e34]'/>
                                    <span className='text-gray-700'>
                                        Fresh Daily
                                    </span>
                            </div>
                            <div className='flex items-center gap-2'
                                data-aos='flip-left'
                                data-aos-delay='1300'>
                                    <Heart className='w-5 h-5 text-[#8b5e34]'/>
                                    <span className='text-gray-700'>
                                        Handcraft
                                    </span>
                            </div>
                            <div className='flex items-center gap-2'
                                data-aos='flip-left'
                                data-aos-delay='1300'>
                                    <Star className='w-5 h-5 text-[#8b5e34]'/>
                                    <span className='text-gray-700'>
                                        Award Winning
                                    </span>
                            </div>
                    </div>
                </div>
                {/* images */}         
            <div className='relative mt-8 lg:mt-0'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='relative transform rotate-2'
                        data-aos='fade-left'
                        data-aos-delay='600'
                        data-aos-duration='1000'>
                            <img src={ab2} alt='Sweet'
                                className='rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover border-4 border-white hover:scale-105 transition-transform duration-300' /> 
                            <p className='font-bold text-center text-xl text-[#b6723c]'>Vinsmoke <span className='underline text-black'>Sanji</span></p>
                    </div>
                    <div className='relative transform -rotate-2 mt-8'
                        data-aos='fade-left'
                        data-aos-delay='600'
                        data-aos-duration='1000'>
                            <img src={ab3} alt='Sweet'
                                className='rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover border-4 border-white hover:scale-105 transition-transform duration-300' /> 
                            <p className='font-bold text-center text-xl text-[#b6723c]'>Monkey D. <span className='underline text-black'>Luffy</span></p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default About
