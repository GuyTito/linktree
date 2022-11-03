import zuri from "../assets/zuri.png";
import I4G from "../assets/I4G.png";

export default function Footer() {
  
  
  return (
    <>
      <footer>
        <div className=" py-12 border-t hidden sm:flex justify-between items-center  pt-8 max-w-[1216px] mx-auto px-4">
          <img src={zuri} alt="zuri internship logo" />
          <span className="text-md text-gray-500">HNG Internship 9 Frontend Task</span>
          <img src={I4G} alt="I4G logo" />
        </div>

        <div className="py-4 flex flex-col text-center gap-5 sm:hidden">
          <span className="text-md text-gray-500">HNG Internship 9 Frontend Task</span>
          <div className="flex justify-between px-4">
            <img src={zuri} className="w-24 object-contain" alt="zuri internship logo" />
            <img src={I4G} className="w-24 object-contain" alt="I4G logo" />
          </div>
        </div>
      </footer>
    </>
  )
}