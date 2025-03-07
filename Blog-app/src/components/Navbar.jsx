import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {SignedIn,SignedOut,SignInButton,UserButton} from "@clerk/clerk-react";
const Navbar = () => {
   const [open , setOpen] =useState(false);



    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between'>
            {/*LOGO  */ }
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
               <Image src='/LOGOBLOG.png' alt="logo" w={35} h={35} />

                <span>SatyamBlog</span>
            </Link>
            {/*MOBILE MENU */ }
            <div className='md:hidden'>
                {/* MOBILE BUTTON */}
                <div className="cursor-pointer" onClick={()=>setOpen((prev) => !prev)}>
                    {open ? "X" : <img src="../public/icons-menu.png" className="w-13 h-13" alt=''/>}
                </div>
                {/* MOBILE LINK LIST */}
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out
                     ${open ? "-right-0" : "-right-[100%]"}`}>
                   <Link to="/">Home</Link>
                < Link to ="/">Treanding</Link>
                < Link to ="/">Most Popular</Link>
                < Link to ="/">About</Link>
                < Link to ="/">
                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white ">Login 👋</button>
                </Link>
                </div>

            </div>
            {/*DESKTOP MENU */ }
            <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
                < Link to ="/">Home</Link>
                < Link to ="/">Treanding</Link>
                < Link to ="/">Most Popular</Link>
                < Link to ="/">About</Link>
                
                <SignedOut>
                < Link to ="/login">
                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white ">
                    Login 👋
                </button>
                </Link>
                   
               </SignedOut>
                <SignedIn>
                 <UserButton />
              </SignedIn>

            </div>
            
            
            
            </div>
    )
}

export default Navbar;