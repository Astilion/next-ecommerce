'use client'
import BurgerMenu from "../ui/buttons/burgerMenu"
import { useState } from "react";
import CartButton from "../ui/buttons/cartButton";
import ProfileButton from "../ui/buttons/profileButton";
import useScreenDetector from "@/src/hooks/useScreenDetector";
import MobileNav from "./nav/mobileNav";


export default function Header() {
    const [mobileNavIsActive, setMobileNavIsActive] = useState(false);
    const isMobile = useScreenDetector(768)
    const showMobileNavHandler = () => {
        setMobileNavIsActive(prev => !prev);
    };
    const hideMobileNavHandler = () => {
        setMobileNavIsActive(false);
    };
    return (
        <header className="fixed flex justify-center  w-full bg-primary-500 text-creme-500  border-b h-[72px]  z-[999]">
            <div className="max-w-7xl top-0 left-0 right-0 flex justify-between items-center w-full px-2 md:px-6 lg:px-8 xl-px-12">
                <div className="flex justify-center items-center gap-1 md:gap-4">
                    <BurgerMenu
                        toggleNav={showMobileNavHandler}
                        isNavOpen={mobileNavIsActive} />
                    <div>
                        <p className="flex text-center flex-nowrap font-bold p-2 text-lg md:text-xl xl:text-2xl">Suple Station</p>
                    </div>
                    {isMobile && (

                        <MobileNav mobileNavIsActive={mobileNavIsActive} hideNav={hideMobileNavHandler} />

                    )}
                </div>
                <div className="flex justify-end items-center gap-4">
                    {!isMobile && (
                        <div>
                            <nav>
                                <ul className="flex">
                                    <li>Brands</li>
                                    <li>Categories</li>
                                    <li>Bestsellers</li>
                                    <li>About us</li>
                                    <li>Blog</li>
                                    <li>Contact</li>
                                </ul>
                            </nav>
                        </div>
                    )}
                    <div>
                        <input type="text" placeholder="search..." className="p-1 rounded-xl bg-primary-600 text-creme-500 w-full" />
                    </div>
                    <div><CartButton /></div>
                    <div><ProfileButton /></div>
                </div>
            </div>


        </header >
    )
}