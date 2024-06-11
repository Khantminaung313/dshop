import Header from "./Header"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import TopHeader from "./TopHeader"

const HeaderSection = ({categories, genderList}) => {
  return (
    <div>
        <div className="fixed w-full left-0 top-0 z-40 bg-d_white dark:bg-d_dark_blue dark:text-d_white d_transition">
				<TopHeader />
				<Header />
				<Nav categories={categories} genderList={genderList} />
				<MobileNav categories={categories} genderList={genderList}/>
			</div>
    </div>
  )
}

export default HeaderSection