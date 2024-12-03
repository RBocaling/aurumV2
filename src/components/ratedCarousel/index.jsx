import Marquee from "react-fast-marquee";
import { FaCoins } from "react-icons/fa";

const RateCarousel = () => {
  const goldValue = 95;
  const usdtValue = 95;
  return (
    <div className=" mt-2  bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800 text-white mb-2 items-center shadow-lg p-2 py-1 rounded-xl overflow-hidden mx-3">
      <Marquee gradient={false} speed={40} className="w-full">
        <div className="flex justify-around gap-12 w-full items-center text-black">
          <div className="flex items-center gap-2">
            <img
              src="https://w7.pngwing.com/pngs/113/18/png-transparent-tether-hd-logo-thumbnail.png"
              className="w-8 rounded-full"
              alt=""
            />
            <p className="px-2 font-medium">
              Convert: 1g = ${goldValue?.toFixed(2)}
            </p>
        </div>

          <p className="font-thin">|</p>

          <div className="flex items-center gap-2">
            <p className="font-medium">Gold: 1g = 1qmgt</p>
            <FaCoins size={23} className="text-yellow-200" />
          </div>
          <p className="font-thin">|</p>
          <div className="flex items-center gap-2">
            <img src="/tokenLogo.png" className="w-8" alt="" />
            <p className="font-medium">
              Gold Standard Price (LME): 1g = ${goldValue?.toFixed(2)}
            </p>
          </div>
          <p className="font-thin">|</p>
          <div className="flex items-center gap-2">
            <img src="/php.png" className="w-8" alt="" />
            <p className="font-medium">PHP TO USDT = {usdtValue}</p>
          </div>

          <p className="font-thin">|</p>
          <div className="flex items-center gap-2">
            {" "}
            <FaCoins size={23} className="text-yellow-200" />
            <p className="font-medium">
              GAE = {(goldValue * 1.03)?.toFixed(2)}
            </p>
          </div>
          <p className="font-thin">|</p>
          <div className="flex items-center gap-2">
            {" "}
            <FaCoins size={23} className="text-yellow-200" />
            <p className="font-medium">
              GAE Extra = {(goldValue * 1.03)?.toFixed(2)}
            </p>
          </div>

          <p className="font-thin">|</p>
        </div>
      </Marquee>
    </div>
  );
};

export default RateCarousel;
