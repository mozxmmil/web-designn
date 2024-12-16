import Slider from "@/components/Slider";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="w-full h-screen bg-white">
      <header>
        <nav>
          <div className="nav1 w-full px-5 py-3 flex items-center justify-between font-medium text-lg  h-12">
            <div className="left flex items-center ">
              <div className="circle bg-black h-5 w-5 rounded-full "></div>
              <div className="circle bg-black h-5 w-5 rounded-full"></div>
            </div>
            <div className="right flex items-center gap-10">
              <h1>
                EN <span className="text-zinc-600 ml-3">RN</span>
              </h1>
              <h1>Country : Russia</h1>
              <h1>Profile</h1>
              <h1>WhishList (2)</h1>
            </div>
          </div>
          <div className="nav2 flex gap-10 h-12 w-full font-medium px-5 py-3 flex-wrap ">
            <h1>SUN</h1>
            <h1>OPTICAL</h1>
            <h1>COLLECTION</h1>
            <h1>STUDIO</h1>
            <h1>ABOUT</h1>
            <h1>SHOP</h1>
            <h1>JOURNAL</h1>
          </div>
        </nav>
        <section className="w-full h-[calc(100vh-90px)]  ">
          <Slider/>
          <div className="h-[55%] w-full bg-violet-400 relative">
              <Image
              src={"https://plus.unsplash.com/premium_photo-1727942419701-0428352a21e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"} alt="no" fill className="object-cover object-[0px_-300px]" quality={100}/>
          </div>
        </section>
      </header>
    </main>
  );
};

export default page;
