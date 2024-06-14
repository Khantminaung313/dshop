
import About from "./LandingPage/About";
import Hero from "./LandingPage/Hero";
import ProductSection from "./LandingPage/ProductSection";
import Testimonial from "./LandingPage/Testimonial";
import Layout from "./Layout";

const Home = ({sliders, products, testimonials, promotion}) => {
    return (
            <Layout>
                    <Hero sliders={sliders} />
                    <ProductSection products={products}/>
                    <Testimonial testimonials={testimonials} promotion={promotion}/>
                    <About />
            </Layout>
    );
};

export default Home;
