import { computeFee } from "../config/utils";

// sell compuation
export const sellComputation = (buyingAmount, goldValue, qmgtBalance) => {
  const { formatFee, feeRate, feeInAsset } = computeFee("qmgt", buyingAmount);

  const qmSellingPrice = goldValue * 1.025;
  const recieveAmount = (buyingAmount * qmSellingPrice).toFixed(2);
  const totalAmount = parseFloat(Number(buyingAmount) + feeInAsset)?.toFixed(2);

  const isInsufficientBalance = buyingAmount > qmgtBalance ? true : false;
  return {
    recieveAmount,
    totalAmount,
    formatFee,
    feeRate,
    isInsufficientBalance,
  };
};

// buy computation
export const buyComputation = (
  amountType,
  buyingAmount,
  goldValue,
  usdtValue,
  usdtBalance,
  qmgtBalance
) => {
  const qmSellingPrice = goldValue * 1.025;
  const recieveAmount = (() => {
    switch (amountType.key) {
      case "usdt":
        return buyingAmount / qmSellingPrice;
      case "fiat":
        return buyingAmount / usdtValue / qmSellingPrice;
      default:
        return 0;
    }
  })();

  const { formatFee, feeRate, feeInAsset } = computeFee(
    amountType?.key,
    buyingAmount
  );

  const isInsufficientBalance = computeInsufficientBalance(
    amountType.key,
    buyingAmount,
    usdtBalance,
    qmgtBalance
  );

  const totalAmount = parseFloat(buyingAmount + feeInAsset)?.toFixed(2);

  return {
    formatFee,
    feeRate,
    feeInAsset,
    recieveAmount,
    totalAmount,
    isInsufficientBalance,
  };
};

// convert compuation
export const convertComputation = (
  amountType,
  buyingAmount,
  goldValue,
  usdtValue,
  usdtBalance,
  qmgtBalance
) => {
  const qmSellingPrice = goldValue * 1.07;
  const bookingNotes = (() => {
    switch (amountType.key) {
      case "usdt":
        return buyingAmount / qmSellingPrice;
      case "fiat":
        return buyingAmount / (usdtValue * qmSellingPrice);
      case "qmgt":
        return (buyingAmount * goldValue) / qmSellingPrice;
      default:
        return 0;
    }
  })();

  const { formatFee, feeRate, feeInAsset } = computeFee(
    amountType?.key,
    buyingAmount
  );

  const isInsufficientBalance = computeInsufficientBalance(
    amountType.key,
    buyingAmount,
    usdtBalance,
    qmgtBalance
  );

  const receiveAmountUsdt = (goldValue * bookingNotes * 0.91).toFixed(2);
  const receiveAmountFiat = (receiveAmountUsdt * usdtValue).toFixed(2);
  const recieveAmount =
    amountType.key === "fiat"
      ? `PHP ${receiveAmountFiat}`
      : `USDT ${receiveAmountUsdt}`;
  const totalAmount = parseFloat(buyingAmount + feeInAsset)?.toFixed(2);

  return {
    formatFee,
    feeRate,
    feeInAsset,
    bookingNotes,
    recieveAmount,
    totalAmount,
    isInsufficientBalance,
  };
};

// gae
export const gaeComputation = (
  paymentMethod,
  numberUnit,
  goldValue,
  usdtValue
) => {
  const qmSellingPrice = goldValue * 1.03;
  const valuePerUnit = 250;
  const downPayment = numberUnit * valuePerUnit;
  const totalManagementFee = downPayment * 9 * 0.035;
  const totalUnitValue = downPayment * 10;
  const qmgtholdings = totalUnitValue / qmSellingPrice;
  const totalUnitToBePaid = totalUnitValue - downPayment;
  
  const totalAmountToBePaid =
    paymentMethod.key === "fiat"
      ? (downPayment + totalManagementFee) * usdtValue
      : downPayment + totalManagementFee;

  const transactionFee =
    paymentMethod.key === "fiat"
      ? downPayment * 0.002 * usdtValue
      : paymentMethod.key === "usdt"
      ? downPayment * 0.002
      : 0;

  const formatFee = `${
    paymentMethod.key === "fiat" ? "PHP" : "USDT"
  } ${transactionFee.toFixed(2)}`;

  return {
    formatFee,
    qmSellingPrice,
    valuePerUnit,
    downPayment,
    totalManagementFee,
    totalUnitValue,
    qmgtholdings,
    totalUnitToBePaid,
    totalAmountToBePaid,
  };
};

// isInsufficientBalance
const computeInsufficientBalance = (
  amountType,
  buyingAmount,
  usdtBalance,
  qmgtBalance
) => {
  if (amountType === "usdt") {
    return buyingAmount > usdtBalance;
  }
  if (amountType === "qmgt") {
    return buyingAmount > qmgtBalance;
  }
  return false;
};
