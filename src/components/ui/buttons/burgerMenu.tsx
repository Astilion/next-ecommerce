import styles from "./burgerMenu.module.css";
interface BurgerMenuProps {
    isNavOpen: boolean;
    toggleNav: () => void;
}
const BurgerMenu = ({ isNavOpen, toggleNav }: BurgerMenuProps) => {
    return (
        <button
            className={` flex justify-center group relative mr-auto group p-3 ${isNavOpen ? styles.cross : styles.burger}`}
            onClick={toggleNav}
        >
            <span
                className={`absolute bg-creme-500 group-hover:bg-accent-500 transition duration-300 ${styles.line} ${styles.burger} ${isNavOpen ? "" : styles.opacity1}`}
            ></span>
            <span
                className={`absolute bg-creme-500 group-hover:bg-accent-500 transition duration-300 ${styles.line} ${styles.cross} ${isNavOpen ? styles.rotateMinus45 : styles.opacity0
                    }`}
            ></span>
            <span
                className={`absolute bg-creme-500 group-hover:bg-accent-500 transition duration-300 ${styles.line} ${styles.cross} ${isNavOpen ? styles.rotate45 : styles.opacity0
                    }`}
            ></span>
        </button>
    );
};

export default BurgerMenu;
