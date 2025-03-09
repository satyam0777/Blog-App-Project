import { Link } from "react-router-dom";
import Image from "./image";
const FeaturedPost = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
        {/* first */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
         <Image src="/blog1.jpg" className="rounded-3xl object-cover"/>
        {/* details */}
        <div className="flex items-center gap-4">
           <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>

        {/* title */}
        <Link className="text-xl lg:text-3xl font-semibold lg:font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam unde,
        </Link>
        </div>
        {/* other */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
        <Image 
           src="/coding1.webp" 
           className="rounded-3xl object-cover w-1/3 aspect-video"
        />
        {/* details and title */}
        <div className="w-2/3">
        {/* details */}
        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
          <h1 className="font-semibold">02.</h1>
          <Link className="text-blue-800">Web Design</Link>
          <span className="text-gray-500 text-sm">2 days ago</span>
        </div>
        {/* title */}
        <Link to="/test" className="text-base sm:lext-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut?</Link>
        </div>
        </div>
         {/* third */}
         <div className="lg:h-1/3 flex justify-between gap-4">
        <Image 
           src="/coding1.webp" 
           className="rounded-3xl object-cover w-1/3 aspect-video"
        />
        {/* details and title */}
        <div className="w-2/3">
        {/* details */}
        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
          <h1 className="font-semibold">02.</h1>
          <Link className="text-blue-800">Web Design</Link>
          <span className="text-gray-500 text-sm">2 days ago</span>
        </div>
        {/* title */}
        <Link to="/test" className="text-base sm:lext-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut?</Link>
        </div>
        </div>
          {/* fourth */}
          <div className="lg:h-1/3 flex justify-between gap-4">
        <Image 
           src="/coding1.webp" 
           className="rounded-3xl object-cover w-1/3 aspect-video"
        />
        {/* details and title */}
        <div className="w-2/3">
        {/* details */}
        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
          <h1 className="font-semibold">02.</h1>
          <Link className="text-blue-800">Web Design</Link>
          <span className="text-gray-500 text-sm">2 days ago</span>
        </div>
        {/* title */}
        <Link to="/test" className="text-base sm:lext-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut?</Link>
        </div>
        </div>
        </div>
    </div>
  )
}

export default FeaturedPost