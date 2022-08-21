import React from 'react';

// import parallax
import {Parallax} from "react-parallax";

//import img
import Image from "../assets/img/hero/guy.png";


// import components
import Header from "./Header";

const Hero = () => {
  return (
  <section className="min-h-[618px] lg:m-h-[815px]
  pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top">
    <div className="container mx-auto">
        {/* header */}
        <Header />
        <div>
            <div>
                <h1 className="h1 mb-3 lg:mb-[22px]">
                Yoga to <br /> Release Stress
                </h1>
                <p className="mb-6 lg:mb-12 max-w-[480px]
                lg:text-lg">
                Yoga is a way of life, rather than a chore. Counteract the
              stresses of modern life by becoming more mindful and
              compassionate.
                </p >
                {/* btn group */}
                <div className="mb-12 space-x-3">
                    <button className="btn btn-sm lg:btn-lg btn-orange">Get start</button>
                    <button className="btn btn-sm lg:btn-lg text-heading
                    bg-transparent border border-stroke-1 px-4 hover:bg-stroke-3
                    transation"> learn more ...</button>
                </div>
            </div>
            {/* img */}
            <Parallax
                  className='w-full h-full p-28 lg:p-16'
                  bgImage={Image}
                  bgImageAlt='guy'
                  strength={200}
                ></Parallax>
            <div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        </div>

    </div>
  </section>
  )
}

export default Hero