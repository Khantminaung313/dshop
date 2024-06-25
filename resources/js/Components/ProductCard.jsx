import { Link } from "@inertiajs/react";
import {
	IoStar,
	IoStarHalfOutline,
	IoStarOutline
} from "react-icons/io5";

const ProductCard = ({product}) => {
	const totalItem = product.product_datas.length;
	console.log(totalItem);
    const renderRating = (rating) => {
		switch (parseInt(rating)) {
			case 1:
				return (
					<div className="flex gap-0 lg:gap-1 text-xs lg:text-base">
						<IoStar />
						<IoStarOutline />
						<IoStarOutline />
						<IoStarOutline />
						<IoStarOutline />
					</div>
				);
			case 1.5:
				return (
					<div className="flex gap-0 lg:gap-1 text-xs lg:text-base">
						<IoStar />
						<IoStarHalfOutline />
						<IoStarOutline />
						<IoStarOutline />
						<IoStarOutline />
					</div>
				);
			case 2:
				return (
					<div className="flex gap-0 lg:gap-1 text-xs lg:text-base">
						<IoStar />
						<IoStar />
						<IoStarOutline />
						<IoStarOutline />
						<IoStarOutline />
					</div>
				);

			case 2.5:
				return (
					<div className="flex gap-0 lg:gap-1 text-xs lg:text-base">
						<IoStar />
						<IoStar />
						<IoStarHalfOutline />
						<IoStarOutline />
						<IoStarOutline />
					</div>
				);

			case 3:
				return (
					<div className="flex gap-0 lg:gap-1 text-xs lg:text-base">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStarOutline />
						<IoStarOutline />
					</div>
				);

			case 3.5:
				return (
					<div className="flex gap-0 lg:gap-1 text-xs lg:text-base">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStarHalfOutline />
						<IoStarOutline />
					</div>
				);

			case 4:
				return (
					<div className="flex gap-0 lg:gap-1 text-xs lg:text-base">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStarOutline />
					</div>
				);

			case 4.5:
				return (
					<div className="flex gap-0 lg:gap-1 text-xs lg:text-base">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStarHalfOutline />
					</div>
				);

			case 5:
				return (
					<div className="flex gap-0 lg:gap-1 text-xs lg:text-base">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStar />
					</div>
				);

			default:
				return (
					<div className="flex gap-0 lg:gap-1 text-xs lg:text-base">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStarHalfOutline />
					</div>
				);
		}
	};

	return (
		<div className="min-w-[120px] max-w-[240px] lg:max-w-[380px] lg:min-w-[280px] p-1 lg:p-2 border border-slate-400 group max-[641px]:mx-auto mb-4 text-d_black dark:text-d_white">
			<div className="max-[400px]:h-[100px] h-[160px] lg:h-[300px] w-full relative overflow-hidden">
				<img
					className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-200 ease-linear"
					src={`/storage/${product.product_datas[0].product_images[0]?.path}`}
					alt={product?.name}
				/>
				{
				product.discount && 
				<span className="absolute top-2 -left-4 lg:top-3 lg:-left-6 -rotate-45 w-[70px] lg:w-[100px] lg:py-1 text-center bg-orange-600 text-xs text-d_white">
					{product.discount}%
				</span>
				}
				{
					totalItem > 1 &&
					<div className="text-xs sm:text-sm absolute left-0 -bottom-12 z-50 w-full text-end py-1 pe-4 bg-black/60 text-white group-hover:bottom-0 d_transition">Total {totalItem} colors</div>
				}
			</div>
			<div className="py-2 lg:py-3 lg:pl-2">
				<Link className="inline-block mb-2 lg:mb-4" href={`/products/${product?.name}`}>
					<strong className="text-sm sm:text-base lg:text-lg">{product?.name}</strong>
				</Link>
				
				<div className="mb-1 lg:mb-2 text-ellipsis text-xs lg:text-base">Brand: {product?.brand?.name}</div>

				<div className="text-orange-600 lg:mb-4 flex gap-2 items-center">
					<span className="text-d_black dark:text-d_white text-xs">Rating:</span>{" "}
					{renderRating(product?.rating)}
				</div>

				<div className="flex items-center justify-between mt-2">
					<div className="flex gap-1 lg:gap-2 font-bold text-sm lg:text-lg">
						<span className="hidden lg:inline">Price:</span>
						<div className="flex gap-1 sm:gap-2">
							<del className={`${product.discount !== null ? 'inline text-red-600' : 'hidden'}`}>
								&#36;{product?.product_datas[0]?.price}
							</del>
							{
								product.discount !== null ?
								<div className="text-green-500">
								&#36;
								{Math.floor(
									product?.product_datas[0]?.price -
										product?.product_datas[0]?.price * (product.discount / 100)
								)}
								</div>:
								<div>$ {product.product_datas[0].price}</div>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCard