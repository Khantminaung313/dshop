import { Link } from "@inertiajs/react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCartCheck, BsHeart } from "react-icons/bs";
import { LuUserCircle2 } from "react-icons/lu";

const Header = ({ genderList, categories }) => {

    const [whitelist, setWhitelist] = useState(0);
	const [setting, setSetting] = useState(3);
	const [cart, setCart] = useState(1);
	return (
		<>
			<div className="d_container py-5 border-b border-d_gray/20 shadow-sm">
				<div className="flex justify-between items-center gap-4">
					<Link href="/"><h1 className="text-xl lg:text-2xl font-bold cursor-pointer">Dshop</h1></Link>
					<div className="relative w-full max-w-[800px]">
						<input
							type="text"
							className="w-full pl-2 lg:pl-4 pr-5 sm:pr-10 py-1 text-xs sm:text-sm lg:text-base border border-d_gray rounded-md focus:border-d_gray focus:outline-none bg-d_white dark:bg-d_dark_blue dark:text-d_white d_transition"
						/>
						<div className="absolute right-0 top-[50%] translate-y-[-50%] px-1 sm:px-3 border-l border-d_gray/30 group cursor-pointer">
							<AiOutlineSearch className="w-3 h-3 lg:w-5 lg:h-5 cursor-pointer group-hover:text-d_blue" />
						</div>
					</div>
					<div className="flex gap-2 lg:gap-3">
						<Link href="/cart" className="w-4 h-4 lg:w-6 lg:h-6 relative inline-block">
							<BsCartCheck className="w-full h-full text-d_black dark:text-d_white" />
							<span className={`text-white bg-red-500 px-1 rounded-full absolute -top-[10px] -right-1 text-xs ${cart <= 0 ? "hidden" : "inline"}`} >
								{cart}
							</span>
						</Link>
						<Link href="/whitelist" className="w-4 h-4 lg:w-6 lg:h-6 relative inline-block">
							<BsHeart className="w-full h-full text-d_black dark:text-d_white" />
							<span className={`text-white bg-red-500 px-1 rounded-full absolute -top-[10px] -right-1 text-xs ${whitelist <= 0 ? "hidden" : "inline"}`} >
								{whitelist}
							</span>
						</Link>
						<Link href="/setting" className="w-4 h-4 lg:w-6 lg:h-6 relative inline-block">
							<LuUserCircle2 className="w-full h-full text-d_black dark:text-d_white" />
							<span className={`text-white bg-red-500 px-1 rounded-full absolute -top-[10px] -right-1 text-xs ${setting <= 0 ? "hidden" : "inline"}`} >
								{setting}
							</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
