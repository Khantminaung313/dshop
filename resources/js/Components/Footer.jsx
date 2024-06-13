import { Link } from "@inertiajs/react";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
    return (
		<div className="d_fluid bg-d_gray/10 pb-12 lg:pb-0 border-t border-d_gray/20">
			<div className="d_container w-full py-8 grid grid-cols-2 lg:grid-cols-4 bg-d_white dark:bg-d_dark_blue dark:text-d_gray">
				<div className="pl-2 lg:pl-4">
					<h6 className="text-xl font-semibold mb-3 text-d_gray dark:text-d_white">
						D Shop
					</h6>
					<ul>
						<li className="text-sm hover:text-d_gray dark:hover:text-d_white lg:text-base mb-2">
							<a href="tel:+09-123456789">Phone: 09-123456789</a>
						</li>
						<li className=" text-sm hover:text-d_gray dark:hover:text-d_white lg:text-base mb-2">
							<a href="mailto:dshop@gmail.com">
								Email: dshop@gmail.com
							</a>
						</li>
						<li className=" text-sm hover:text-d_gray dark:hover:text-d_white lg:text-base mb-2">
							<Link to="/">Address: Yangon, Myanmar</Link>
						</li>
					</ul>
				</div>
				<div className="pl-2 lg:pl-4">
					<h6 className="text-xl font-semibold mb-3 text-d_gray dark:text-d_white">
						Pages
					</h6>
					<ul>
						<li className=" text-sm hover:text-d_gray dark:hover:text-d_white lg:text-base mb-2">
							<Link to="/">Home</Link>
						</li>
						<li className="  text-sm hover:text-d_gray dark:hover:text-d_white lg:text-base mb-2">
							<Link to="/">Products</Link>
						</li>
						<li className="  text-sm hover:text-d_gray dark:hover:text-d_white lg:text-base mb-2">
							<Link to="/">About</Link>
						</li>
						<li className="  text-sm hover:text-d_gray dark:hover:text-d_white lg:text-base mb-2">
							<Link to="/">Contact</Link>
						</li>
					</ul>
				</div>
				<div className="pl-2 lg:pl-4">
					<h6 className="text-xl font-semibold mb-3 text-d_gray dark:text-d_white">
						Products
					</h6>
					<ul>
						<li className="  text-sm hover:text-d_gray dark:hover:text-d_white lg:text-base mb-2">
							<Link to="/">Shorts</Link>
						</li>
						<li className="  text-sm hover:text-d_gray dark:hover:text-d_white lg:text-base mb-2">
							<Link to="/">Pants</Link>
						</li>
						<li className="  text-sm hover:text-d_gray dark:hover:text-d_white lg:text-base mb-2">
							<Link to="/">Shirt</Link>
						</li>
						<li className="  text-sm hover:text-d_gray dark:hover:text-d_white lg:text-base mb-2">
							<Link to="/">Sports</Link>
						</li>
					</ul>
				</div>
				<div className="pl-2 lg:pl-4">
					<h6 className="text-xl font-semibold mb-3 text-d_gray dark:text-d_white">
						Get email for new items
					</h6>
					<div className="w-full max-w-[350px] rounded-md overflow-hidden relative">
						<input
							className="w-full pl-2 pr-10 lg:pr-16 py-2 text-xs lg:text-base  border-1 border-d_gray rounded-md focus:border-d_gray active:border-d_gray focus:outline-none"
							type="email"
							placeholder="Enter your email address"
						/>
						<Link
							className="px-3 h-full bg-d_gray hover:bg-d_light_blue rounded-sm absolute top-[50%] right-0 translate-y-[-50%] transition-colors duration-200 ease-linear flex items-center"
							href="/"
						>
							<IoIosSend className="text-xl" />
						</Link>
					</div>
				</div>
			</div>
            <p className="w-full py-2 text-center border-t border-d_gray/20">All Right Reserved. Copyright &copy; D Shop.</p>
		</div>
	);
}

export default Footer