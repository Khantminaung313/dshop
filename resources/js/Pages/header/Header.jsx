import { Link } from "@inertiajs/react";
import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../Home";

const Header = ({ genderList, categories }) => {
    const { theme, setTheme } = useContext(ThemeContext);
    let catsByGender = [];
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const getCatsByGender = (genderId, categories) => {
        return categories
            .filter(
                (category) =>
                    category.parent_id === null &&
                    (category.gender.id === 1 || category.gender.id === genderId)
            )
            .map((category) => (
                <li key={category.id}>
                    <span className="text-lg font-bold mb-4 inline-block">{category.name}</span>
                    {category.sub_categories && category.sub_categories.length > 0 && (
                        <ul>
                            {category.sub_categories.map((subCategory) => (
                                <li key={subCategory.id}>
                                    <Link href="/">{subCategory.name}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ));
    };
    

    return (
        <div className="bg-d_white dark:bg-d_dark_blue text-d_black dark:text-d_white d_transition fixed top-0 left-0 w-full shadow shadow-d_gray dark:shadow-white">
            <header className="d_container flex justify-between items-center">
                <h1 className="text-2xl xl:text-3xl font-semibold lg:font-bold text-d_orange tracking-wider">
                    Dshop
                    <span className="text-d_gray text-xs tracking-normal">
                        What ever you want!
                    </span>
                </h1>
                <nav>
                    <ul className="flex">
                        {genderList.map((gender) => (
                            <li
                                className="group cursor-pointer py-8 px-4"
                                key={gender.id}
                            >
                                <span className="group-hover:text-d_light_blue text-lg tracking-wider uppercase font-semibold">
                                    {gender.name}
                                </span>
                                <div className="max-h-0 group-hover:max-h-[100vh] absolute top-full left-0 w-full bg-d_white dark:bg-d_dark_blue shadow-md border-y dark:border-y dark:border-d_gray overflow-hidden">
                                    <ul className="w-full grid grid-cols-4 xl:grid-cols-5 space-x-6 container mx-auto py-8">
                                        {getCatsByGender(gender.id, categories)}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    className={`border border-d_gray p-2 rounded-full ${
                        theme === "dark" ? "bg-d_dark_blue" : "bg-d_light_blue"
                    }`}
                    onClick={() => toggleTheme()}
                >
                    <FaMoon
                        className={`text-d_white w-5 h-5 ${
                            theme === "dark" && "hidden"
                        }`}
                    />
                    <FaSun
                        className={`text-d_white w-5 h-5 ${
                            theme === "light" && "hidden"
                        }`}
                    />
                </button>
            </header>
        </div>
    );
};

export default Header;
