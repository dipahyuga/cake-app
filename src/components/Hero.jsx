import hr1 from '../assets/hr1.jpg'

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-[#2d2d2d] pt-20 px-4 md:px-8 overflow-hidden'>
        <div className='realative w-full max-w-6xl bg-[#e9c39b] rounded-4xl shadown-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden px-8 md:px-16 md:h-[580px]'
            data-aos='zoom-in'
            data-aos-delay='100'>
                <div className='max-w-lg text-center md:text-left space-y-6 z-10'>
                    <p className='uppercase md:mt-0 mt-4 traacking-widest text-[#8b5e34] font-bold underline'
                        data-aos='fade-down'
                        data-aos-delay='300'
                        data-aos-easing='ease-out-cubic' >
                        Main Course
                    </p>
                    <div data-aos='fade-right'
                        data-aos-delay='500'>
                            <h1 className='text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight'>
                                Homemade Meat with {" "}
                                <span className='text-[#b6723c] block md:inline'
                                    data-aos='fade-right'
                                    data-aos-delay='700'>
                                        Delicious Flavors
                                </span>
                            </h1>
                    </div>
                    <p className='text-gray-600 text-left'
                        data-aos='fade-up'
                        data-aos-delay='900'>
                        Kami menjamin Rasa Sejati dari bahan-bahan premium, Dimasak Sempurna oleh para ahli. Namun, keajaiban kami tidak berhenti di sana. Kami menyajikan hidangan dengan keindahan visual yang Sama Memikatnya dengan Imajinasi Anda, menciptakan makanan yang tidak hanya lezat di lidah, tetapi juga fantastis di mata, persis seperti yang Anda impikan.
                    </p>
                    <div data-aos='flip-up'
                        data-aos-delay='1100'>
                            <button className='bg-[#2d2d2d] text-white px-8 py-3 rounded-full hover:bg-[#444] transition-all duration-300 hover:scale-105 shadow-lg '>
                                ORDER NOW
                            </button>
                    </div>
                </div>
                <div className='realtive flex justify-center md:justify-end ' > 
                    <div className='realtive'
                        data-aos='fade-left'
                        data-aos-delay='700'
                        data-aos-duration='1500'
                        data-aos-easing='ease-out-cubic'>
                            <img src={hr1} 
                                alt='cake'
                                className='w-[350px] md:w-[660px] md:h-[740px] object-contain drop-shadow-2xl animate-float '/>

                    </div>

                </div>
        </div>

    </section>
  )
}

export default Hero
