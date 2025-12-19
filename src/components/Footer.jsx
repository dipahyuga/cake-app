import { Cake, Facebook, Heart, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='g-bwhite text-gray-800 border-t border-gray-200 overflow-hidden'>
        <div className='max-w-6xl mx-auto px-4 md:px-8 py-12 '>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
                <div className='text-center md:text-left'>
                    <div className='flex items-center justify-center md:justify-start gap-2 mb-4'>
                        <Heart className='w-8 h-8 text-[#b6723c]' />
                        <span className='text-2xl font-bold text-gray-900'>
                            Meat & <span className='text-[#b6723c]'>Co.</span> </span>
                    </div>
                    <p className='text-gray-600 text-sm'>
                        Kami menyajikan hidangan utama terbaik dengan fokus pada kualitas daging dan bumbu yang kaya. Nikmati pengalaman bersantap mewah dan memuaskan.
                    </p>
                </div>
                <div className='text-center' >
                    <div className='space-y-2'>
                        <div className='flex items-center justify-center gap-2'>
                            <Mail className='w-4 h-4 text-[#b6723c] ' />
                            <span className='text-gray-600'>
                                hello@meatnco.com
                            </span>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <Phone className='w-4 h-4 text-[#b6723c] ' />
                            <span className='text-gray-600'>
                                +62 812 3456 7890
                            </span>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <MapPin className='w-4 h-4 text-[#b6723c] ' />
                            <span className='text-gray-600'>
                                45 Grill Street, Block B
                            </span>
                        </div>
                    </div>
                </div>
                {/* social and hours */}
                <div className='text-center md:text-right'>
                    <div className='flex justify-center md:justofy-end gap-4 mb-4'>
                        <a href='#'
                            className='text-gray-600 hover:text-[#b6723c] transition-colors '>
                                <Instagram className='w-6 h-6' />
                        </a>
                        <a href='#'
                            className='text-gray-600 hover:text-[#b6723c] transition-colors '>
                                <Facebook className='w-6 h-6' />
                        </a>
                    <p className='text-gray-500 text-sm'>
                        Daily: 08:00 AM - 10:00 PM
                    </p>
                    </div>
                </div>
            </div>
        </div>
        {/* bottom bar */}
        <div className='border-t border-gray-300 '>
            <div className='max-w-6xl mx-auto px-4 md:px-8 py-4'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-500'>
                    <p className='flex items-center gap-1'>
                        @ 2026 Meat & Co. Made with
                        <Heart className='w-4 h-4 text-red-500 fill-current' />
                    </p>
                    <div className='flex gap-4'>
                        <a href='#'
                            className='hover:text-[#b6723c] transition-colors '>
                            Privacy
                        </a>
                        <a href='#'
                            className='hover:text-[#b6723c] transition-colors '>
                            Terms
                        </a>
                        <a href='#'
                            className='hover:text-[#b6723c] transition-colors '>
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
