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
    const [productData, setProductData] = useState({
        productCode: firstProduct.productCode,
        colorName: firstProduct.color.name,
        price: firstProduct.price,
        intro: firstProduct.intro,
        description: firstProduct.description,
        images: firstProduct.product_images,
        variation: firstProduct.productVariation,
    });
    const firstProductImage = "/storage/" + productData.images[0].path;
    const [openDesc, setOpenDesc] = useState(false);
    const [showImage, setShowImage] = useState(firstProductImage);
    console.log(product);
    const descModal = () => {
        return (
            <div
                className={`fixed left-0 top-0 w-[100%] h-[100vh] bg-white/50 z-50 flex justify-center items-center`}
            >
                <div className="w-full max-w-[1000px] max-h-[80vh] bg-white border border-slate-200 rounded-md shadow p-2 overflow-y-auto">
                    <div className="flex justify-between">
                        <div className="flex gap-8">
                            <div className="w-[80px] h-[100px] border border-slate-200 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover object-center"
                                    src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1280"
                                    alt=""
                                />
                            </div>
                            <div>
                                <h1 className="font-bold text-2xl">
                                    Air Force
                                </h1>
                                <p className="mb-2">Men's Air Force</p>
                                <strong>$ 150</strong>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => setOpenDesc(false)}>
                                <IoCloseCircleOutline className="w-10 h-10 text-gray-600" />
                            </button>
                        </div>
                    </div>
                    <div className="p-2 text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quam dolorem natus odit? Consectetur beatae
                        accusamus, quas maxime sit nobis magnam iure nemo
                        corrupti fugiat eligendi temporibus autem at voluptatum
                        libero ab ipsum expedita a voluptates velit deleniti hic
                        ex. Voluptatem dolorum optio culpa et, inventore
                        incidunt quos repellat deserunt eaque debitis autem
                        saepe, dolorem, beatae qui modi velit assumenda suscipit
                        nostrum? Nisi minima corporis reiciendis laboriosam
                        officia maxime impedit accusamus accusantium veniam!
                        Maiores aliquid molestias sit esse earum officiis vero
                        dolores, commodi, veniam rem dolorem sint temporibus,
                        inventore laboriosam quidem doloribus at impedit
                        consequatur ea. Nam accusamus consequuntur ducimus eum.
                    </div>
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

    const openModal = (product) => {
        setOpenDesc((prev) => true);
        console.log(product);
    };

    const changeProductData = (data) => {
        setProductData({
            ...productData,
            productCode: data.productCode,
            colorName: data.color.name,
            price: data.price,
            intro: data.intro,
            description: data.description,
            images: data.product_images,
            variation: data.productVariation,
        });
    };

    const changeImage = (path) => {
        setShowImage("/storage/" + path);
    };

    useEffect(() => {
      setShowImage("/storage/" + productData.images[0].path)
    }, [productData]);
    

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
                                src={showImage}
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
                    <div className="px-4 lg:pe-8 lg:pl-16">
                        <div className="flex justify-between items-center">
                            <div>
                                <strong className="text-orange-600 text-xs">
                                    {product.about}
                                </strong>
                                <h1 className="text-4xl font-bold capitalize">
                                    {product.name}
                                </h1>
                            </div>
                            <button>
                                <BsHeart className="w-10 h-10 rounded shadow active:scale-95 bg-white p-2 border" />
                            </button>
                        </div>
                        <p className="mb-2 text-slate-600">
                            Brand - {product.brand.name}{" "}
                        </p>
                        <div className="flex gap-0 lg:gap-1 text-xs lg:text-base mt-4 mb-8">
                            {product.rating && renderRating(product.rating)}
                        </div>
                        {product.discount ? (
                            <div className="mb-8">
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
                        <div className="aspect-[3/4] max-w-[400px] mx-auto p-2 relative block lg:hidden">
                            <img
                                className="object-cover object-center w-full h-full"
                                src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1280"
                                alt=""
                            />
                            <div className="absolute bottom-4 right-4 inline-flex gap-4">
                                <button>
                                    {" "}
                                    <BsArrowLeft className="w-8 h-8 p-2 rounded-full bg-white text-center leading-6 text-xl active:scale-95 transition-all duration-100" />{" "}
                                </button>
                                <button>
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
                                <button className="bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0">
                                    3.8
                                </button>
                                <button className="bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0">
                                    3.8
                                </button>
                                <button className="bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0">
                                    3.8
                                </button>
                                <button className="bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0">
                                    3.8
                                </button>
                                <button className="bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0">
                                    3.8
                                </button>
                                <button className="bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0">
                                    3.8
                                </button>
                                <button className="bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0">
                                    3.8
                                </button>
                                <button className="bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0">
                                    3.8
                                </button>
                                <button className="bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0">
                                    3.8
                                </button>
                                <button className="bg-white shadow-md border border-slate-200 hover:border-slate-700 rounded basis-32 text-center flex-grow py-2 flex-shrink-0">
                                    3.8
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="basis-[80px] flex-grow py-2 text-center rounded bg-black dark:bg-d_gray text-white shadow border-slate-200 hover:tracking-widest d_transition">
                                Add to cart
                            </button>
                            <button className="basis-[80px] flex-grow py-2 text-center rounded bg-white shadow border border-slate-200 hover:tracking-widest d_transition">
                                Checkout
                            </button>
                        </div>

                        <div className="my-8">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Sit tempora laborum porro, iure assumenda
                            eaque amet nemo voluptates labore similique
                            asperiores libero incidunt. Corporis ipsam at
                            veritatis totam error cupiditate adipisci nesciunt
                            voluptatibus,
                        </div>
                        <p
                            className="font-bold cursor-pointer mb-4"
                            onClick={() => openModal("10")}
                        >
                            Learn more about this product...
                        </p>
                    </div>
                </div>
                <div className="my-8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem alias in ipsam, ratione nobis commodi, eum unde
                    ullam odio esse consectetur dolorem fuga aut voluptatibus
                    corrupti tempore, corporis voluptas aliquam. Quibusdam
                    facere porro tempore odit quod! Pariatur praesentium
                    obcaecati a quidem doloribus magni repellendus minus rerum
                    magnam dolores ut, sit consequatur dignissimos atque
                    possimus dicta quaerat perspiciatis ipsum officiis? Sapiente
                    excepturi error, tenetur quia dignissimos veniam autem
                    delectus nesciunt molestias, dicta cum optio iure corporis
                    iste beatae amet quis ducimus possimus necessitatibus soluta
                    suscipit tempora non. Ea, suscipit animi eius inventore
                    pariatur dolorem quam obcaecati assumenda ab laudantium at
                    nisi!
                </div>
            </div>
        </Layout>
    );
};

export default SingleProduct;
