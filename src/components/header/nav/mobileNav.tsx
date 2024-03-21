import NavList from "./navList";
import clsx from 'clsx';

type MobileNavProps = {
    mobileNavIsActive: boolean;
    hideNav: () => void
}

export default function MobileNav({ mobileNavIsActive, hideNav }: MobileNavProps) {
    const bgClasses = mobileNavIsActive
        ? " translate-x-0"
        : "translate-x-[-120%]";

    const backdropClasses = mobileNavIsActive
        ? "translate-x-[0px]"
        : "translate-x-[300%]";
    return (
        <nav className="z-40">
            <div
                className={`${bgClasses} absolute top-[71px] left-0 h-screen-small duration-300 w-[60%] bg-primary-500 `}>

                <NavList isActive={mobileNavIsActive} />
            </div>
            <div
                className={`${backdropClasses} absolute top-[71px] right-0 h-screen-small duration-300 opacity-75 bg-black w-[40%]`}
                onClick={hideNav}></div>
        </nav>
    )
}