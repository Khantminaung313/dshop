import { usePage } from "@inertiajs/react"
import Header from "./Header"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import TopHeader from "./TopHeader"

const HeaderSection = () => {
  const {genderList, categories} = usePage().props;
  return (
    <div>
        <div className="sticky w-full left-0 top-0 z-40 bg-d_white dark:bg-d_dark_blue dark:text-d_white d_transition">
				<TopHeader />
				<Header />
				<Nav categories={categories} genderList={genderList} />
				<MobileNav categories={categories} genderList={genderList}/>
			</div>
    </div>
  )
}

export default HeaderSection