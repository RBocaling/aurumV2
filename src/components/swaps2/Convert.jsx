/* eslint-disable react/prop-types */
import { ArrowDown, ChevronRight, Info, Plus } from "lucide-react";
import { Button, Checkbox } from "@nextui-org/react";
import { useState } from "react";
import SelectedAssets from "../selectAsset";
import { ConvertAssets, fiatPaymentMethod } from "../../constants";
import useAssetValue from "../../hooks/useAssetValue";

const Convert = ({ handleSwitch }) => {
  const { goldValue, usdtValue } = useAssetValue();
  const [isOpenSelectAsset, setIsOpenSelectAsset] = useState(false);
  const [isOpenSelectPayment, setIsOpenSelectPayment] = useState(false);
  const [buyingAmount, setBuyingAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(fiatPaymentMethod[0]);
  const [amountType, setAmountType] = useState(ConvertAssets[0]);

  const qmSellingPrice = goldValue * 1.07;

  const bookingNotes =
    amountType.key === "usdt"
      ? (buyingAmount / qmSellingPrice).toFixed(6)
      : amountType.key === "fiat"
      ? (buyingAmount / usdtValue / qmSellingPrice).toFixed(6)
      : amountType.key === "qmgt"
      ? (buyingAmount * goldValue) / qmSellingPrice
      : 0;

  const recieveAmount = (goldValue * bookingNotes * 0.91).toFixed(2);

  return (
    <div className="w-full  -mt-9">
      <div className="flex flex-col gap-3 relative">
        {/* sell */}
        <div className="relative w-full rounded-3xl bg-ash px-9 py-7 flex items-center justify-between  shadow-2xl shadow-ash-light/40 border border-ash-light/40">
          <div className="flex flex-col items-start gap-3 w-1/2">
            <p className="text-golden text-base"> Pay via</p>
            <button
              onClick={() => setIsOpenSelectAsset(true)}
              className="flex items-center gap-3 text-smoke text-base -ml-2 cursor-pointer z-20 py-1 pl-1 pr-3 rounded-full bg-ash-light  border border-smoke/10 hover:bg-golden/10 hover:text-golden transition-all"
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
            <div className="flex items-center justify-center gap-3 uppercase rounded-full  bg-ash-light p-1">
              <button className=" text-sm bg-ash-light border border-smoke/10    font-medium  text-smoke py-2 px-4 rounded-tl-full rounded-bl-full  hover:bg-golden/10 hover:text-golden transition-all">
                min
              </button>

              <button className=" text-sm bg-ash-light border border-smoke/10    font-medium  text-smoke py-2 px-4 rounded-base rounded-tr-full rounded-br-full  hover:bg-golden/10 hover:text-golden transition-all">
                max
              </button>
            </div>
            <input
              onChange={(e) => setBuyingAmount(e.target.value)}
              type="number"
              placeholder="0.00"
              className="text-4xl text-smoke font-light outline-none border-none text-right bg-transparent"
            />
          </div>

          <button
            onClick={handleSwitch}
            className="h-16 w-16 rounded-full flex items-center justify-center bg-ash border-4 border-dark absolute top-[83%] left-1/2 -translate-x-1/2 hover:bg-[#372e20] hover:text-golden transition-all cursor-pointer p-2"
          >
            <ArrowDown
              size={25}
              className="text-smoke hover:text-golden animate-bounce"
            />
          </button>
        </div>

        {/* recieve */}
        <div className="w-full rounded-3xl bg-ash px-7 py-9  flex flex-col gap-3  shadow-2xl shadow-ash-light/40 border border-ash-light/40">
          <p className="text-golden text-base"> Booking Note</p>
          <div className="flex items-center justify-between gap-3 w-full">
            <p className="text-smoke/80 text-base">Total Recieve</p>
            <p className="text-smoke/80 text-base"> {recieveAmount}</p>
          </div>
          <div className="flex items-center justify-between gap-3 w-full">
            <p className="text-smoke/80 text-base">Total Holdings</p>
            <p className="text-smoke/80 text-base">
              QMGT {bookingNotes}{" "}
              <span className="text-smoke/50 text-xs">/g</span>
            </p>
          </div>
          <div className="flex items-center justify-between gap-3 w-full">
            <p className="text-smoke/80 text-base">Credited In</p>
            <button
              onClick={() => setIsOpenSelectPayment(true)}
              className="flex items-betjustify-between px-7 justify-center gap-3 text-smoke text-sm -ml-2 cursor-pointer z-20 p-3 rounded-full bg-ash-light border border-smoke/10 hover:bg-golden/10 hover:text-golden transition-all whitespace-nowrap"
            >
              Select Bank
              <ChevronRight className="text-golden" />
            </button>{" "}
          </div>
          {/* notes */}
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
        </div>
        <div className="w-full rounded-3xl bg-ash px-7 py-9 flex flex-col gap-5  shadow-2xl shadow-ash-light/40 border border-ash-light/40">
          <p className="text-golden text-sm">Payment Info</p>
          <div className="flex items-center justify-between gap-3 w-full">
            <p className="text-smoke/80 text-base">Payment Method</p>
            <button
              onClick={() => setIsOpenSelectPayment(true)}
              className="flex items-betjustify-between px-7 justify-center gap-3 text-smoke text-sm -ml-2 cursor-pointer z-20 p-3 rounded-full bg-ash-light border border-smoke/10 hover:bg-golden/10 hover:text-golden transition-all whitespace-nowrap"
            >
              QRPH
              <ChevronRight className="text-golden" />
            </button>{" "}
          </div>
          <div className="flex items-center justify-between text-smoke text-base tracking-wide w-full mt-5">
            <p>
              Transaction Fee <span className="text-golden">{0}</span>
            </p>
            <p>0</p>
          </div>
          <div className="flex items-center justify-between text-smoke text-base tracking-wide w-full">
            <p>Total Amount To Pay</p>
            <p>{`${amountType.key === "fiat" ? "PHP" : "USDT"} ${0}`}</p>
          </div>
          <button className="flex items-betjustify-between px-9 justify-center gap-3 text-smoke text-base -ml-2 mt-5 cursor-pointer z-20 p-4 rounded-full bg-ash-light  flex-1 border border-smoke/10 hover:bg-golden/10 hover:text-golden transition-all whitespace-nowrap">
            <Plus />
            Upload Bank Info
          </button>
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

      {isOpenSelectAsset && (
        <SelectedAssets
          isOpen={isOpenSelectAsset}
          onClose={() => setIsOpenSelectAsset(false)}
          handleSelected={(data) => setAmountType(data)}
          type="convert"
        />
      )}
    </div>
  );
};

export default Convert;
