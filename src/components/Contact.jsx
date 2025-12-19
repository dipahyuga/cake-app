import { Clock, MapPin, Phone } from "lucide-react"

const Contact = () => {
  return (
    <div className="bg-[#2d2d2d] py-4 px-4 scroll-m-32 overflow-hidden" id="contact">
        <section className="flex items-center justify-center">
            <div className="w-full max-w-4xl bg-[#e9c39b] rounded-4xl shadow-2xl p-8 md:p-12"
                data-aos='zoom-in' 
                data-aos-duration='1000'
                data-aos-easing='ease-out-cubic' >
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8 "
                    data-aos='fade-down'
                    data-aos-delay='200'
                    data-aos-duration='800' >
                        Visit <span className="text-[#b6732c]">Our Shop </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* address */}
                    <div className="text-center p-6 bg-white/50 rounded-2xl hover:scale-105 transform transition-all duration-300 hover:shadow-xl "
                        data-aos='fade-right'
                        data-aos-delay='300'
                        data-aos-duration='700'>
                            <div className="w-12 h-12 bg-[#8b5e34] rounded-full flex items-center justify-center mx-auto mb-3 "
                                data-aos='zoom-in'
                                data-aos-delay='500'
                                data-aos-duration='700'>
                                    <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2"
                                data-aos='fade-down'
                                data-aos-delay='400'
                                data-aos-duration='600'>
                                    Address
                            </h3>
                            <p className="text-gray-700 text-sm"
                                data-aos='fade-up'
                                data-aos-delay='500'
                                data-aos-duration='500'>
                                45 Grill Street, Block B <br />
                                Prime Cut City, PC 78901
                            </p>
                    </div>
                    {/* contact card */}
                    <div className="text-center p-6 bg-white/50 rounded-2xl hover:scale-105 transform transition-all duration-300 hover:shadow-xl "
                        data-aos='fade-right'
                        data-aos-delay='300'
                        data-aos-duration='700'>
                            <div className="w-12 h-12 bg-[#8b5e34] rounded-full flex items-center justify-center mx-auto mb-3 "
                                data-aos='zoom-in'
                                data-aos-delay='500'
                                data-aos-duration='700'>
                                    <Phone className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2"
                                data-aos='fade-down'
                                data-aos-delay='400'
                                data-aos-duration='600'>
                                    Contact
                            </h3>
                            <p className="text-gray-700 text-sm"
                                data-aos='fade-up'
                                data-aos-delay='500'
                                data-aos-duration='500'>
                                +62 812 3456 7890 <br />
                                hello@meatnco.com
                            </p>
                    </div>
                    {/* house card */}
                    <div className="text-center p-6 bg-white/50 rounded-2xl hover:scale-105 transform transition-all duration-300 hover:shadow-xl "
                        data-aos='fade-right'
                        data-aos-delay='300'
                        data-aos-duration='700'>
                            <div className="w-12 h-12 bg-[#8b5e34] rounded-full flex items-center justify-center mx-auto mb-3 "
                                data-aos='zoom-in'
                                data-aos-delay='500'
                                data-aos-duration='700'>
                                    <Clock className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2"
                                data-aos='fade-down'
                                data-aos-delay='400'
                                data-aos-duration='600'>
                                    Hours
                            </h3>
                            <p className="text-gray-700 text-sm"
                                data-aos='fade-up'
                                data-aos-delay='500'
                                data-aos-duration='500'>
                                Daily: 08:00 AM - 10:00 PM <br />
                                Kitchen Service Non-Stop
                            </p>
                    </div>
                </div>
                <div className="text-center mt-8"
                    data-aos='flip-up'
                    data-aos-delay='800'
                    data-aos-duration='800'>
                        <button className="bg-[#2d2d2d] text-white px-8 py-3 rounded-full hover:bg-[#444] transition hover:scale-105 transform duration-300">
                            Get Direction
                        </button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
