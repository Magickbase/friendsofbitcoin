import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import PixelArrow from "./pixelarticons_arrow.svg";
import Shuriken from "./shuriken.svg";
import Chocolate from "./chocolate.svg";
import Horseman from "./horseman.svg";
import Cactus from "./cactus.svg";
import RgbBadge from "./rgb.svg";
import City from "./city.svg";
import DancingCyanGuy from "./dancing_cyan_guy.gif";
import Cowboy from "./cowboy.gif";
import Brussels from "./brussels.gif";
import RgbppBadge from "./rgbpp.png";
import BlueGuy from "./blue_guy.png";
import GreenGuy from "./green_guy.png";
import RedGuy from "./red_guy.png";
import BtcImage from "./btc.png";
import NashvilleBtcImage from "./nashville_btc.png";
import BrusselsBtcImage from "./brussels_btc.png";
import RainbowImage from "./rainbow.png";
import PhoneImage from "./phone.png";
import Head from "next/head";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


enum Page {
  Home,
  Nashville,
  Brussels,
}

const HomeBackground: React.FC = () => (
  <div className="z-[-1] top-0 left-0 w-[100vw] h-[100vh] fixed overflow-hidden">
    <div className="z-[-1] fixed top-0 bottom-0 left-0 w-[50vw] bg-primary" />
    <div className="z-[-1] fixed top-0 bottom-0 right-0 w-[50vw] bg-secondary" />
    <div className="top-0 left-0 w-[100vw] h-[100vh] fixed">
      <div className="relative w-full h-full">
        <Chocolate className="w-24 fixed top-1/2 left-1/2 transform translate-x-[46px] -translate-y-[307px]" />
        <Chocolate className="w-14 fixed top-1/2 left-1/2 transform translate-x-[210px] -translate-y-[180px]" />
        <Chocolate className="w-9 fixed top-1/2 left-1/2 transform translate-x-[190px] -translate-y-[140px]" />

        <Image
          height={240}
          width={240}
          src={RainbowImage.src}
          alt="rainbow picture"
          className="fixed top-1/2 left-1/2 transform -translate-x-[170px] -translate-y-[440px] rotate-[-16deg]"
        />

        <Image
          height={140}
          width={140}
          src={RainbowImage.src}
          alt="rainbow picture"
          className="fixed top-1/2 left-1/2 transform translate-x-[90px] -translate-y-[220px] rotate-[170deg]"
        />

        <Image
          height={550}
          width={448}
          src={BtcImage.src}
          alt="btc picture"
          className="fixed h-[550px] w-[448px] object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%]"
        />
        <RgbBadge className="w-20 fixed top-1/2 left-1/2 transform -translate-x-[175px] -translate-y-[256px] drop-shadow-[17px_19px_10px_#2A01014D]" />
        <Shuriken className="w-40 text-[#FFEEDD] fixed top-1/2 left-1/2 transform -translate-x-[280px] -translate-y-60" />
        <Shuriken className="w-8 text-[#FFEEDD] fixed top-1/2 left-1/2 transform -translate-x-44 translate-y-[120px]" />
        <Shuriken className="w-16 text-[#FFEEDD] fixed top-1/2 left-1/2 transform -translate-x-[160px] translate-y-[132px]" />

        <Image
          height={88}
          width={200}
          src={RgbppBadge.src}
          alt="rgb++ picture"
          className="fixed top-1/2 left-1/2 transform translate-x-[60px] -translate-y-[236px]"
        />

        <Image
          height={180}
          width={150}
          src={GreenGuy.src}
          alt="green guy picture"
          className="fixed top-1/2 left-1/2 transform translate-x-14 translate-y-1"
        />

        <Image
          height={77}
          width={55}
          src={PhoneImage.src}
          alt="mobile phone picture"
          className="fixed top-1/2 left-1/2 transform -translate-x-[156px] translate-y-[20px]"
        />

        <Image
          height={77}
          width={55}
          src={PhoneImage.src}
          alt="mobile phone picture"
          className="fixed top-1/2 left-1/2 transform -translate-x-[202px] translate-y-[69px]"
        />

        <Image
          height={150}
          width={107}
          src={PhoneImage.src}
          alt="mobile phone picture"
          className="fixed top-1/2 left-1/2 transform -translate-x-[240px]"
        />
      </div>
    </div>

    <>
      <Image
        height={350}
        width={300}
        src={BlueGuy.src}
        alt="blue guy"
        className="fixed h-[24vh] w-[32vh] bottom-0 left-1/2 transform -translate-x-[100%]"
      />

      <Image
        height={350}
        width={300}
        src={RedGuy.src}
        alt="red guy"
        className="fixed h-[24vh] w-[32vh] bottom-0 left-1/2"
      />

      <Image
        height={405}
        width={300}
        src={DancingCyanGuy.src}
        alt="dancing cyan guy.gif"
        className="fixed h-[40vh] w-[30vh] -bottom-[8vh] left-1/2 transform -translate-x-1/2"
      />
    </>
  </div>
);

const HomePage: React.FC = () => (
  <div className="h-screen w-screen relative">
    <HomeBackground />
    <div className="h-full w-full container mx-auto">
      <div className="px-2 sm:px-4 lg:px-10 text-center w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[100%]">
        <span className="text-center font-deltarune text-7xl sm:text-8xl lg:text-9xl text-branding text-stroke drop-shadow-[6px_25px_12px_rgba(0,0,0,0.25)]">
          Friends of Bitcoin
        </span>
      </div>
      <div className="px-2 sm:px-4 lg:px-10 w-full flex fixed bottom-[30vh] left-1/2 transform -translate-x-1/2">
        <a
          className="btn-pixel bg-[#A3FFCD] text-[#FF00A8]"
          href="https://lu.ma/0bwudqyt"
          target="_blank"
        >
          <PixelArrow className="w-6 lg:w-8 mr-2" />
          Nashville
        </a>

        <a
          className="btn-pixel bg-[#FF00E5] text-[#00FFD1] ml-auto"
          href="https://lu.ma/yb8kvcbx"
          target="_blank"
        >
          Brussels
          <PixelArrow className="rotate-180 w-6 lg:w-8 ml-2" />
        </a>
      </div>
    </div>
  </div>
);

const NashvillePage: React.FC<{ onPageChange: Function }> = ({
  onPageChange,
}) => (
  <div className="w-screen h-screen bg-primary">
    <div>
      <Cactus className="w-60 fixed left-[200px] bottom-0" />
      <Cactus className="w-32 fixed bottom-0 left-1/2 transform -translate-x-1/2" />
      <Horseman className="w-56 fixed bottom-0 left-1/2 transform translate-x-[200px]" />

      <Image
        height={120}
        width={120}
        src={RainbowImage.src}
        alt="rainbow picture"
        className="fixed top-[-58px] left-[365px] rotate-[90deg]"
      />
      <Shuriken className="w-[150px] text-[#FFEEDD] fixed top-8 right-12" />
      <Shuriken className="w-[104px] text-[#FFEEDD] fixed top-0 left-[400px]" />
      <Shuriken className="w-16 text-[#FFEEDD] right-[168px] fixed top-1/2 transform -translate-y-1/2" />

      <div className="flex flex-col container mx-auto pt-8 items-start">
        <span className="font-deltarune text-branding text-stroke text-3xl">
          Friends of Bitcoin
        </span>
        <span className="font-arbutus text-9xl text-stroke text-[#31FFE6]">
          Nashville
        </span>
      </div>

      <Image
        width={330}
        height={400}
        src={NashvilleBtcImage.src}
        alt="btc picture"
        className="fixed left-0 bottom-0"
      />
      <Image
        height={560}
        width={300}
        src={Cowboy.src}
        alt="cowboy.gif"
        className="fixed bottom-[-100px] left-0"
      />
    </div>
    <div className="ml-72 mr-[20vw] flex flex-col items-start gap-1">
      <div className="z-10 px-7 py-4 bg-black rounded-lg text-white">
        <div className="font-deltarune text-primary text-lg mb-1">Overview</div>
        <div className="font-arbutus">Half day event with a party 💫</div>
      </div>
      <div className="z-10 px-7 py-4 bg-black rounded-lg text-white">
        <div className="font-deltarune text-primary text-lg mb-1">About</div>
        <div className="font-arbutus">
          <p className="mb-3">
            Friends of Bitcoin is inspired by building on{" "}
            <span className="text-[#FFA800]">Bitcoin</span>. The revolution
            doesn&apos;t stop at <span className="underline">HODLing</span>.
          </p>

          <p className="mb-3">
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0BFFD3] via-[#FF00F5] to-[#24FF00]">
              Friends of Bitcoin
            </span>
            - the builders and innovators envisioning the future of Bitcoin as a
            layered chain utilized by all.
          </p>

          <p className="text-xs text-[#4CDFFF]">Agenda coming soon.</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="z-10 px-7 py-4 bg-black rounded-lg text-white">
          <div className="font-deltarune text-primary text-lg mb-1">
            Partners
          </div>
          <div className="font-gothic">Become a friend 😘</div>
          <a
            className="font-arbutus text-[#FF007A] underline text-xs"
            href="mailto:info@friendsofbitcoin.xyz"
          >
            Info@friendsofbitcoin.xyz
          </a>
        </div>

        <a
          className="z-10 btn-pixel bg-[#A3FFCD] items-center"
          href="https://lu.ma/0bwudqyt"
          target="_blank"
        >
          <span className="font-arbutus text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF00A8] via-[#AB3FFF] to-[#00B2FF]">
            REGISTER
          </span>
          <PixelArrow className="rotate-[135deg] w-12 ml-2" />
        </a>
      </div>
    </div>
    <div className="px-10 w-full flex fixed top-1/2 left-1/2 transform -translate-x-1/2 translate-y-4">
      <button
        className="btn-pixel bg-[#A3FFCD] text-[#FF00A8] ml-auto"
        onClick={() => onPageChange(Page.Home)}
      >
        Back
        <PixelArrow className="rotate-180 w-8 ml-2" />
      </button>
    </div>
  </div>
);

const BrusselsPage: React.FC<{ onPageChange: Function }> = ({
  onPageChange,
}) => (
  <div className="w-screen h-screen bg-secondary">
    <>
      <City className="w-96 fixed bottom-0 left-1/2 transform -translate-x-full" />
      <City className="w-96 fixed bottom-0 left-1/2 transform translate-x-[5%] scale-x-[-1]" />

      <Chocolate className="w-24 rotate-[32deg] fixed top-16 left-[16vw]" />

      <Image
        height={500}
        width={400}
        src={BrusselsBtcImage.src}
        alt="btc picture"
        className="fixed bottom-0 right-0"
      />
      <Image
        height={560}
        width={300}
        src={Brussels.src}
        alt="brussels.gif"
        className="fixed bottom-[-60px] right-0"
      />
    </>
    <div className="relative ml-[30vw] pt-10">
      <Image
        height={180}
        width={180}
        src={RainbowImage.src}
        alt="rainbow picture"
        className="fixed top-[-100px] left-[648px]"
      />
      <Chocolate className="w-32 fixed top-4 left-[630px]" />
      <div className="flex flex-col items-start mb-10">
        <span className="font-deltarune text-branding text-stroke text-3xl mb-[-40px] ml-[340px]">
          Friends of Bitcoin
        </span>
        <span className="font-gothic text-[144px] leading-none text-stroke text-primary">
          Brussels
        </span>
      </div>

      <div className="mr-[20vw] z-10 flex flex-col items-start gap-1">
        <div className="relative z-10 px-7 py-4 bg-black rounded-[44px] text-white">
          <div className="font-deltarune text-secondary text-lg mb-1">
            Overview
          </div>
          <div className="font-arbutus">Half day event with a party 💫</div>
          <Chocolate className="w-20 rotate-[135deg] fixed top-[-10px] right-[-100px]" />
        </div>
        <div className="relative z-10 px-7 py-4 bg-black rounded-[44px] text-white">
          <div className="font-deltarune text-secondary text-lg mb-1">
            About
          </div>
          <div className="font-arbutus">
            <p className="mb-3">
              Friends of Bitcoin is inspired by building on{" "}
              <span className="text-[#FFA800]">Bitcoin</span>. The revolution
              doesn&apos;t stop at <span className="underline">HODLing</span>.
            </p>

            <p className="mb-3">
              Meet the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0BFFD3] via-[#FF00F5] to-[#24FF00]">
                Friends of Bitcoin
              </span>
              - the builders and innovators envisioning the future of Bitcoin as
              a layered chain utilized by all.
            </p>

            <p className="text-xs text-[#4CDFFF]">Agenda coming soon.</p>
          </div>

          <Chocolate className="w-20 rotate-[-124deg] fixed top-[20px] right-[-44px]" />
        </div>
        <div className="flex items-start gap-4">
          <div className="z-10 px-7 py-4 bg-black rounded-[44px] text-white">
            <div className="font-deltarune text-secondary text-lg mb-1">
              Partners
            </div>
            <div className="font-gothic">Become a friend 😘</div>
            <a
              className="font-arbutus text-[#FF007A] underline text-xs"
              href="mailto:info@friendsofbitcoin.xyz"
            >
              Info@friendsofbitcoin.xyz
            </a>
          </div>

          <a
            className="z-10 btn-pixel bg-primary items-center rounded-[30px]"
            href="https://lu.ma/yb8kvcbx"
            target="_blank"
          >
            <span className="font-arbutus text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#DBFF00] via-[#04CF00] to-[#8BFFF8]">
              REGISTER
            </span>
            <PixelArrow className="rotate-[135deg] w-12 ml-2" />
          </a>
        </div>
      </div>
    </div>

    <div className="px-10 w-full flex fixed top-1/2 left-1/2 transform -translate-x-1/2 translate-y-4">
      <button
        className="btn-pixel bg-[#FF00E5] text-[#00FFD1] "
        onClick={() => onPageChange(Page.Home)}
      >
        <PixelArrow className="w-8 mr-2" />
        Back
      </button>
    </div>
  </div>
);

export default function Landing() {
  return (
    <>
      <Head>
        <title>Friends of Bitcoin</title>
      </Head>
      <HomePage />
    </>
  );
}
