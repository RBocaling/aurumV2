import GlassCard from "../glassCard";

const TotalProfit = () => {
  const totalCount = [
    {
      label: "Unrealized Profit",
      value: 0,
      icon: "/profitLoss.png",
    },
    {
      label: "Unrealized Profit",
      value: 0,
      icon: "/profitLoss.png",
    },
    {
      label: "Unrealized Profit",
      value: 0,
      icon: "/profitLoss.png",
    },
    {
      label: "Unrealized Profit",
      value: 0,
      icon: "/profitLoss.png",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {totalCount?.map((item, index) => (
          <GlassCard
            key={index}
            className="flex items-center justify-between gap-5 px-7 py-12 relative total-profit overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              <h1 className="text-smoke text-5xl font-semibold">$0</h1>
              <p className="text-sm  text-smoke/50">Unrealized Profit & Loss</p>
            </div>{" "}
            <img src={item.icon} className="w-16" alt="" />
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default TotalProfit;
