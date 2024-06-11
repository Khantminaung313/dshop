import { Link } from "@inertiajs/react";

const Nav = ({categories, genderList}) => {

  const getCatsByGender = (genderId, categories) => {
        return categories
            .filter(
                (category) =>
                    category.parent_id === null &&
                    (category.gender.id === 1 ||
                        category.gender.id === genderId)
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
                                {category.sub_categories.filter(subCategory => subCategory.gender.id === 1 ||subCategory.gender.id === genderId)
                                .map((subCategory) => (
                                    <li
                                        className="hover:underline my-2"
                                        key={subCategory.id}
                                    >
                                        <Link href="/">{subCategory.name}</Link>
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
                {genderList.map((gender) => (
                    <li
                        className="group cursor-pointer py-4 px-4"
                        key={gender.id}
                    >
                        <span className="group-hover:text-d_light_blue text-lg tracking-wider uppercase font-semibold">
                            {gender.name}
                        </span>
                        <div className="hidden group-hover:block absolute top-full left-0 w-full bg-d_white dark:bg-d_dark_blue shadow-md border-b dark:border-d_gray overflow-hidden px-4">
                            <ul className="w-full grid grid-cols-4 container mx-auto py-8 gap-6">
                                {getCatsByGender(gender.id, categories)}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
