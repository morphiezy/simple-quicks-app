import PersonDark from "../../../assets/icons/person_dark_24px.svg";
import Person from "../../../assets/icons/person_24px-1.svg";

const Avatar = ({ variant, alphabet }) => {

  const background =
    variant === "blue"
      ? "bg-[#2F80ED]"
      : variant === "gray"
      ? "bg-[#E0E0E0]"
      : null;
      
  const icon =
    variant === "blue" ? Person : variant === "gray" ? PersonDark : null;

  return (
    <div
      className={`w-[34px] h-[34px] rounded-full grid place-items-center ${background}`}
    >
      {alphabet ? (
        <p className="uppercase font-bold text-white">{alphabet}</p>
      ) : (
        <img src={icon} className="w-3 h-3" alt="avatar" />
      )}
    </div>
  );
};

export default Avatar;
