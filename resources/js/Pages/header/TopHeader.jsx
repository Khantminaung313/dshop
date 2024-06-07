import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Select from "react-select";

const options = [
  {label: 'Myanamr', value: "myanmar"},
  {label: 'English', value: "english"},
  {label: 'China', value: "china"},
]

const TopHeader = () => {
  return (
    <div className="hidden lg:block d_fluid border-b border-d_gray/30">
      <div className="d_container py-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <FaFacebook className="w-6 h-6 text-blue-700 hover:text-blue-500 cursor-pointer"/>
            <FaInstagram className="w-6 h-6 text-orange-500 hover:text-orange-300 cursor-pointer"/>
            <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-600 cursor-pointer"/>
          </div>
          <div>
            <Select options={options} defaultValue={options[0]}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader