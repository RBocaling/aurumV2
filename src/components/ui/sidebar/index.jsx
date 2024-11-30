import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Title from "../../title";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { GoChevronDown } from "react-icons/go";
import { FiChevronRight } from "react-icons/fi";
import { RxDashboard, RxDragHandleDots2 } from "react-icons/rx";
import { LuUser2 } from "react-icons/lu";
import WalletQRCode from "../../WalletQRCode";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";
import {
  CircleDollarSign,
  Ellipsis,
  LayoutGrid,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const getActiveLinkClass = (path, currentPath) => {
  return path === currentPath
    ? "bg-gradient-to-r from-golden w-full"
    : "hover:text-gray-400";
};

const Sidebar = () => {
  const [openSubmenu, setOpenSubmenu] = useState("");
  const location = useLocation();

  const toggleSubmenu = (submenu) => {
    setOpenSubmenu((prev) => (prev === submenu ? "" : submenu));
  };

  const privateRoutes = [
    { path: "/dashboard", label: "Dashboard", icon: <LayoutGrid /> },
    { path: "/profile", label: "My Profile", icon: <UserRound /> },
    {
      label: "Services",
      icon: <CircleDollarSign />,
      subLinks: [
        { path: "/sts", label: "STS" },
        { path: "/ges", label: "GES" },
        { path: "/staking", label: "Staking" },
      ],
    },
    {
      label: "Compliance",
      icon: <ShieldCheck />,
      subLinks: [
        { path: "/nominee", label: "Nominee" },
        { path: "/bank-verification", label: "Bank Verification" },
      ],
    },
    {
      path: "/transaction",
      label: "Transaction",
      icon: <HiOutlineSwitchHorizontal size={25} />,
    },
    {
      label: "More",
      icon: <Ellipsis />,
      subLinks: [
        { path: "/contact-us", label: "Contact Us" },
        { path: "/announcement", label: "Announcement" },
      ],
    },
  ];

  return (
    <div className="h-full w-80 py-3 px-2 text-white">
      <div className="h-full w-full bg-ash border rounded-xl py-7 pl-9 border-ash-light">
        <div className="w-full flex items-center justify-between px-2">
          <Title />
          <button className="bg-dark p-4 rounded-tl-full rounded-bl-full translate-x-3">
            <HiOutlineSwitchHorizontal size={25} />
          </button>
        </div>
        <ul className="space-y-2 mt-9 pr-7">
          {privateRoutes.map((route) =>
            route.subLinks ? (
              <li key={route.label} className="space-y-3">
                <div
                  className="flex items-center justify-between space-x-3 cursor-pointer p-3"
                  onClick={() => toggleSubmenu(route.label)}
                >
                  <div className="flex items-center gap-2">
                    {route.icon}
                    <span className="ml-2">{route.label}</span>
                  </div>
                  {openSubmenu === route.label ? (
                    <GoChevronDown className="ml-auto" />
                  ) : (
                    <FiChevronRight className="ml-auto" />
                  )}
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openSubmenu === route.label ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <ul className="pl-6">
                    {route.subLinks.map((subLink) => (
                      <li key={subLink.path}>
                        <Link
                          to={subLink.path}
                          className={`p-3 flex items-center rounded-xl ${getActiveLinkClass(
                            subLink.path,
                            location.pathname
                          )} transition-all`}
                        >
                          <span className="ml-2">{subLink.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={route.path} className="flex items-center space-x-3">
                <Link
                  to={route.path}
                  className={`p-3 flex items-center gap-2 text-lg rounded-xl ${getActiveLinkClass(
                    route.path,
                    location.pathname
                  )} transition-all`}
                >
                  {route.icon}
                  <span className="ml-2">{route.label}</span>
                </Link>
              </li>
            )
          )}
        </ul>
        <WalletQRCode />
      </div>
    </div>
  );
};

export default Sidebar;
