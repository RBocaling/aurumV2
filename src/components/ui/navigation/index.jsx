import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from "@nextui-org/react";
import GlassCard from "../../glassCard";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbZoomMoney } from "react-icons/tb";
import { PiMedal } from "react-icons/pi";

const Navigation = () => {
  return (
    <div className="w-full px-3">
      <GlassCard className="p-2 flex items-center justify-between px-6">
        <h1 className="hidden md:flex items-center gap-3 text-lg text-white font-semibold ml-3 md:ml-0">
          Welcome Back{" "}
          <img
            src="/image.webp"
            className="w-12 md:w-14 waving-hand"
            alt="User avatar"
          />
        </h1>
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className=" flex items-center gap-2 mr-12 bg-golden/10 border border-ash-light py-3 px-5 rounded-xl"
          >
            <TbZoomMoney size={27} className="text-golden" />
            <h1 className="text-lg font-medium text-golden">Aurum Market</h1>
          </Link>

          {/* wallet */}
          <button className="relative flex items-center h-12 pr-3 bg-ash text-black border border-ash-light rounded-xl text-sm font-medium hover:bg-smoke/10 hover:border-golden transition-all duration-300 w-28">
            <div className="bg-background border-4 border-golden absolute -left-4 w-max h-max flex justify-center items-center rounded-full p-1">
              <MdOutlineAccountBalanceWallet color="#dca955" size={22} />
            </div>
            <p className="ml-8 text-white tracking-wider">Wallet</p>
          </button>
          <button>
            <IoNotificationsOutline size={27} className="text-smoke" />
          </button>

          <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
              <User
                className="mx-5 px-4 cursor-pointer hover:bg-ash-light/50 transition-all duration-200 ease-in-out"
                name={
                  <p className="text-smoke text-xl font-medium ">Jane Doe</p>
                }
                description={
                  <div className="flex items-center text-golden">
                    <PiMedal size={20} />
                    <h1 className="text-base">Rank 21</h1>
                  </div>
                }
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">Popover Content</div>
                <div className="text-tiny">This is the popover content</div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </GlassCard>
    </div>
  );
};

export default Navigation;
