import { useState } from "react";
import Buy from "../../components/swaps/Buy";
import Sell from "../../components/swaps/Sell";
import Convert from "../../components/swaps/Convert";
import GaeExtra from "../../components/swaps/GaeExtra";
import Gae from "../../components/swaps/Gae";
import { summaryTableFee } from "../../constants";
import { Chip } from "@nextui-org/react";

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
    {
      key: "gold",
      label: "Gold",
      subTab: [
        {
          key: "buy",
          label: "Buy",
        },
        {
          key: "sell",
          label: "Sell",
        },
      ],
    },
    { key: "convert", label: "Gold Convert" },
    {
      key: "gae",
      label: "Gae",
      subTab: [
        {
          key: "regular",
          label: "Regular",
        },
        {
          key: "extra",
          label: "Extra",
        },
      ],
    },
  ];

  return (
    <div className="px-7">
      <div className="flex items-center justify-between mb-7 mt-3">
        <div className="flex items-center justify-center flex-col gap-12 w-full">
          {/* Info Section */}
          <div className="flex items-center justify-around w-full gap-5 ">
            {summaryTableFee?.map((item, index) => (
              <div
                key={index}
                className={`${index > 0 && "border-l border-ash-light/70"}  ${
                  item?.type == selected && "bg-ash rounded-lg"
                } relative flex-1  flex flex-col items-center gap-3 py-2  `}
              >
                <div className="flex items-center gap-3">
                  <h1 className="text-smoke font-medium text-sm border-b border-ash-light ">
                    {item.title}
                  </h1>
                  {item.type && (
                    <Chip
                      color="warning"
                      variant="flat"
                      className="uppercase text-golden"
                    >
                      {item.type}
                    </Chip>
                  )}
                </div>
                <p className="text-golden text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 py-3 -mt- px-3 rounded-full bg-ash border border-ash-light/50">
            {tabs?.map((item) =>
              !item.subTab ? (
                <button
                  key={item.key}
                  onClick={() => setSelected(item.key)}
                  className={`${
                    item.key === selected
                      ? "text-golden  bg-smoke/10 border border-golden"
                      : "text-smoke/70 border-transparent"
                  } text-lg mx-2 flex items-center space-x-2 transition-all border hover:bg-smoke/10 hover:border-golden rounded-full uppercase py-2 px-5`}
                >
                  {item.label}
                </button>
              ) : (
                <div key={item.key} className="relative">
                  <button
                    onMouseEnter={() =>
                      setVisibleTabs((prev) => ({ ...prev, [item.key]: true }))
                    }
                    onMouseLeave={() =>
                      setVisibleTabs((prev) => ({ ...prev, [item.key]: false }))
                    }
                    className={`${
                      (selected === "buy" || selected === "sell") &&
                      item.key === "gold"
                        ? "text-golden bg-smoke/10 border-b-2 border-golden"
                        : (selected === "regular" || selected === "extra") &&
                          item.key === "gae"
                        ? "text-golden border-b-2 border-golden bg-smoke/10"
                        : "text-smoke/70 border-transparent"
                    } text-lg mx-2 flex items-center space-x-2 transition-all border hover:bg-smoke/10 hover:border-golden rounded-full uppercase py-2 px-7`}
                  >
                    {item.label}
                  </button>

                  {visibleTabs[item.key] && (
                    <div
                      onMouseEnter={() =>
                        setVisibleTabs((prev) => ({
                          ...prev,
                          [item.key]: true,
                        }))
                      }
                      onMouseLeave={() =>
                        setVisibleTabs((prev) => ({
                          ...prev,
                          [item.key]: false,
                        }))
                      }
                      className="flex items-center gap-5 p-5 bg-ash  border border-ash-light shadow-md shadow-ash-light/50 z-20 rounded-lg absolute top-full left-1/2 -translate-x-1/2 text-white transition-all duration-200 ease-in-out"
                    >
                      {item.subTab?.map((sub, i) => (
                        <button
                          onClick={() => setSelected(sub.key)}
                          className={`${
                            sub.key === selected
                              ? "text-golden border-b-2 border-golden"
                              : "text-smoke/70 border-transparent"
                          } text-lg mx-2 flex items-center space-x-2 transition-all border-b-2 hover:text-golden`}
                          key={i}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Rendered Content */}
      {renderContent()}
    </div>
  );
};

export default Swap;
