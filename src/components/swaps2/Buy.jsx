/* eslint-disable react/prop-types */
import { ArrowDown, ChevronRight, Info } from "lucide-react";
import { Button, Checkbox } from "@nextui-org/react";
import { useState } from "react";
import SelectedAssets from "../selectAsset";
import useAssetValue from "../../hooks/useAssetValue";
import { buyComputation } from "../../services/transactionComputation";
import { buyAssets, fiatPaymentMethod } from "../../constants";

const Buy = ({ handleSwitch }) => {
  const { goldValue, usdtValue } = useAssetValue();
  const [isOpenSelectAsset, setIsOpenSelectAsset] = useState(false);
  const [isOpenSelectPayment, setIsOpenSelectPayment] = useState(false);
  const [buyingAmount, setBuyingAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(fiatPaymentMethod[0]);
  const [amountType, setAmountType] = useState(buyAssets[0]);

  const { formatFee, feeRate, recieveAmount, totalAmount } = buyComputation(
    amountType,
    Number(buyingAmount),
    goldValue,
    usdtValue
  );

  console.log("test", paymentMethod);

  return (
    <div className="w-full  -mt-9">
      <div className="flex flex-col gap-3 w-full relative">
        {/* sell */}
        <div className="relative card w-full rounded-3xl bg-ash py-5 px-9 flex items-center h-[160px] justify-between shadow-2xl shadow-ash-light/40 border border-ash-light/40 ">
          <div className="flex flex-col items-start gap-3 w-1/2">
            <p className="text-golden text-base"> Buy</p>
            <button
              onClick={() => setIsOpenSelectAsset(true)}
              className="flex items-center gap-3 text-smoke text-base -ml-2 cursor-pointer z-20 py-1 pl-1 pr-3 rounded-full bg-ash-light    border border-smoke/10 hover:bg-golden/10 hover:text-golden transition-all"
            >
              {amountType?.icon}
              {amountType.label}
              <ChevronRight className="text-golden" />
            </button>
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
            className="h-16 w-16 rounded-full flex items-center justify-center bg-ash border-4 border-dark absolute top-[85%] left-1/2 -translate-x-1/2 hover:bg-[#372e20] hover:text-golden transition-all cursor-pointer p-2"
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
              <div className="flex items-center gap-3 text-smoke text-sm -ml-2 cursor-pointer z-20 py-1 px-1 ">
                <img src="/icons/qmgt.png" className="w-9" alt="" />
                QMGT
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

      {isOpenSelectAsset && (
        <SelectedAssets
          isOpen={isOpenSelectAsset}
          onClose={() => setIsOpenSelectAsset(false)}
          handleSelected={(data) => setAmountType(data)}
          type="buy"
          title="Select a token"
        />
      )}
      {isOpenSelectPayment && (
        <SelectedAssets
          isOpen={isOpenSelectPayment}
          onClose={() => setIsOpenSelectPayment(false)}
          handleSelected={(data) => setPaymentMethod(data)}
          type="paymentMethod"
          title="Select a token"
        />
      )}
    </div>
  );
};

export default Buy;
