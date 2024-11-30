/* eslint-disable react/prop-types */
import { ArrowDown, ChevronRight, Info, Plus } from "lucide-react";
import { Button, Checkbox } from "@nextui-org/react";
import { useState } from "react";
import SelectedAssets from "../selectAsset";
import { buyAssets } from "../../constants";
import useAssetValue from "../../hooks/useAssetValue";
import { gaeComputation } from "../../services/transactionComputation";

const Gae = ({ handleSwitch }) => {
  const { goldValue, usdtValue } = useAssetValue();
  const [isOpenSelectPayment, setIsOpenSelectPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(buyAssets[0]);
  const [numberUnit, setNumberUnit] = useState(0);

  const {
    qmSellingPrice,
    valuePerUnit,
    downPayment,
    totalManagementFee,
    totalUnitValue,
    qmgtholdings,
    totalUnitToBePaid,
    totalAmountToBePaid,
    formatFee,
  } = gaeComputation(paymentMethod, numberUnit, goldValue, usdtValue);

  
  return (
    <div className="w-full  flex  justify-center gap-24 pt-2 pb-12">
      <div className="flex flex-col gap-3 w-[40%] relative">
        {/* sell */}
        <div className="relative w-full rounded-3xl bg-ash px-9 py-7 flex items-center justify-between  shadow-2xl shadow-ash-light/40 border border-ash-light/40 h-[180px]">
          <div className="flex flex-col gap-3 w-1/2">
            <p className="text-smoke/50 text-sm">GAE Regular</p>
            <p className="text-smoke text-2xl">No. of unit to buy</p>
          </div>
          <div className="flex flex-col items-end gap-7 w-1/2">
            <p className="text-golden text-base tracking-wide">
              1 Unit = USDT 250.00
            </p>
            <input
              onChange={(e) => setNumberUnit(e.target.value)}
              type="number"
              placeholder="Enter Unit"
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
            <p className="text-smoke/80 text-base">Total Unit Value</p>
            <p className="text-smoke/80 text-base"> {0}</p>
          </div>
          <div className="flex items-center justify-between gap-3 w-full">
            <p className="text-smoke/80 text-base">Total QMGT Holdings</p>
            <p className="text-smoke/80 text-base">
              QMGT {0} <span className="text-smoke/50 text-xs">/g</span>
            </p>
          </div>
          <div className="flex items-center justify-between gap-3 w-full">
            <p className="text-smoke/80 text-base">Total Amount to be paid</p>
            <p className="text-smoke/80 text-base"> {0}</p>
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
              <p className="text-smoke/80 text-base"> {0}</p>
            </ul>
            <ul className="flex items-center justify-between gap-3 w-full mt-3 list-inside pl-5">
              <li className="text-smoke/80 text-base list-disc">
                Down Payment
              </li>
              <p className="text-smoke/80 text-base"> {0}</p>
            </ul>
          </div>
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
          <Button className="py-8  text-smoke text-xl font-semibold tracking-wider bg-golden hover:bg-golden/90 border border-golden/20 rounded-full w-full mt-5 shadow-sm shadow-golden/40">
            BUY
          </Button>
        </div>
      </div>
      {/* addtional */}
      <div className="flex flex-col gap-3 w-[40%] relative">
        {/* summary */}
        <div className="w-full rounded-3xl bg-ash py-7 px-9 flex flex-col gap-5  shadow-2xl shadow-ash-light/40 border border-ash-light/40 z-10">
          <p className="text-golden text-sm">Transaction Summary</p>

          <div className="flex items-center justify-between gap-3 w-full">
            <p className="text-smoke/80 text-base">Payment Method</p>
            <button
              onClick={() => setIsOpenSelectPayment(true)}
              className="flex items-betjustify-between px-7 justify-center gap-3 text-smoke text-sm -ml-2 cursor-pointer z-20 p-3 rounded-full bg-ash-light border border-smoke/10 hover:bg-golden/10 hover:text-golden transition-all whitespace-nowrap"
            >
              {paymentMethod.label}
              <ChevronRight className="text-golden" />
            </button>{" "}
          </div>
          <div className="flex items-center justify-between text-smoke text-base tracking-wide w-full mt-2">
            <p>
              Transaction Fee <span className="text-golden">{1}</span>
            </p>
            <p>{0}</p>
          </div>
          <div className="flex items-center justify-between text-smoke text-base tracking-wide w-full">
            <p>Total Amount To Pay</p>
            <p>{`usdt ${0}`}</p>
          </div>
          <button className="flex items-betjustify-between px-9 justify-center gap-3 text-smoke text-base -ml-2 mt-5 cursor-pointer z-20 p-4 rounded-full bg-ash-light  flex-1 border border-smoke/10 hover:bg-golden/10 hover:text-golden transition-all whitespace-nowrap">
            <Plus />
            Upload Bank Info
          </button>
        </div>

        {/* notes */}
        <button className="text-2xl mx-auto  font-medium text-golden my-12 text-left animate-pulse">
          How Its Work?
        </button>
      </div>
      {isOpenSelectPayment && (
        <SelectedAssets
          isOpen={isOpenSelectPayment}
          onClose={() => setIsOpenSelectPayment(false)}
          handleSelected={(data) => setPaymentMethod(data)}
          type="buy"
        />
      )}
    </div>
  );
};

export default Gae;
