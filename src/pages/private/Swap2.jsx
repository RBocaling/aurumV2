import { useState } from "react";
import Buy from "../../components/swaps2/Buy";
import Sell from "../../components/swaps2/Sell";
import Convert from "../../components/swaps2/Convert";
import GaeExtra from "../../components/swaps2/GaeExtra";
import Gae from "../../components/swaps2/Gae";
import { summaryTableFee } from "../../constants";
import { Chip } from "@nextui-org/react";
import TableContent from "../../components/swaps2/tableContent";

const Swap = () => {
  const [selected, setSelected] = useState("buy");
  const [visibleTabs, setVisibleTabs] = useState({});

  const renderContent = () => {
    switch (selected) {
      case "buy":
        return <Buy handleSwitch={() => setSelected("sell")} />;
      case "sell":
        return <Sell handleSwitch={() => setSelected("buy")} />;
      case "convert":
        return <Convert />;
      case "regular":
        return <Gae />;
      case "extra":
        return <GaeExtra />;
      default:
        return <div>Select a transaction type.</div>;
    }
  };

  const tabs = [
    { key: "buy", label: "Buy" },
    { key: "sell", label: "Sell" },
    { key: "convert", label: "Gold Convert" },
    { key: "gae", label: "GAE" },
    { key: "gae-extra", label: "GAE Extra" },
  ];

  return (
    <div className="px-12">
      <div className="flex items-start justify-center gap-20 mt-3 px-7 pt-5">
        <div className="flex-1 flex flex-col gap-7 pt-12">
          {/* <div className="flex items-center justify-between py-3 px-3 rounded-full bg-ash border border-ash-light/50">
            {tabs?.map((item) => (
              <button
                key={item.key}
                onClick={() => setSelected(item.key)}
                className={`${
                  item.key === selected
                    ? "text-golden  bg-smoke/10 border border-golden"
                    : "text-smoke/70 border-transparent"
                } text-lg mx-2 flex items-center justify-center flex-1 whitespace-nowrap transition-all border hover:bg-smoke/10 hover:border-golden rounded-full uppercase py-2 px-5`}
              >
                {item.label}
              </button>
            ))}
          </div> */}
          <h1 className="font-semibold text-6xl mb-2  text-white">
            {selected === "convert"
              ? "Gold Convert"
              : selected == "buy"
              ? "Buy"
              : selected == "sell"
              ? "Sell"
              : selected == "gae"
              ? "GAE"
              : selected == "gae-extra"
              ? "GAE Extra"
              : "Buy & Sell"}
          </h1>
          <p className="text-base text-smoke/70 font-light tracking-wider text-center md:text-left">
            Swap your Quantum Metal Gold Tokens (QMGT) for USDT easily and
            securely, ensuring transparency, stability, and liquidity in your
            investment with each transaction.
          </p>
          <TableContent
            handleSwitch={(data) => setSelected(data)}
            type={selected}
          />
          <button className="text-2xl ml-5  font-medium text-golden my-5 text-left animate-pulse">
            How Its Work?
          </button>
        </div>
        <div className="flex items-cesnter justify-center flex-col gap-12 w-2/5 pt-12">
          {renderContent()}
        </div>
      </div>

      {/* Rendered Content */}
    </div>
  );
};

export default Swap;
