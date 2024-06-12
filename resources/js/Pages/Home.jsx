import Hero from "./LandingPage/Hero";
import Layout from "./Layout";

const Home = ({sliders}) => {
    return (
            <Layout>
                    <Hero sliders={sliders} />
            </Layout>
    );
};

export default Home;
