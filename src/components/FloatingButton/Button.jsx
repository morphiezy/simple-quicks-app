const Button = ({
  value,
  styles,
  size,
  icon,
  clicked,
  backdropClick,
  showBackDrop,
}) => {
  return (
    <div className="flex flex-col w-fit h-fit ml-[26px] float-open transition-all duration-300">
      {value && <p className="text-white text-center font-bold mb-2 text-base">{value}</p>}
      <div className="relative w-fit h-fit cursor-pointer">
        {showBackDrop && (
          <div
            className={`absolute rounded-full bg-[#4F4F4F] left-[-15px] z-10 ${size}`}
            onClick={backdropClick}
          ></div>
        )}
        <button
          className={`relative z-20 rounded-full border-0 grid place-items-center ${styles} ${size}`}
          onClick={clicked}
        >
          <img src={icon} alt="value" />
        </button>
      </div>
    </div>
  );
};

export default Button;
