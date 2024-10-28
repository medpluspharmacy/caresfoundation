import { Link } from "@remix-run/react";
import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  width?: string;
}

const Button = ({ children, width }: IButton) => {
  return (
    <Link
      to="https://paystack.com/pay/eflxw4vy00"
      className={`bg-[#FF0077] font-sans text-white flex justify-center items-center gap-2.5 py-3 h-[67px] ${
        width || "w-[180px]"
      } rounded text-lg font-medium`}
    >
      {children}
    </Link>
  );
};

export default Button;
