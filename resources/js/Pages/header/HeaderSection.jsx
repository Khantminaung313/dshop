import Header from "./Header"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import TopHeader from "./TopHeader"

const HeaderSection = () => {
  return (
    <div className="w-full bg-d_white dark:bg-d_dark_blue dark:text-d_white d_transition">
				<TopHeader />
				<Header />
				<Nav />
				<MobileNav/>
    </div>
  )
}

export default HeaderSection