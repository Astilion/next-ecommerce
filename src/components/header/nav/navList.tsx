import useScreenDetector from "@/src/hooks/useScreenDetector";
import Link from "next/link";

interface NavListProps {
    isActive?: boolean;
}
export default function NavList({ isActive }: NavListProps) {
    const isMobile = useScreenDetector(768)
    const navNames: string[] = [
        "brands", "categories", "bestsellers", "about us", "blog", "contact"
    ]
    const anchorClasses =
        " block py-2  px-4 font-bold lg:pb-[39px] lg:px-2 lg:py-2 lg:border-b-4  lg:relative lg:ml-4  lg:hover:border-orange-400 lg:focus:border-orange-400 hover:text-accent-500 focus:text-accent-500 text-creme-500 transition lg:inline z-100";

    const mobileUlClasses = isMobile
        ? "flex absolute mt-2 flex-col duration-300 w-full "
        : "";

    const translateXClass = isMobile && !isActive ? "translate-x-[-320%]" : "";

    const ulClasses = `${mobileUlClasses} ${translateXClass} lg:flex lg:flex-row lg:relative`;
    return (
        <ul className={ulClasses}>
            {navNames.map((name, index) => (
                <li key={index} className="pb-2 px-2 border-b-2 border-solid border-creme-500">
                    <Link href='#' className={anchorClasses}>
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}