import Link from 'next/link'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();


    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen);
    }


    const closeMenu = () => {
        setIsOpen(false);
    };


    return (
        <div className={`${scrollY > 50 ? "bg-bgdk-800 shadow-md p-2" : "bg-bgdk-900 p-4 bg-opacity-50 backdrop-blur-sm"} items-center w-screen grid place-items-center transition-all duration-300`}>
            <div className="flex space-x-4 items-center justify-between max-w-[1700px] w-full px-0 lg:px-20 md:px-10">
                <Link href="/">
                    <a onClick={(e) => closeMenu()}>
                        <div className="group flex space-x-2 items-center transition-all">
                            {/* <div className={`transition-all duration-300 ${scrollY > 50 ? "w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" : "w-[50px] h-[50px] sm:w-[75px] sm:h-[75px]"}`}>
                                <img src="/assets/xcheck_blue.svg" className="transition-all duration-300 group-hover:opacity-50" />
                            </div> */}
                            <h1 className={`${scrollY > 50 ? "text-xl" : "text-2xl sm:text-3xl"} font-bold transition-all duration-300 group-hover:text-txt-400`}>
                                <div className="flex">
                                    Landersweb
                                </div>
                            </h1>
                        </div>
                    </a>
                </Link>
                {/* The full sized menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <Link href="#Join">
                        <a onClick={(e) => closeMenu()}>
                            <div className="group flex space-x-2 items-center transition-all">
                                <h2 className={`${scrollY > 50 ? "text-lg" : "text-2xl"} font-bold text-txt-400 group-hover:text-txt transition-all duration-300`}>
                                    Estimate
                                </h2>
                            </div>
                        </a>
                    </Link>
                </div>
                {/* mobile menu button */}
                <button onClick={handleClick} className={`md:hidden text-txt-400 w-10 h-10 relative focus:outline-none`}>
                    <span className="sr-only">Open main menu</span>
                    <div
                        className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                        <span aria-hidden="true" className={`${isOpen ? 'rotate-45' : '-translate-y-1.5'} block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
                        <span aria-hidden="true"
                            className={`${isOpen ? 'opacity-0' : ''}  block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out`}></span>
                        <span aria-hidden="true"
                            className={`${isOpen ? "-rotate-45" : "translate-y-1.5"}  block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}></span>
                    </div>
                </button>
            </div>
            {/* mobile menu */}
            <div className={`menu ${isOpen ? "max-h-screen" : "max-h-0 opacity-0 disabled-full"} space-y-2 transition-all duration-700 ease-in-out`}>
                <div className="">
                    <Link href="#Join">
                        <a onClick={(e) => closeMenu()}>
                            <div className="group flex space-x-2 items-center transition-all">
                                <h2 className={`text-2xl font-bold text-txt-400 group-hover:text-txt transition-all duration-300`}>
                                    Estimate
                                </h2>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header