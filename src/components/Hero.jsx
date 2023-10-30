import React from "react";

const Hero = () => {
  return (
    <main className="flex m-auto max-w-[1125px] items-center h-[calc(100vh-72px)]">
      <div className="flex flex-col gap-9">
        <h1 className="font-extrabold text-[100px] leading-[102px] max-w-[595px] max-h-[306px]">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="font-semibold text-[#5A5959] max-w-[400px]">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="flex gap-10">
          <button className="bg-[#D01C28] text-white font-semibold leading-5 text-[24px] px-4 py-[6px] w-[150px] h-[41px]">
            Shop Now
          </button>
          <button className="bg-transparent text-[#5A5959] font-semibold text-[24px] leading-5 border border-gray-950 px-4 py-[6px] w-[142px] h-[41px]">
            Category
          </button>
        </div>

        <div>
          <p className="font-normal text-[16px] text-[#5A5959] mb-2">
            Also Available On
          </p>
          <img src="/images/shops.png" alt="shops" />
        </div>
      </div>

      <div className="">
        <img src="/images/shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
};

export default Hero;
