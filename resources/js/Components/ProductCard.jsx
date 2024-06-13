import { Link } from "@inertiajs/react";
import {
	IoCartOutline,
	IoStar,
	IoStarHalfOutline,
	IoStarOutline
} from "react-icons/io5";

const ProductCard = () => {
    const renderRating = (rating) => {
		switch (rating) {
			case 1:
				return (
					<div className="flex gap-1">
						<IoStar />
						<IoStarOutline />
						<IoStarOutline />
						<IoStarOutline />
						<IoStarOutline />
					</div>
				);
			case 1.5:
				return (
					<div className="flex gap-1">
						<IoStar />
						<IoStarHalfOutline />
						<IoStarOutline />
						<IoStarOutline />
						<IoStarOutline />
					</div>
				);
			case 2:
				return (
					<div className="flex gap-1">
						<IoStar />
						<IoStar />
						<IoStarOutline />
						<IoStarOutline />
						<IoStarOutline />
					</div>
				);

			case 2.5:
				return (
					<div className="flex gap-1">
						<IoStar />
						<IoStar />
						<IoStarHalfOutline />
						<IoStarOutline />
						<IoStarOutline />
					</div>
				);

			case 3:
				return (
					<div className="flex gap-1">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStarOutline />
						<IoStarOutline />
					</div>
				);

			case 3.5:
				return (
					<div className="flex gap-1">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStarHalfOutline />
						<IoStarOutline />
					</div>
				);

			case 4:
				return (
					<div className="flex gap-1">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStarOutline />
					</div>
				);

			case 4.5:
				return (
					<div className="flex gap-1">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStarHalfOutline />
					</div>
				);

			case 5:
				return (
					<div className="flex gap-1">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStar />
					</div>
				);

			default:
		}
	};

	return (
		<div className="max-w-[380px] min-w-[280px] p-2 border border-slate-400 group max-[641px]:mx-auto mb-4 text-d_black dark:text-d_white">
			<div className="h-[300px] w-full relative overflow-hidden">
				<img
					className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-200 ease-linear"
					// src={product.thumbnail}
					// alt={product.name}
                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-womens-shoes-b19lqD.png"
				/>
				<span className="absolute top-3 left-1 -rotate-45 px-1 bg-orange-600 text-xs text-d_white">
					{/* {product.discount}% */}
                    20%
				</span>
			</div>
			<div className="py-3 pl-2">
				{/* <Link to={`/products/${product.name}`}>
					<strong className="text-lg mb-2">{product.name}</strong>
				</Link> */}
				<Link href={`/products/`}>
					<strong className="text-lg mb-2">Air Force</strong>
				</Link>

				{/* <div className="text-d_gray mb-2">{product.intro}</div> */}
				<div className="text-d_gray mb-2">Product Intro</div>

				{/* <div className="mb-2">Color: {product.color}</div> */}
				<div className="mb-2">Color: Black & White</div>

				{/* <div className="text-orange-600 mb-4 d-flex gap-2 items-center">
					<span className="text-d_black">Rating:</span>{" "}
					{renderRating(product.rating)}
				</div> */}
				<div className="text-orange-600 mb-4 flex gap-2 items-center">
					<span className="text-d_black dark:text-d_white">Rating:</span>{" "}
					{renderRating(4.5)}
				</div>

				<div className="flex items-center justify-between pe-4">
					<div className="flex gap-2 font-bold text-lg">
						Price:
						<div className="flex gap-2">
							<div>
								&#36;
								{/* {Math.floor(
									product.price -
										product.price * (product.discount / 100)
								)} */}
                                234
							</div>
							<del className="text-red-600">
								{/* &#36;{product.price} */}
                                &#36; 250
							</del>
						</div>
					</div>
					<button className="flex gap-1 items-center p-2 hover:bg-d_light_blue rounded-sm text-sm text-white bg-d_gray font-bold tracking-wide transition-colors duration-150">
						Add to <IoCartOutline />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard