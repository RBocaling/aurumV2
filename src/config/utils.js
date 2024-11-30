export const computeFee = (asset, amount) => {
  const pesoToUsd = 58.93;
  const qmgtToUsd = 87.32;

  const assetToUsdt = {
    fiat: () => amount / pesoToUsd,
    qmgt: () => amount * qmgtToUsd,
    usdt: () => amount,
  };

  if (!assetToUsdt[asset]) throw new Error("Unsupported asset type");

  const usdtValue = assetToUsdt[asset]();
  const feeRate = usdtValue > 150 ? 0.002 : 0.001;
  const feeInUsdt = usdtValue * feeRate;

  let feeInAsset;
  if (asset === "fiat") {
    feeInAsset = feeInUsdt * pesoToUsd;
  } else if (asset === "qmgt") {
    feeInAsset = feeInUsdt / qmgtToUsd;
  } else {
    feeInAsset = feeInUsdt;
  }

  return {
    usdtValue,
    feeInUsdt,
    feeInAsset,
    feeRate: usdtValue > 150 ? ".2%" : ".1%",
    formatFee:
      asset === "fiat"
        ? `PHP ${feeInAsset.toFixed(2)}`
        : asset === "qmgt"
        ? `QMGT ${feeInAsset.toFixed(6)}`
        : `USDT ${feeInAsset.toFixed(2)}`,
  };
};
