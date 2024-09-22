import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import bannerImg from "/images/banner.png";

const Banner = () => {
  return (
    <div className="bg-primaryBG py-12 xl:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        <div className="md:w-1/2">
          <img
            src={bannerImg}
            alt=""
            className="mx-auto h-full md:h-[562px] md:w-[442px] w-full"
          />
        </div>

        <div className="md:w-1/2 w-full">
          <h1 className="text-5xl  mb-5 uppercase font-semibold">
            Latest Collections{" "}
          </h1>

          <p className="text-xl mb-7">
            Welcome to our one-stop destination where you can explore and shop a
            wide variety of collections from numerous top brands. Whether you're
            looking for the latest fashion trends, timeless classics, or unique,
            limited-edition items, we've got something for everyone. Our
            platform brings together an extensive range of products, including
            clothing, footwear, accessories, and more, all designed to cater to
            your personal style and preferences.
          </p>

          <button className="bg-Black hover:bg-orange-500 px-6 py-2 text-white font-semibold flex gap-2 items-center rounded-sm">
            <FaShoppingBag className="inline-flex" /> Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
