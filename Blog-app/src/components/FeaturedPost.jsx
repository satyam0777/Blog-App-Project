import Image from "./image";
const FeaturedPost = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
        {/* first */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
         <Image src="/blog1.jpg" className="rounded-3xl object-cover"/>
        {/* details */}
        <div className="">
           <h1>01.</h1>
        </div>

        {/* title */}
        </div>
        {/* other */}
        <div></div>
    </div>
  )
}

export default FeaturedPost