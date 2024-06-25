import { Link } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Hero = ({ sliders }) => {
    const settings = {
        infinite: sliders.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    };

    return (
        <div className="d_container font-kanit mt-4 overflow-hidden">
            <Slider {...settings}>
                {sliders.map((slide, index) => {
                    return (
                        <div
                            key={index}
                            className="relative w-full lg:h-[700px] h-[50%] rounded-lg overflow-hidden"
                            style={{ backgroundImage: "storage" }}
                        >
                            <div className="w-full h-full">
                              <img
                                  className="w-full h-full object-cover object-center"
                                  src={`storage/${slide.image}`}
                                  alt={slide.title}
                              />
                            </div>
                            <div className="absolute top-[50%] translate-y-[-50%] left-4 sm:left-8 lg:left-12">
                                <span
                                    className="text-[8px] uppercase mb-2 lg:mb-4 text-d_blue"
                                    style={{ color: slide.sub_title_color }}
                                >
                                    {slide.sub_title}
                                </span>
                                <h2
                                    className="text-base sm:text-2xl lg:text-4xl font-semibold uppercase mb-2 lg:mb-4 text-d_blue"
                                    style={{ color: slide.title_color }}
                                >
                                    {slide.title}
                                </h2>
                                <p className="text-[10px] md:text-sm lg:text-base max-w-[50vw] sm:max-w-[450px] mb-2 lg:mb-4" style={{ color: slide.intro_color }}>
                                    {/* {slide.intro} */}
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas itaque aperiam dignissimos perferendis non natus
                                </p>
                                <Link
                                    className="text-[10px] md:text-sm lg:text-base text-d_white hover:underline"
                                    href={slide.link}
                                    style={{ color: slide.link_color }}
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default Hero;
