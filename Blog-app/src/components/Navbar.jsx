import { useState } from "react";


const Navbar = () => {
   const [open , setOpen] =useState(false);



    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between'>
            {/*LOGO  */ }
            <div className="flex items-center gap-4 text-2xl font-bold">
                <img src ='../public/LOGOBLOG.png' className='w-10 h-10 cursor-pointer' alt=''/>
                <span>SatyamBlog</span>
            </div>
            {/*MOBILE MENU */ }
            <div className='md:hidden'>
                {/* MOBILE BUTTON */}
                <div className="cursor-pointer" onClick={()=>setOpen((prev) => !prev)}>
                    {open ? "X" : <img src="../public/icons-menu.png" className="w-13 h-13" alt=''/>}
                </div>
                {/* MOBILE LINK LIST */}
                <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 transition-all ease-in-out
                     ${open ? "-right-0" : "-right-[100%]"}`}>
                   menu
                </div>

            </div>
            {/*DESKTOP MENU */ }
            <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
                <a href="/">Home</a>
                <a href="/">Treanding</a>
                <a href="/">Most Popular</a>
                <a href="/">About</a>
                <a href="/">
                <button>Login 👋</button>
                </a>
            </div>
            
            
            
            </div>
    )
}

export default Navbar;