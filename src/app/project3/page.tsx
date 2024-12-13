import React from "react";

const page = () => {
  return (
    <main className="w-full h-screen bg-white">
      <header>
        <nav>
          <div className="nav1 w-full px-5 py-3 flex items-center justify-between font-medium text-lg">
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
          <div className="nav2 flex gap-10 font-medium px-5 py-3 ">
            <h1>SUN</h1>
            <h1>OPTICAL</h1>
            <h1>COLLECTION</h1>
            <h1>STUDIO</h1>
            <h1>ABOUT</h1>
            <h1>SHOP</h1>
            <h1>JOURNAL</h1>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default page;
