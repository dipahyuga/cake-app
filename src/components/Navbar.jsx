import { Cake, Menu, UtensilsCrossed, X } from "lucide-react"
import { useState } from "react"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    const Links =[
        {name: 'Product', href:'#products'},
        {name: 'Categories', href:'#categories'},
        {name: 'About', href:'#about'},
        {name: 'Services', href:'#services'},
        {name: 'Contact', href:'#contact'}
    ]
    return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#2d2d2d]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 mb-4">
                <UtensilsCrossed className="w-8 h-8 text-[#e3985a]"/>
                <span className="text-2xl font-bold text-gray-100">
                    Meat & <span className="text-[#e3985a]">Co.</span>
                </span>
            </div>
            {/* Link */}
            <ul className="hidden md:flex items-center gap-8 text-gray-100 font-medium">
                {Links.map((link) => (
                    <li key={link.name}>
                        <a href={link.href}
                        className="hover:text-white hover:bg-[#b6723c] rounded-full px-4 py-2 transition">
                        {link.name}
                        </a>
                    </li>
                ))}
            </ul>
            {/* button */}
            <button className="hidden md:block bg-[#b6723c] text-white px-4 py-2 rounded-full hover:bg-[#9a5319] transition ">
                call section
            </button>

            {/* mobile icon menu */}
            <div className="md:hidden text-[#da9258] ">
                <button onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} /> }
                </button>
            </div>
        </div>

            {/* mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-[#2d2d2d] py-4 space-y-4 text-center font-medium text-gray-100  ">
                    {Links.map((link) => (
                        <a key={link.name}
                            href={link.href}
                            className="block hover:text-white"
                            onClick={() => setIsOpen(false)}>
                                {link.name}
                        </a>
                    ))}
                    <button className="bg-[#e3985a] text-white pz-4 py-2 rounded-full hover:bg-[#9a5139] transition ">
                        call section
                    </button>
                </div>
            )}
        
    </nav>
  )
}

export default Navbar
