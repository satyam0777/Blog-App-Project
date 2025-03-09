import Image from "./image"
const Comment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className="flex items-center gap-4">
           <Image src ="/satyam.jpg" className="w=10 h=10 rounded-full object-cover" w="40"/>
             <span className="font-medium">O p bro </span>
             <span className="text-sm text-gray-500">2 days ago </span>
        </div>
        <div className="mt-4">
           <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Officiis cum accusamus distinctio laborum, harum in sunt ut esse nostrum quasi!
           </p>
        </div>
    </div>
  )
}

export default Comment