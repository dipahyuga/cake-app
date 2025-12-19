import React from 'react'
import ct1 from '../assets/ct1.jpg'
import ct2 from '../assets/ct2.jpg'
import ct3 from '../assets/ct3.jpg'
import ct4 from '../assets/ct4.jpg'
import ct5 from '../assets/ct5.jpg'



const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "Steak & Meat",
            count: '07',
            color: 'bg-[#fde68a]',
            textColor: 'text-[#92400e]',
            colSpan: 'row-span-1',
            image: ct1
        },
        {
            id: 2,
            name: "Pasta",
            count: '12',
            color: 'bg-[#fce7f3]',
            textColor: 'text-[#b91c1c]',
            colSpan: 'row-span-1',
            image: ct2
        },
        {
            id: 3,
            name: "Chicken",
            count: '15',
            color: 'bg-[#bfdbfe]',
            textColor: 'text-[#1e3a8a]',
            colSpan: 'row-span-2',
            big: true,
            image: ct3
        },
        {
            id: 4,
            name: "Soup & Stew",
            count: '06',
            color: 'bg-[#fecaca]',
            textColor: 'text-[#7f1d1d]',
            colSpan: 'row-span-1',
            image: ct4
        },
        {
            id: 5,
            name: "Burger",
            count: '08',
            color: 'bg-[#d1fae5]',
            textColor: 'text-[#064e3b]',
            colSpan: 'row-span-1',
            image: ct5
        }
    ]
  return (
    <section className='py-20 bg-[#fffaf5] overflow-hidden scroll-m-14' id='categories'>
        <div className='container x-auto px-6 md:px-10'>
        <div className='flex justify-between items-center mb-10'
            data-aos='fade-down'
            data-aos-duration='1000'
            data-aos-easing='ease-out-cubic'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                    Popular <span className='text-[#b6732c]' >Categories</span>
                </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 auto-rows-auto'>
            {/* left */}
            <div className='flex flex-col gap-6'>
                {categories.slice(0, 2).map((cat, index) => (
                    <div className={`${cat.color} ${cat.textColor} rounded-2xl p-6 shadow-md hover:shadow-xl transition relative flex flex-col justify-between group hover:scale-105 transform duration-300`} 
                        key={cat.id}
                        data-aos='fade-right'
                        data-aos-delay={index * 200}
                        data-aos-duration='800'
                        data-aos-easing='ease-out-cubic'>
                            <div className='z-10 relative'>
                                <p className='text-xl font-bold opacity-80 w-10 h-10 flex items-center justify-center rounded-full bg-[#e9c396]'
                                    data-aos='zoom-in'
                                    data-aos-delay={index * 200 + 300}
                                    data-aos-duration='500'>  
                                        {cat.count}
                                </p>
                                <p className='text-sm opacity-80 font-bold'>
                                    Products
                                </p>
                                <h3 className='text-xl font-bold mt-1'>
                                    {cat.name}
                                </h3>
                            </div>
                            {/* image */}
                            <img src={cat.image} alt={cat.name}
                                className='absolute right-[-10px] bottom-[-25px] w-44 h-44 object-cover opacity-95 transition-transform duration-300 group-hover:scale-110 rounded-4xl'
                                data-aos='fade-left'
                                data-aos-delay={index * 200 + 400}
                                data-aos-duration='600'/>
                    </div>
                ))}
            </div>
            {/* middle */}
            <div className='flex flex-col'>
                <div className={`${categories[2].color} ${categories[2].textColor} rounded-3xl p-10 md:p-12 h-full flex flex-col items-start justify-center shadow-lg hover:shadow=2xl transition relative overflow-hidden group hover:scale-105 transform duration-300`}
                    data-aos='zoom-in'
                    data-aos-delay='400'
                    data-aos-duration='1000'
                    data-aos-easing='ease-out-cubic'>
                        <p className='text-xl font-bold opacity-80 w-10 h-10 flex items-center justify-center rounded-full bg-[#e9c39b] '
                            data-aos='bounce-in'
                            data-aos-delay='800'
                            data-aos-duration='700'>
                                {categories[2].count}
                        </p>
                        <p className='text-sm opacity-80 font-bold mt-2'>
                            products
                        </p>
                        <h3 className='text-2xl md:text-4xl font-bold mt-2'
                            data-aos='fade-down'
                            data-aos-delay='600'
                            data-aos-duration='800'>
                            {categories[2].name}
                        </h3>
                        <img src={categories[2].image} alt={categories[2].name} 
                            className='absolute -right-8 bottom-0 w-50 h-50 md:w-80 md:h-80 object-contain opacity-95 transition-transform duration-300 group-hover:scale-110 rounded-3xl'
                            data-aos='fade-left'
                            data-aos-delay='1000'
                            data-aos-duration='900' />
                </div>
            </div>
            {/* right */}
            <div className='flex flex-col gap-6'>
                {categories.slice(3, 5).map((cat, index) => (
                    <div className={`${cat.color} ${cat.textColor} rounded-2xl p-6 shadow-md hover:shadow-xl transition relative flex flex-col justify-between group hover:scale-105 transform duration-300`}
                    key={cat.id}
                    data-aos='fade-in'
                    data-aos-delay={index * 200}
                    data-aos-duration='800'
                    data-aos-easing='ease-out-cubic' >
                        <div className='z-10 relative'>
                            <p className='text-xl font-bold opacity-80 w-10 h-10 flex items-center justify-center rounded-full bg-[#e9c39b]'
                                data-aos='zoom-in'
                                data-aos-delay={index * 200 + 300}
                                data-aos-duration='500' >
                                    {cat.count}
                            </p>
                            <p className='text-sm opacity-80 font-bold '>
                                products                                
                            </p>
                            <h3 className='text-xl font-bold mt-1'>
                                {cat.name}
                            </h3>
                        </div>
                        {/* image */}
                        <img src={cat.image} alt={cat.name}
                            className='absolute right-[-10px] bottom-[-18px] w-44 h-44 object-cover opacity-95 transition-transform duration-300 group-hover:scale-110 rounded-4xl'
                            data-aos='fade-right'
                            data-aos-delay={index * 200 + 400}
                            data-aos-duration='600' 
                        />
                    </div>
                ))}
            </div>
        
        </div> 
        </div>
    </section>
  )
}

export default Categories
