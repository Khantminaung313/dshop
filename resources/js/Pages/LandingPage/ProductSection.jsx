import ProductCard from "@/Components/ProductCard";
import { Link } from "@inertiajs/react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ProductSection = ({products}) => {
    return (
        <div className="py-2 lg:py-12 d_container">
                <div className="mb-4 border-b border-d_gray/20 py-4 lg:py-8">
                    <h2 className="text-2xl font-extrabold text-d_gray tracking-wide mb-4 flex items-end gap-2 ">
                        Popular Products
                        <Link href="/products">
                            <HiOutlineArrowNarrowRight className="w-10 hover:translate-x-2 transition-transform duration-300 ease-linear font-bold" />
                        </Link>
                    </h2>
                    <div className="w-full py-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
                        {/* {popularProducts.map((product) => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            );
                        })} */}
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
                <div className="mb-4 border-b border-d_gray/20 py-4 lg:py-8">
                    <h2 className="text-2xl font-extrabold text-d_gray tracking-wide mb-4 flex items-end gap-2 ">
                        New Products
                        <Link href="/products">
                            <HiOutlineArrowNarrowRight className="w-10 hover:translate-x-2 transition-transform duration-300 ease-linear font-bold" />
                        </Link>
                    </h2>
                    <div className="w-full py-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
                        {/* {popularProducts.map((product) => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            );
                        })} */}
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
      )
}

export default ProductSection