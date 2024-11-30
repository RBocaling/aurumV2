/* eslint-disable react/prop-types */
import { ArrowDown, Info } from "lucide-react";
import { Button, Checkbox } from "@nextui-org/react";
import useAssetValue from "../../hooks/useAssetValue";
import { useState } from "react";
import { sellComputation } from "../../services/transactionComputation";

const Sell = ({ handleSwitch }) => {
  const { goldValue } = useAssetValue();
  const [buyingAmount, setBuyingAmount] = useState(0);

  const { feeRate, formatFee, recieveAmount, totalAmount } = sellComputation(
    buyingAmount,
    goldValue
  );

  return (
    <div className="w-full -mt-9 ">
      <div className="flex flex-col gap-3  relative">
        {/* sell */}
        <div className="relative w-full rounded-3xl bg-ash py-5 px-9 flex items-center justify-between h-[160px] shadow-2xl shadow-ash-light/40 border border-ash-light/40">
          <div className="flex flex-col gap-3 w-1/2">
            <p className="text-golden text-base"> Sell</p>
            <div className="flex items-center gap-3 text-smoke text-base -ml-2 cursor-pointer z-20 py-2 pl-2 pr-3 ">
              <img src="/icons/qmgt.png" className="w-8" alt="" />
              QMGT
            </div>
            <p className="text-smoke/80 text-base tracking-wide">
              Balance: $1200
            </p>
          </div>
          <div className="flex flex-col items-end gap-9 w-1/2">
            <p>{""}</p>
            <input
              type="text"
              placeholder="0.00"
              onChange={(e) => setBuyingAmount(e.target.value)}
              className="text-4xl text-smoke font-light outline-none border-none text-right bg-transparent"
            />
          </div>
          <button
            onClick={handleSwitch}
            className="h-16 w-16 rounded-full flex items-center justify-center bg-ash border-4 border-dark/30 absolute top-[85%] left-1/2 -translate-x-1/2 hover:bg-[#372e20] hover:text-golden transition-all cursor-pointer p-2"
          >
            <ArrowDown
              size={25}
              className="text-smoke hover:text-golden animate-bounce"
            />
          </button>
        </div>

        {/* sell */}
        <div className="w-full rounded-3xl bg-ash py-4 px-9  h-[160px]  shadow-2xl shadow-ash-light/40 border border-ash-light/40">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-3 w-1/2">
              <p className="text-golden text-base"> Recieve</p>
              <div className="flex items-center gap-3 text-smoke -ml-2 text-txt-sm cursor-pointer z-20 py-1 pr-1 ">
                <img src="/icons/usdt.svg" className="w-11" alt="" />
                USDT
              </div>
              <p className="text-smoke/80 text-base">Balance: $1200</p>
            </div>
            <div className="flex flex-col items-end gap-3 w-1/2">
              <h1
                type="text"
                className="text-4xl text-smoke outline-none border-none text-right bg-transparent"
              >
                {recieveAmount}
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full rounded-3xl bg-[rgba(249,228,86,0.05)] px-3 pr-9 py-5   mt-3">
          <div className="flex items-center gap-3">
            <Info size={25} className="text-golden" />
            <p className="text-lg font-semibold text-golden">Notes</p>
          </div>
          <ul className="flex items-center justify-between gap-3 w-full mt-4 list-inside pl-5">
            <li className="text-smoke/80 text-base list-disc ">
              Additional Annual Management Fee
            </li>
            <p className="text-smoke/80 text-base"> {recieveAmount}</p>
          </ul>
          <ul className="flex items-center justify-between gap-3 w-full mt-3 list-inside pl-5">
            <li className="text-smoke/80 text-base list-disc">
              Total to be recieve
            </li>
            <p className="text-smoke/80 text-base"> {recieveAmount}</p>
          </ul>
        </div>
        <div className="flex items-center gap-2 mt-5 pl-2">
          <Checkbox color="warning" />
          <p className="text-smoke text-base tracking-wide"> I agree to the</p>
          <span className="text-golden text-base tracking-wide">
            {" "}
            Terms and Conditions
          </span>
        </div>
        <div className="px-3">
          <Button className="py-8  text-smoke text-xl font-semibold tracking-wider bg-golden hover:bg-golden/90 border border-golden/20 rounded-full w-full mt-5 shadow-2xl shadow-golden/40">
            BUY
          </Button>
        </div>
      </div>
      {/* addtional */}
    </div>
  );
};

export default Sell;
