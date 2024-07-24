import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight, BsHeart } from "react-icons/bs";
import {
    IoCloseCircleOutline,
    IoStar,
    IoStarHalfOutline,
    IoStarOutline,
} from "react-icons/io5";
import Layout from "./Layout";

const SingleProduct = ({ product }) => {
    const firstProduct = product.product_datas[0];
    const [selectedSize, setSelectedSize] = useState(null);
    const [productData, setProductData] = useState({
        productCode: firstProduct.productCode,
        colorName: firstProduct.color.name,
        price: firstProduct.price,
        intro: firstProduct.intro,
        description: firstProduct.description,
        images: firstProduct.product_images,
        variation: firstProduct.product_variation,
    });
    const firstProductImage = productData.images[0].path;
    const [openDesc, setOpenDesc] = useState(false);
    const [showImage, setShowImage] = useState(firstProductImage);
    const descModal = () => {
        return (
            <div className={`fixed px-4 left-0 top-0 w-[100%] h-[100vh] bg-black/40 dark:bg-black/40 z-50 flex justify-center items-center`}>
                <div className="w-full max-w-[1000px] max-h-[80vh] bg-white dark:bg-d_dark_blue dark:text-slate-200 border border-slate-200 rounded-md shadow p-2 overflow-y-auto">
                    <div className="flex justify-between">
                        <div className="flex gap-8">
                            <div className="w-[80px] h-[100px] border border-slate-200 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover object-center"
                                    src={`/storage/` + productData.images[0].path}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h1 className="font-bold text-2xl">
                                    {product.name}
                                </h1>
                                <p className="mb-2 capitalize">{product.category.name}</p>
                                <strong>$ - {productData.price}</strong>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => setOpenDesc(false)}>
                                <IoCloseCircleOutline className="w-10 h-10 text-gray-600 dark:text-slate-200"/>
                            </button>
                        </div>
                    </div>
                    <div className="p-2 text-justify">{product.description}</div>
                </div>
            </div>
        );
    };

    const renderRating = (rating) => {
        switch (parseInt(rating)) {
            case 1:
                return (
                    <>
                        <IoStar />
                        <IoStarOutline />
                        <IoStarOutline />
                        <IoStarOutline />
                        <IoStarOutline />
                    </>
                );
            case 1.5:
                return (
                    <>
                        <IoStar />
                        <IoStarHalfOutline />
                        <IoStarOutline />
                        <IoStarOutline />
                        <IoStarOutline />
                    </>
                );
            case 2:
                return (
                    <>
                        <IoStar />
                        <IoStar />
                        <IoStarOutline />
                        <IoStarOutline />
                        <IoStarOutline />
                    </>
                );

            case 2.5:
                return (
                    <>
                        <IoStar />
                        <IoStar />
                        <IoStarHalfOutline />
                        <IoStarOutline />
                        <IoStarOutline />
                    </>
                );

            case 3:
                return (
                    <>
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarOutline />
                        <IoStarOutline />
                    </>
                );

            case 3.5:
                return (
                    <>
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalfOutline />
                        <IoStarOutline />
                    </>
                );

            case 4:
                return (
                    <>
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarOutline />
                    </>
                );

            case 4.5:
                return (
                    <>
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalfOutline />
                    </>
                );

            case 5:
                return (
                    <>
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                    </>
                );

            default:
                return (
                    <>
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalfOutline />
                    </>
                );
        }
    };

    const openModal = () => {
        setOpenDesc((prev) => true);
    };

    const changeProductData = (data) => {
        setProductData({
            ...productData,
            productCode: data.product_code,
            colorName: data.color.name,
            price: data.price,
            intro: data.intro,
            description: data.description,
            images: data.product_images,
            variation: data.product_variation,
        });
        setSelectedSize(null);
    };

    const changeImage = (path) => {
        setShowImage(path);
    };

    useEffect(() => {
      setShowImage(productData.images[0].path)
    }, [productData]);

    const nextImage = () => {
        let currentImg = productData.images.filter(img => img.path === showImage);
        if(currentImg) {
            let currentIndex = productData.images.indexOf(currentImg[0]);            
            if(currentIndex === productData.images.length - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            setShowImage(prev => productData.images[currentIndex].path);
        }
    }

    const prevImage = () => {
        let currentImg = productData.images.filter(img => img.path === showImage);
        if(currentImg) {
            let currentIndex = productData.images.indexOf(currentImg[0]);            
            if(currentIndex === 0) {
                currentIndex = productData.images.length - 1;
            } else {
                currentIndex--;
            }
            setShowImage(prev => productData.images[currentIndex].path);
        }
    }

    const handleSizeChange = (event) => {
        setSelectedSize(prev => event.target.value);
    }

    const addToCart = () => {
        console.log({'productData': productData, 'size' : selectedSize});
    }
    

    return (
        <Layout>
            {openDesc && descModal()}
            <div className="w-full md:w-[768px] lg:w-[1080px] mx-auto mt-6 lg:mt-8 relative overflow-hidden">
                <div className="product-data-box grid grid-cols-1 lg:grid-cols-2 relative overflow-y-auto h-full lg:h-[700px]">
                    <div className="hidden lg:flex gap-4 h-[700px] w-full sticky top-0 left-0">
                        <div className="hidden lg:block products-box my-auto h-[95%] flex-col w-[90px] overflow-y-auto overflow-x-hidden">
                            {productData.images.map((image) => (
                                <div
                                    className="w-[70px] h-[70px] mx-auto mb-2 border border-slate-200 hover:border-slate-800"
                                    onMouseOver={() => changeImage(image.path)}
                                    key={image.id}
                                >
                                    <img
                                        className="w-full h-full object-cover object-center"
                                        src={"/storage/" + image.path}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="aspect-[7/9] mx-auto relative max-h-[80%]">
                            <img
                                className="object-cover object-center w-full h-full"
                                src={"/storage/" + showImage}
                                alt=""
                            />
                            <div className="absolute bottom-4 right-4 inline-flex gap-4">
                                <button onClick={() => prevImage()}>
                                    {" "}
                                    <BsArrowLeft className="w-8 h-8 p-2 rounded-full bg-white text-center leading-6 text-xl border border-slate-300 active:scale-90 transition-all duration-100" />{" "}
                                </button>
                                <button onClick={() => nextImage()}>
                                    {" "}
                                    <BsArrowRight className="w-8 h-8 p-2 rounded-full bg-white text-center leading-6 text-xl border border-slate-300 active:scale-90 transition-all duration-100" />{" "}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 lg:pe-8 lg:pl-16 dark:text-white">
                        <div className="flex justify-between items-center">
                            <div>
                                <strong className="text-orange-600 text-xs capitalize">
                                    {product.about}
                                </strong>
                                <h1 className="text-4xl font-bold capitalize">
                                    {product.name}
                                </h1>
                            </div>
                            <button>
                                <BsHeart className="w-8 h-8 rounded shadow active:scale-95 bg-white dark:bg-d_dark_blue p-1 border" />
                            </button>
                        </div>
                        <p className="mb-2 text-slate-600 dark:text-slate-200">
                            Brand - {product.brand.name}{" "}
                        </p>
                        <div className="flex lg:block justify-between py-4 lg:py-0 items-center mb-4">
                            <div className="flex gap-1 text-sm lg:text-base lg:mt-4 lg:mb-8">
                                {product.rating && renderRating(product.rating)}
                            </div>
                            {product.discount ? (
                                <div className="mb-0 lg:mb-8 text-end">
                                    <strong className="flex gap-2">
                                        <del className="text-red-600">
                                            ${productData.price}
                                        </del>
                                        <span className="text-green-500">
                                            $
                                            {Math.round(
                                                productData.price -
                                                    productData.price *
                                                        (product.discount / 100)
                                            )}
                                        </span>
                                    </strong>
                                </div>
                            ) : (
                                <div className="mb-8">
                                    <strong>$ {productData.price}</strong>
                                </div>
                            )}
                        </div>
                        <div className="aspect-[7/9] max-w-[300px] sm:max-w-[400px] mx-auto p-2 relative block lg:hidden border border-slate-300 shadow mb-8">
                            <img
                                className="object-cover object-center w-full h-full"
                                src={`/storage/` + showImage}
                                alt=""
                            />
                            <div className="absolute bottom-4 right-4 inline-flex gap-4">
                                <button onClick={() => prevImage()}>
                                    {" "}
                                    <BsArrowLeft className="w-8 h-8 p-2 rounded-full bg-white text-center leading-6 text-xl active:scale-95 transition-all duration-100" />{" "}
                                </button>
                                <button onClick={() => nextImage()}>
                                    {" "}
                                    <BsArrowRight className="w-8 h-8 p-2 rounded-full bg-white text-center leading-6 text-xl active:scale-95 transition-all duration-100" />{" "}
                                </button>
                            </div>
                        </div>
                        <div className="mb-8">
                            <strong>Colors</strong>
                            <div className="flex gap-2 lg:gap-4 flex-wrap my-2">
                                {product.product_datas.map((data) => (
                                    <div
                                        className="w-[79px] h-[79px] overflow-hidden border border-slate-200 hover:border-slate-800"
                                        onClick={() => changeProductData(data)}
                                        key={data.id}
                                    >
                                        <img
                                            className="object-cover object-center w-full h-full"
                                            src={
                                                "/storage/" +
                                                data.product_images[0].path
                                            }
                                            alt=""
                                        />
                                    </div>
                                ))}
                            </div>
                            <span>{productData.colorName}</span>
                        </div>

                        <div className="mb-12">
                            <strong>Sizes</strong>
                            <div className="flex flex-wrap gap-2 lg:gap-4 my-2">
                                {productData.variation.map(item => (
                                    <div key={item.id} className="flex-grow flex-shrink-0">
                                        <input id={item.id} type="radio" name="size" value={item.size.name} onChange={handleSizeChange} className="hidden peer" />
                                        <label htmlFor={item.id} className={`peer-checked:border block py-2 peer-checked:border-slate-500 bg-white dark:bg-d_dark_blue shadow-md border border-slate-200 rounded basis-32 text-center relative overflow-hidden ${item.instock == '0' ? 'cursor-not-allowed' : 'hover:border-slate-500'}`}>
                                            {item.size.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => addToCart()} className="basis-[80px] flex-grow py-2 text-center rounded bg-black dark:bg-d_gray text-white shadow border-slate-200 hover:tracking-widest d_transition">
                                Add to cart
                            </button>
                            <button className="basis-[80px] flex-grow py-2 text-center rounded bg-white dark:bg-d_dark_blue shadow dark:shadow-d_white border border-slate-200 hover:tracking-widest d_transition">
                                Checkout
                            </button>
                        </div>

                        <div className="my-8">
                            {productData.intro}
                        </div>
                        <p
                            className="font-bold cursor-pointer mb-4"
                            onClick={() => openModal()}
                        >
                            Learn more about this product...
                        </p>
                    </div>
                </div>
                <div className="my-8 dark:text-white px-4">
                    {product.description}
                </div>
            </div>
        </Layout>
    );
};

export default SingleProduct;
