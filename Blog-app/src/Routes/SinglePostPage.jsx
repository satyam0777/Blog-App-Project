import Image from "../components/image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
         <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, maxime.</h1>
         <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written by</span>
                <Link className="text-blue-700">Satyam Prajapati</Link>
                <span>on</span>
                <Link className="text-blue-700">Web Design</Link>
                <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Odio iure veniam amet, nulla est natus!lorem10
             st natus!lorem10 heloooooo hii
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="/coding4.webp" w="600" className="rounded-2xl"/>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Laborum nihil deserunt, quos rem illo expedita non nobis nostrum natus
           id doloremque quisquam, excepturi autem, quaerat soluta eaque nam voluptas incidunt
            culpa possimus veniam rerum. Dolore?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Doloribus veniam hic sapiente corrupti assumenda totam dolore illo officiis
            atque eligendi eum, eveniet repudiandae aliquid reprehenderit? Quaerat nam hic consequuntur 
            incidunt asperiores, beatae veniam voluptas molestiae eaque adipisci modi iure, maxime eos. Magni,
             voluptate itaque. Eos sunt aspernatur voluptate corrupti doloremque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores asperiores quas expedita labore
           voluptate alias ab ut. Dolores cupiditate id expedita vitae, sunt fuga optio amet consectetur
            doloremque saepe dolorum aut totam numquam iste praesentium ea, doloribus reprehenderit maxime.
             Beatae, unde ratione. Temporibus fugit quo, aliquam eveniet vero rerum natus odit veniam tenetur 
             unde. Perferendis sequi deserunt aliquam tempore nobis accusantium cupiditate minus sed a. Fugit 
             tempora voluptatem ipsa distinctio! Accusamus incidunt labore consequuntur aspernatur illum beatae
              et minus enim debitis ipsum illo magni, vitae ad quam. Non ipsum nemo eaque molestias, quidem 
              exercitationem dolore, cupiditate, ratione cum repellat dicta.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Laborum nihil deserunt, quos rem illo expedita non nobis nostrum natus
           id doloremque quisquam, excepturi autem, quaerat soluta eaque nam voluptas incidunt
            culpa possimus veniam rerum. Dolore?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Doloribus veniam hic sapiente corrupti assumenda totam dolore illo officiis
            atque eligendi eum, eveniet repudiandae aliquid reprehenderit? Quaerat nam hic consequuntur 
            incidunt asperiores, beatae veniam voluptas molestiae eaque adipisci modi iure, maxime eos. Magni,
             voluptate itaque. Eos sunt aspernatur voluptate corrupti doloremque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores asperiores quas expedita labore
           voluptate alias ab ut. Dolores cupiditate id expedita vitae, sunt fuga optio amet consectetur
            doloremque saepe dolorum aut totam numquam iste praesentium ea, doloribus reprehenderit maxime.
             Beatae, unde ratione. Temporibus fugit quo, aliquam eveniet vero rerum natus odit veniam tenetur 
             unde. Perferendis sequi deserunt aliquam tempore nobis accusantium cupiditate minus sed a. Fugit 
             tempora voluptatem ipsa distinctio! Accusamus incidunt labore consequuntur aspernatur illum beatae
              et minus enim debitis ipsum illo magni, vitae ad quam. Non ipsum nemo eaque molestias, quidem 
              exercitationem dolore, cupiditate, ratione cum repellat dicta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Doloribus veniam hic sapiente corrupti assumenda totam dolore illo officiis
            atque eligendi eum, eveniet repudiandae aliquid reprehenderit? Quaerat nam hic consequuntur 
            incidunt asperiores, beatae veniam voluptas molestiae eaque adipisci modi iure, maxime eos. Magni,
             voluptate itaque. Eos sunt aspernatur voluptate corrupti doloremque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores asperiores quas expedita labore
           voluptate alias ab ut. Dolores cupiditate id expedita vitae, sunt fuga optio amet consectetur
            doloremque saepe dolorum aut totam numquam iste praesentium ea, doloribus reprehenderit maxime.
             Beatae, unde ratione. Temporibus fugit quo, aliquam eveniet vero rerum natus odit veniam tenetur 
             unde. Perferendis sequi deserunt aliquam tempore nobis accusantium cupiditate minus sed a. Fugit 
             tempora voluptatem ipsa distinctio! Accusamus incidunt labore consequuntur aspernatur illum beatae
              et minus enim debitis ipsum illo magni, vitae ad quam. Non ipsum nemo eaque molestias, quidem 
              exercitationem dolore, cupiditate, ratione cum repellat dicta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Doloribus veniam hic sapiente corrupti assumenda totam dolore illo officiis
            atque eligendi eum, eveniet repudiandae aliquid reprehenderit? Quaerat nam hic consequuntur 
            incidunt asperiores, beatae veniam voluptas molestiae eaque adipisci modi iure, maxime eos. Magni,
             voluptate itaque. Eos sunt aspernatur voluptate corrupti doloremque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores asperiores quas expedita labore
           voluptate alias ab ut. Dolores cupiditate id expedita vitae, sunt fuga optio amet consectetur
            doloremque saepe dolorum aut totam numquam iste praesentium ea, doloribus reprehenderit maxime.
             Beatae, unde ratione. Temporibus fugit quo, aliquam eveniet vero rerum natus odit veniam tenetur 
             unde. Perferendis sequi deserunt aliquam tempore nobis accusantium cupiditate minus sed a. Fugit 
             tempora voluptatem ipsa distinctio! Accusamus incidunt labore consequuntur aspernatur illum beatae
              et minus enim debitis ipsum illo magni, vitae ad quam. Non ipsum nemo eaque molestias, quidem 
              exercitationem dolore, cupiditate, ratione cum repellat dicta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Doloribus veniam hic sapiente corrupti assumenda totam dolore illo officiis
            atque eligendi eum, eveniet repudiandae aliquid reprehenderit? Quaerat nam hic consequuntur 
            incidunt asperiores, beatae veniam voluptas molestiae eaque adipisci modi iure, maxime eos. Magni,
             voluptate itaque. Eos sunt aspernatur voluptate corrupti doloremque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores asperiores quas expedita labore
           voluptate alias ab ut. Dolores cupiditate id expedita vitae, sunt fuga optio amet consectetur
            doloremque saepe dolorum aut totam numquam iste praesentium ea, doloribus reprehenderit maxime.
             Beatae, unde ratione. Temporibus fugit quo, aliquam eveniet vero rerum natus odit veniam tenetur 
             unde. Perferendis sequi deserunt aliquam tempore nobis accusantium cupiditate minus sed a. Fugit 
             tempora voluptatem ipsa distinctio! Accusamus incidunt labore consequuntur aspernatur illum beatae
              et minus enim debitis ipsum illo magni, vitae ad quam. Non ipsum nemo eaque molestias, quidem 
              exercitationem dolore, cupiditate, ratione cum repellat dicta.
        </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mt-1 mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">

          <div className="flex items-center gap-4">
            <Image  
               src="/satyam.jpg" 
               className="w-12 h-12 rounded-full object-cover"
                w="48" 
                h="48"
              />
              <Link className="text-blue-900">Satyam Prajapati</Link>
              </div>
              <p className="text-sm text-gray-600">He is a Computer Science student
                 passionate about Full-Stack Development, DevOps,
                  and Problem-Solving.
              </p>
              <div className="flex gap-2">
              <Link >
              <Image src="/Twitter.webp"
               className="w-10 h-10 mx-1"
               w="45" 
               h="45"
              />
              </Link>
              <Link>
              <Image src="/linkedin.webp"
              className="w-10 h-10 "
              w="48" 
              h="48"
              />
              </Link>
              </div>

          </div>
         
          
          <PostMenuActions/>
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
          <Link className="underline" to="/">
          All
          </Link>
          <Link className="underline" to="/">
          Web Design
          </Link>
          <Link className="underline" to="/">
          Development
          </Link>
          <Link className="underline" to="/">
          Database 
          </Link>
          <Link className="underline" to="/">
          Search Engine
          </Link>
          <Link className="underline" to="/">
          Data Structure
          </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search/>
        </div>
      </div>
      <Comments/>
    </div>
  )
}

export default SinglePostPage