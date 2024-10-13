import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}

      <div className="flex items-center justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Building scalable solutions for visionaries
          </div>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Empowering Visionaries with Tailored Digital Solutions"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            <div className="relative group">
              <span className="inline-block">
                Hi! I&apos;m{' '}
               Uzair,
                a full stack developer based in Ireland.
              </span>
            </div>
          </div>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
