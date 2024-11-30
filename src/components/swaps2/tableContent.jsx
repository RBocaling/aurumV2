/* eslint-disable react/prop-types */
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const TableContent = ({ handleSwitch, type }) => {
  const rows = [
    {
      key: "1",
      type: (
        <button
          className={` ${
            type === "buy" && "bg-ash-light    border border-smoke/10"
          } text-smoke text-base cursor-pointer z-20 py-2  px-9 rounded-full  hover:bg-golden/10 hover:text-golden transition-all `}
          onClick={() => handleSwitch("buy")}
        >
          Buy
        </button>
      ),
      buy: "85",
      sell: "90",
      fee: "3.5%",
    },
    {
      key: "2",
      type: (
        <button
          className={` ${
            type === "sell" && "bg-ash-light    border border-smoke/10"
          } text-smoke text-base cursor-pointer z-20 py-2  px-9 rounded-full  hover:bg-golden/10 hover:text-golden transition-all `}
          onClick={() => handleSwitch("sell")}
        >
          Sell
        </button>
      ),
      buy: "75",
      sell: "80",
      fee: "2.8%",
    },
    {
      key: "3",
      type: (
        <button
          className={` ${
            type === "convert" && "bg-ash-light    border border-smoke/10"
          } text-smoke text-base cursor-pointer z-20 py-2  px-9 rounded-full  hover:bg-golden/10 hover:text-golden transition-all `}
          onClick={() => handleSwitch("convert")}
        >
          Convert
        </button>
      ),
      buy: "65",
      sell: "70",
      fee: "3.0%",
    },
    {
      key: "4",
      type: (
        <button
          className={` ${
            type === "gae" && "bg-ash-light    border border-smoke/10"
          } text-smoke text-base cursor-pointer z-20 py-2  px-9 rounded-full  hover:bg-golden/10 hover:text-golden transition-all `}
          onClick={() => handleSwitch("gae")}
        >
          Gae
        </button>
      ),
      buy: "95",
      sell: "100",
      fee: "4.0%",
    },
    {
      key: "4",
      type: (
        <button
          className={` ${
            type === "gae-extra" && "bg-ash-light    border border-smoke/10"
          } text-smoke text-base cursor-pointer z-20 py-2  px-9 rounded-full  hover:bg-golden/10 hover:text-golden transition-all `}
          onClick={() => handleSwitch("gae-extra")}
        >
          Gae Extra
        </button>
      ),
      buy: "95",
      sell: "100",
      fee: "4.0%",
    },
  ];

  const columns = [
    {
      key: "type",
      label: "Transaction Type",
    },
    {
      key: "buy",
      label: "Buy",
    },
    {
      key: "sell",
      label: "Sell (LME)",
    },
    {
      key: "fee",
      label: "Management Fee",
    },
  ];
  return (
    <div>
      <Table>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              className="text-base text-center w-[25%] "
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  className="text-base text-center w-[25%] "
                >
                  {item[column.key]}
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableContent;
