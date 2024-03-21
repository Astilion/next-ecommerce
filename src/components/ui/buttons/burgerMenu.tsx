import styles from "./burgerMenu.module.css";
interface BurgerMenuProps {
    isNavOpen: boolean;
    toggleNav: () => void;
}
const BurgerMenu = ({ isNavOpen, toggleNav }: BurgerMenuProps) => {
    return (
        <button
            className={`group mr-auto p-3 group ${isNavOpen ? styles.cross : styles.burger}`}
            onClick={toggleNav}
        >
            <div
                className={` bg-creme-500 group-hover:bg-accent-500 transition duration-300 ${styles.line} ${styles.burger} ${isNavOpen ? "" : styles.opacity1}`}
            ></div>
            <div
                className={`bg-creme-500 group-hover:bg-accent-500 transition duration-300 ${styles.line} ${styles.cross} ${isNavOpen ? styles.rotateMinus45 : styles.opacity0
                    }`}
            ></div>
            <div
                className={`bg-creme-500 group-hover:bg-accent-500 transition duration-300 ${styles.line} ${styles.cross} ${isNavOpen ? styles.rotate45 : styles.opacity0
                    }`}
            ></div>
        </button>
    );
};

export default BurgerMenu;
