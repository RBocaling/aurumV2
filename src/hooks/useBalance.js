// import { useQuery } from "@tanstack/react-query";
// import { getQmgtBalanceAPI, getUsdtBalanceAPI } from "../api/wallet";

const useBalance = () => {
  // const usdtBalance = useQuery({
  //   queryKey: ["usdt_balance"],
  //   queryFn: getUsdtBalanceAPI,
  // });
  // const qmgtBalance = useQuery({
  //   queryKey: ["qmgt_balance"],
  //   queryFn: getQmgtBalanceAPI,
  // });
  return {
    usdtBalance: parseFloat(100.0) || 0,
    qmgtBalance: parseFloat(10.023322) || 0,
  };
};

export default useBalance;
