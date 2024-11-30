import { BsAndroid } from "react-icons/bs";
import { FaApple, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import QRCode from "react-qr-code";

function WalletQRCode() {
  const socialMedia = [
    { icon: <FaTelegramPlane size={25} className="text-golden" />, url: "/" },
    { icon: <FaXTwitter size={25} className="text-golden" />, url: "/" },
    { icon: <RiFacebookFill size={25} className="text-golden " />, url: "/" },
    { icon: <FaApple size={25} className="text-golden  " />, url: "/" },
    { icon: <BsAndroid size={25} className="text-golden" />, url: "/" },
  ];
  return (
    <div className="pr-14 pl-5 absolute bottom-5 ">
      <div className="p-3 rounded-xl bg-smoke">
        <QRCode value="https://www.example.com" size={160} />
      </div>

      <div className="flex items-center justify-between p-2 w-full pt-3 mt-4 border-t border-smoke/20">
        {socialMedia?.map((item, index) => (
          <a key={index} className="flex items-center">
            {item.icon}{" "}
            {index === 2 && (
              <div className="text-4xl text-smoke/40 font-thin ml-3">|</div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default WalletQRCode;
