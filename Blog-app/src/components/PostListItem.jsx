import Image from "./image";
import { Link } from "react-router-dom";
const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* image */}
        <div className="md:hidden xl:block xl:w-1/3">
          <Image src="/coding4.webp" className="rounded-2xl object-cover " w="735"/>  
        </div>
        {/* details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className="text-4xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quo.
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written by</span>
                <Link className="text-blue-700">Satyam Prajapati</Link>
                <span>on</span>
                <Link className="text-blue-700">Web Design</Link>
                <span>2 days ago</span>
            </div>
            <p >
                Lorem, ipsum dolor sit amet consectetur adipisicing 
                elit. Asperiores mollitia expedita, maxime dignissimos,
                 eius quo error distinctio cum minus alias sapiente dolore nostrum unde sequi?
            </p>
            <Link to="/test" className="underline text-blue-800 text-sm">Read More</Link>
        </div>
         
       
    </div>
  )
}

export default PostListItem