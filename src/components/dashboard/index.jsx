import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import GlassCard from "../glassCard";
import TotalProfit from "./TotalProfit";
import HoldingSummaryTable from "./HoldingSummaryTable";
import TransactionSummaryChart from "./TransactionChart";

const DashboardLayout = () => {
  return (
    <div className="w-full h-full">
      <div className="opacity-50 text-white">
        <Breadcrumbs>
          <BreadcrumbItem color="warning">Dashboard</BreadcrumbItem>
          <BreadcrumbItem color="warning">Summary</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div className="flex items-center justify-between pr-3">
        <h1 className="text-white font-semibold  text-2xl whitespace-nowrap md:text-2xlmx-4 md:mx-0 my-3">
          Dashboard
        </h1>
        <div className="flex items-center gap-2 text-white">
          <img className="w-10 rotate-coin" src="/tokenLogo.png" />
          <p>
            Current Gold Price:{" "}
            <span className="text-golden animate-lighting">85 QMGT</span>
          </p>
        </div>
      </div>
      <TotalProfit />
      <div className="grid grid-cols-3 grid-rows-3 gap-5 mt-5">
        <GlassCard className="row-span-2 col-span-2">
          Holding Summary <HoldingSummaryTable />
        </GlassCard>
        <GlassCard className="row-span-2 p-2">
          <TransactionSummaryChart />
        </GlassCard>

        <GlassCard className="row-span-2">Gold Convert Account</GlassCard>
        <GlassCard className="row-span-2">Gold Assets Enhance</GlassCard>
        <GlassCard className="row-span-2">Gold Assets Extra</GlassCard>
      </div>
    </div>
  );
};

export default DashboardLayout;
