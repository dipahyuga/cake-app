import React from 'react'
import pd1 from '../assets/pd1.jpg'
import pd2 from '../assets/pd2.jpg'
import pd3 from '../assets/pd3.jpg'
import pd4 from '../assets/pd4.jpg'
import pd5 from '../assets/pd5.jpg'
import pd6 from '../assets/pd6.jpg'
import pd7 from '../assets/pd7.jpg'
import pd8 from '../assets/pd8.jpg'


const Products = () => {
    const products = [
        {id:1, title: 'Wellington Ham Glaze', price:'Rp 245.000', tag: 'Best', image: pd1},
        {id:2, title: 'Seafood Platter Premium', price:'Rp 210.000', tag: 'Best', image: pd2},
        {id:3, title: 'Supreme Lobster Paella', price:'Rp 265.000', tag: 'New', image: pd3},
        {id:4, title: 'Prawn King Grill Set', price:'Rp 280.000', tag: 'New', image: pd4},
        {id:5, title: 'Golden Fried Curry Crab', price:'Rp 255.000', tag: 'Hot', image: pd5},
        {id:6, title: 'Rosemary Orange Grilled Fish', price:'Rp 198.000', tag: 'Hot', image: pd6},
        {id:7, title: 'Smoked Sockeye Plank', price:'Rp 230.000', tag: 'Best', image: pd7},
        {id:8, title: 'Oriental Soup Gurami', price:'Rp 175.000', tag: 'Best', image: pd8}
    ]
  return (
    <section className='py-20 bg-[#2d2d2d] overflow-hidden' id='products'>  
        <div className='container mx-auto px-6 md:px-10 '>
            {/* title */}
            <div className='flex flex-col md:flex-row justify-between items-center mb-10'
                data-aos='fade-down'
                data-aos-delay='1000'>
                    <h2 className='text-3xl md:text-4xl font-bold text-white'>
                        Our <span className='text-[#e3985a] '>Main Menu</span>
                    </h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
                {products.map((item, index) => (
                    <div className='relative bg-[#fffaf5] rounded-2xl shadow-lg hover:shadow-2xl transition p-5 text-center hover:scale-105 transform duration-300 '
                        key={item.id}
                        data-aos='fade-up'
                        data-aos-delay={index * 100}
                        data-aos-duration='800'
                        data-aos-easing='ease-out-cubic'>
                            <span className='absolute top-4 left-4 bg-[#b6723c] text-white text-xs px-3 py-1 rounded-full '>
                                {item.tag}
                            </span>
                            {/* image */}
                            <img src={item.image} alt={item.title}
                                className='w-[160px] h-[160px] mx-auto object-contain ' />

                            {/* title and prix */}
                            <h3 className='text-lg font-semibold text-gray-800 mt-4'>
                                {item.title}
                            </h3>
                            <p className='text-[#b6723c] font-bold text-lg mt-2  '>
                                {item.price}
                            </p>

                            {/* button */}
                            <button className='mt-4 bg-[#2d2d2d] text-white px-6 py-2 rounded-full hover:bg-[#444] transition hover:scale-105 '
                                data-aos='zoom-in'
                                data-aos-delay={index *100 + 300}
                                data-aos-duration='500'>
                                Order Now
                            </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Products
