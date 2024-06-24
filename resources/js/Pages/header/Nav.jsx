import { Link, usePage } from "@inertiajs/react";

const Nav = () => {

    const {url} = usePage();
    const {genderList, categories} = usePage().props;

    const getCatsByGender = (genderId) => {
        return categories
            .filter(
                (category) =>
                    category.parent_id === null &&
                    (category.gender_id === 1 ||
                        category.gender_id === genderId)
            )
            .map(
                (category) =>
                    category.sub_categories &&
                    category.sub_categories.length > 0 && (
                        <li key={category.id}>
                            <span className="text-lg font-bold mb-4 inline-block">
                                {category.name}
                            </span>
                            <ul>
                                {category.sub_categories
                                    .filter(
                                        (subCategory) =>
                                            subCategory.gender_id === 1 ||
                                            subCategory.gender_id === genderId
                                    )
                                    .map((subCategory) => (
                                        <li
                                            className="hover:underline my-2"
                                            key={subCategory.id}
                                        >
                                            <Link href="/">
                                                {subCategory.name}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </li>
                        
                    )
            );
    };

    return (
        <nav className="d_container mx-auto hidden lg:block relative">
            <ul className="flex justify-center border-b border-d_gray/50">
                <li
                    className={`group cursor-pointer ${
                        url === "/" ? "text-d_light_blue" : ""
                    }`}
                >
                    <Link href="/" className="group-hover:text-d_light_blue text-lg tracking-wider uppercase font-semibold inline-block py-4 px-4">
                        Home
                    </Link>
                </li>

                {genderList
                    .filter((gender) => gender.name !== "All")
                    .map((gender) => (
                        <li
                            className="group cursor-pointer py-4 px-4"
                            key={gender.id}
                        >
                            <span className="group-hover:text-d_light_blue text-lg tracking-wider uppercase font-semibold">
                                {gender.name}
                            </span>
                            <div className="hidden group-hover:block absolute top-full left-0 w-full bg-d_white dark:bg-d_dark_blue shadow-md border-b dark:border-d_gray overflow-hidden px-4">
                                <ul className="w-full grid grid-cols-4 container mx-auto py-8 gap-6">
                                    {getCatsByGender(gender.id)}
                                </ul>
                            </div>
                        </li>
                    ))}

                <li
                    className={`group cursor-pointer ${
                        url.startsWith('/about') ? "text-d_light_blue" : ""
                    }`}
                >
                    <Link href="/about" className="group-hover:text-d_light_blue text-lg tracking-wider uppercase font-semibold inline-block py-4 px-4">
                        About
                    </Link>
                </li>
                <li
                    className={`group cursor-pointer ${
                        url.startsWith('/contact') ? "text-d_light_blue" : ""
                    }`}
                >
                    <Link href="/contact" className="group-hover:text-d_light_blue text-lg tracking-wider uppercase font-semibold inline-block py-4 px-4">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
