import { twMerge } from "tailwind-merge";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "h-[60px] text-sm font-bold uppercase grid place-content-center px-12 rounded-2xl border-2 border-transparent hover:border-white hover:bg-transparent text-nowrap transition-all duration-500 bg-blue text-white w-fit",
        className
      )}
    >
      {children}
    </button>
  );
};
export default Button;
