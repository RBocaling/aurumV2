/* eslint-disable react/prop-types */
import { ArrowDown, ArrowUpDown, ChevronRight, Plus } from "lucide-react";
import { Button, Checkbox } from "@nextui-org/react";
import { useState } from "react";
import SelectedAssets from "../selectAsset";
import useAssetValue from "../../hooks/useAssetValue";
import { buyComputation } from "../../services/transactionComputation";
import { buyAssets, fiatPaymentMethod } from "../../constants";
import useBalance from "../../hooks/useBalance";

const Buy = ({ handleSwitch }) => {
  const { goldValue, usdtValue } = useAssetValue();
  const { qmgtBalance, usdtBalance } = useBalance();

  const [isOpenSelectAsset, setIsOpenSelectAsset] = useState(false);
  const [isOpenSelectPayment, setIsOpenSelectPayment] = useState(false);
  const [buyingAmount, setBuyingAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(fiatPaymentMethod[0]);
  const [amountType, setAmountType] = useState(buyAssets[0]);

  const {
    isInsufficientBalance,
    formatFee,
    feeRate,
    recieveAmount,
    totalAmount,
  } = buyComputation(
    amountType,
    Number(buyingAmount),
    goldValue,
    usdtValue,
    usdtBalance,
    qmgtBalance
  );

  return (
    <div className="w-full  flex  justify-center gap-24 pt-2 pb-12">
      <div className="flex flex-col gap-3 w-[40%] relative">
        {/* sell */}
        <div className="card w-full rounded-3xl bg-ash py-7 px-9 flex items-center h-[180px] justify-between shadow-2xl shadow-ash-light/40 border border-ash-light/40 ">
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
            <p className="text-red-500 tracking-wide">
              {isInsufficientBalance && "Insufficient Balance"}
            </p>
            <input
              type="text"
              placeholder="0.00"
              onChange={(e) => setBuyingAmount(e.target.value)}
              className="text-4xl text-smoke font-light outline-none border-none text-right bg-transparent"
            />
          </div>
        </div>
        <button
          onClick={handleSwitch}
          className="h-16 w-16 rounded-full flex items-center justify-center bg-ash border-4 border-dark absolute top-[28%] left-1/2 -translate-x-1/2 hover:bg-[#372e20] hover:text-golden transition-all cursor-pointer p-2"
        >
          <ArrowUpDown
            size={25}
            className="text-smoke hover:text-golden animate-bounce"
          />
        </button>
        {/* sell */}
        <div className="w-full rounded-3xl bg-ash py-7 px-9  h-[180px]  shadow-2xl shadow-ash-light/40 border border-ash-light/40">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-3 w-1/2">
              <p className="text-golden text-base"> Recieve</p>
              <div className="flex items-center gap-3 text-smoke text-sm -ml-2 cursor-pointer z-20 py-1 px-1 ">
                <img src="/icons/qmgt.svg" className="w-9" alt="" />
                QMGT
              </div>
              <p className="text-smoke/80 text-base">Balance: $1200</p>
            </div>
            <div className="flex flex-col items-end gap-3 w-1/2">
              <h1
                type="text"
                className="text-4xl text-smoke/50 font-light outline-none border-none text-right bg-transparent"
              >
                {recieveAmount}
              </h1>
            </div>
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
          <Button className="py-8  text-smoke text-xl font-semibold tracking-wider bg-golden hover:bg-golden/90 border border-golden/20 rounded-full w-full mt-5 shadow-2xl shadow-golden/40">
            BUY
          </Button>
        </div>
      </div>
      {/* addtional */}
      <div className="flex flex-col gap-3 w-[40%] relative">
        {/* summary */}
        <div className="w-full rounded-3xl bg-ash py-7 px-9 flex flex-col gap-5  shadow-2xl shadow-ash-light/40 border border-ash-light/40 z-10">
          <p className="text-golden text-sm">Transaction Summary</p>

          {amountType.key === "fiat" && (
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
          )}
          <div className="flex items-center justify-between text-smoke text-base tracking-wide w-full mt-2">
            <p>
              Transaction Fee <span className="text-golden">{feeRate}</span>
            </p>
            <p>{formatFee}</p>
          </div>
          <div className="flex items-center justify-between text-smoke text-base tracking-wide w-full">
            <p>Total Amount To Pay</p>
            <p>{`${
              amountType.key === "fiat" ? "PHP" : "USDT"
            } ${totalAmount}`}</p>
          </div>
          {paymentMethod.key === "directDeposit" &&
            amountType.key === "fiat" && (
              <button className="flex items-betjustify-between px-9 justify-center gap-3 text-smoke text-base -ml-2 mt-5 cursor-pointer z-20 p-4 rounded-full bg-ash-light  flex-1 border border-smoke/10 hover:bg-golden/10 hover:text-golden transition-all whitespace-nowrap">
                <Plus />
                Upload Bank Info
              </button>
            )}
        </div>

        <button className="text-2xl mx-auto  font-medium text-golden my-12 text-left animate-pulse">
          How Its Work?
        </button>
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
