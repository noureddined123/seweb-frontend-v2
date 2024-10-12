import { twMerge } from "tailwind-merge";

const Icon = ({ Icon, className = "", title, ...rest }) => {
  return (
    <div
      {...rest}
      className={twMerge(
        " grid hover:bg-opacity-90 transition-all duration-500 place-content-center  rounded-full",
        className
      )}
    >
      <div className="sr-only">{title}</div>
      <Icon className="w-4 h-4" />
    </div>
  );
};
export default Icon;
