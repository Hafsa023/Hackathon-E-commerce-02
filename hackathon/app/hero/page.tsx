"use client";
import Image from "next/image";
import React from "react";
import Img from "@/app/assets/Image.png";
import Men from "@/app/assets/men.png";
import Double from "@/app/assets/double.png";
import Frame2 from "@/app/assets/Frame2.png";

const Hero = () => {
  return (
    <main>
      <div className="text-center bg-gray-100 py-2">
        <h3 className="text-lg">Hello Nike App</h3>
        <p className="text-gray-600">
          Download the app to access everything Nike.<p className="text-black underline">Get Your Great</p>
        </p>
      </div>

      <div className="flex justify-center px-10">
        <Image className="w-full h-auto6" src={Img} alt="shoes banner" />
      </div>

      <div className="text-center text-black mt-16">
        <h5 className="font-semibold  text-base lg:text-xl">First Look</h5>
        <br />

        <h3 className=" text-3xl lg:text-5xl font-semibold uppercase ">
          nike air max pulse
        </h3>
        <br />
        <br />

        <p>
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse <br />
          —designed to push you past your limits and help you go to the max.
        </p>
        <br />
        <div className="space-x-5 ">
          <button className="bg-black text-white px-4 py-2 rounded-3xl">
            Notify Me
          </button>

          <button className="bg-black text-white px-4 py-2 rounded-3xl">
            Shop Air Max
          </button>
        </div>
      </div>
      <div>
        <div className="mt-20 mb-12">
          <h5 className="text-4xl font-semibold  lg:px-16">Featured</h5>
        </div>
        <div className="flex justify-center px-6">
          <Image className="w-full h-auto" src={Men} alt="" />
        </div>

        <div className="text-center text-black mt-16">
          <h3 className=" text-3xl lg:text-5xl font-semibold uppercase ">
            step into what feels good
          </h3>
          <br />
          <br />

          <p>
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <br />

          <button className="bg-black text-white px-4 py-2 rounded-3xl ">
            Find Your Shoe
          </button>
        </div>
      </div>

      <div>
        <div className="mt-20 mb-12">
          <h5 className="text-4xl font-semibold  lg:px-16">Don't Miss</h5>
        </div>
        <div className="flex justify-center px-6">
          <Image className="w-full h-auto" src={Double} alt="" />
        </div>

        <div className="text-center text-black mt-16">
          <h3 className=" text-6xl lg:text-5xl font-semibold uppercase ">
            Flight Essentials
          </h3>
          <br />
          <br />

          <p>
            Your built-to-last, all-week wears--but with style only Jordan Brand
            can deliver
          </p>
          <br />

          <button className="bg-black text-white px-4 py-2 rounded-3xl ">
            shop...!!
          </button>
        </div>

        <div className="mt-20 mb-12">
          <h5 className="text-4xl font-semibold  lg:px-16">The Essentials</h5>
        </div>
        <div className="flex justify-center px-6">
          <Image className="w-full h-auto" src={Frame2} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
