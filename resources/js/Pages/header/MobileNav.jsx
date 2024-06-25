import { Link, usePage } from "@inertiajs/react";
import { useContext, useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import {
    FaBars,
    FaFacebook,
    FaInstagram,
    FaLongArrowAltLeft,
    FaTimes,
    FaTwitter,
} from "react-icons/fa";
import { ThemeContext } from "../Layout";


const MobileNav = () => {
    const [openNav, setOpenNav] = useState(false);
    const [activeGender, setActiveGender] = useState(null);
    const [activeParent, setActiveParent] = useState(null);
    const { theme, setTheme } = useContext(ThemeContext);
    const {url, component} = usePage();
    const {genderList, categories} = usePage().props;


    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const categoryByGender = (genderId, gender) => {
        return (
            <>
                <div className={`absolute top-0 left-0 w-full h-full bg-white dark:bg-d_dark_blue text-d_black dark:text-d_white d_transition py-4 ${activeGender === genderId ? 'translate-x-0' : 'translate-x-full'}`}>
                    <Link href={`/${gender.name}`} className="text-2xl block font-semibold uppercase tracking-wider p-4 border-b border-b-slate-200">{gender.name}</Link>
                    <ul>
                        {categories
                            .filter((category) => category.parent_id === null && (category.gender.id === 1 || category.gender.id === genderId))
                            .map(category => 
                                category.sub_categories &&
                                category.sub_categories.length > 0 && (
                                    <li
                                    className="p-4 cursor-pointer text-center border-b border-dotted"
                                    key={category.id}
                                >
                                    <span className="inline-block w-full h-full hover:text-d_light_blue" onClick={() => openSubCatList(category.id)}>
                                        {category.name}
                                    </span>
                                    {getSubCategories(category, genderId)}
                                </li>
                                )
                        )}
                    </ul>
                </div>
            </>
        );
    };

    const getSubCategories = (category, genderId) => {
        return (
            <>
                <ul className={`absolute top-0 left-0 w-full h-full bg-white dark:bg-d_dark_blue text-d_black dark:text-d_white d_transition py-4 ${activeParent === category.id ? 'translate-x-0' : 'translate-x-full'}`}>
                <Link href={`/${category.name}`} className="text-2xl block font-semibold uppercase tracking-wider p-4 border-b border-b-slate-200">{category.name}</Link>
                    {
                        category.sub_categories.filter(subCategories => subCategories.parent_id === category.id && (subCategories.gender_id === genderId || subCategories.gender_id === 1))
                            .map((subCategories) => (
                                <li
                                    className="p-4 cursor-pointer text-center border-b border-dotted"
                                    key={subCategories.id}
                                >
                                    <Link href="/products" className="inline-block w-full h-full hover:text-d_light_blue">{subCategories.name}</Link>
                                </li>
                            ))
                    }
                </ul>
            </>
        )
    }

    const openSubCatList = (categoryId) => {
        setActiveParent(prev => categoryId)
    }
    const openCatList = (genderId) => {
        setActiveGender(prev => genderId)
    }

    const backAction = () => {
        if(activeParent) {
            setActiveParent(null)
        } else if (activeGender) {
            setActiveGender(null)
        }
    }

    return (
        <>
            <div
                className={`block lg:hidden fixed top-0 w-full h-[100vh] shadow-md dark:shadow-d_black z-50 bg-d_gray/50 d_transition ${openNav ? "left-0" : "left-[-100%]"
                    }`}
            >
                <div className="w-full max-w-[70%] sm:max-w-[400px] h-[100%] overflow-x-hidden overflow-y-auto bg-d_white dark:bg-d_dark_blue d_transition relative">
                    <div className="w-full border-b border-d_gray p-2 flex justify-between gap-4">
                        <button className="px-8 py-3 border border-d_gray/30 bg-d_gray/40 dark:text-white active:scale-95 d_mini_transition" onClick={backAction}>
                            <FaLongArrowAltLeft></FaLongArrowAltLeft>
                        </button>
                        <button
                            className="px-8 py-3 border border-d_gray/30 bg-d_gray/40 dark:text-white active:scale-95 d_mini_transition"
                            onClick={() => setOpenNav(false)}
                        >
                            <FaTimes></FaTimes>
                        </button>
                    </div>

                    <nav className="relative py-2">
                        <ul className="text-d_black dark:text-d_white py-4">
                            <li className="cursor-pointer text-center border-b border-dotted group">
                                <Link
                                    href="/"
                                    className={`group-hover:text-d_light_blue inline-block w-full h-full p-4 ${url === '/' ? 'text-d_light_blue' : ''}`}
                                >
                                    Home
                                </Link>
                            </li>
                            {genderList
                                .filter((gender) => gender.name !== "All")
                                .map((gender) => (
                                    <li
                                        className={`cursor-pointer text-center border-b border-dotted group`}
                                        key={gender.id}
                                    >
                                        <span className="group-hover:text-d_light_blue inline-block w-full h-full p-4" onClick={() => openCatList(gender.id)}>
                                            {gender.name}
                                        </span>
                                        {categoryByGender(gender.id, gender)}
                                    </li>
                                ))}
                            <li className="text-center border-b border-dotted group">
                                <Link
                                    href="/about"
                                    className={`cursor-pointer group-hover:text-d_light_blue inline-block w-full h-full p-4 ${url.startsWith('/about') ? 'text-d_light_blue' : ''}`}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="text-center border-b border-dotted group">
                                <Link
                                    href="/contact"
                                    className={`cursor-pointer group-hover:text-d_light_blue inline-block w-full h-full p-4 ${url.startsWith('/contact') ? 'text-d_light_blue' : ''}`}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="absolute bottom-0 left-0 w-full p-2 border-t dark:border-t-d_gray">
                        <div className="flex gap-3 justify-end ">
                            <FaFacebook className="w-6 h-6 text-blue-700 hover:text-blue-500 cursor-pointer" />
                            <FaInstagram className="w-6 h-6 text-orange-500 hover:text-orange-300 cursor-pointer" />
                            <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-600 cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="absolute right-4 sm:right-8 bottom-4 sm:bottom-8">
                    <button
                        className=" inline-block p-4 rounded-full bg-d_white dark:bg-d_dark_blue text-d_dark_blue dark:text-d_white d_mini_transition active:scale-95 shadow-lg shadow-d_dark_blue"
                        onClick={toggleTheme}
                    >
                        {theme === "light" ? (
                            <BsMoonStars className="w-4 h-4" />
                        ) : (
                            <BsSun className="w-4 h-4" />
                        )}
                    </button>
                </div>
            </div>

            {/* Bottom Navigate Bar */}
            <div className="fixed lg:hidden bottom-0 left-[50%] translate-x-[-50%] w-full">
                <div className="w-full max-w-[650px] px-4 py-2 bg-d_white dark:bg-d_dark_blue d_transition mx-auto flex items-center justify-between rounded-md shadow-sm border border-d_gray/3-">
                    <Link
                        href="/products"
                        className="rounded-sm text-d_black dark:text-d_white font-bold text-[30px]"
                    >
                        <AiOutlineProduct />
                    </Link>
                    <Link
                        href="/"
                        className="rounded-sm text-d_black dark:text-d_white font-bold text-[30px]"
                    >
                        <CiHome />
                    </Link>
                    <button
                        onClick={() => setOpenNav(true)}
                        className="rounded-sm text-d_black dark:text-d_white font-bold text-[30px]"
                    >
                        <FaBars />
                    </button>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
