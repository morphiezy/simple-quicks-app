import Spinner from "../../assets/icons/spinner.svg";

const Loading = ({ text }) => {
  return (
    <div className="absolute w-fit h-fit translate-y-[-50%] translate-x-[-50%] top-1/2 left-1/2">
      <img
        src={Spinner}
        alt="spinner"
        className="animate-spin w-[68px] h-[68px] block mx-auto"
      />
      <p className="text-sm font-bold text-[#4F4F4F] mt-3">Loading {text}...</p>
    </div>
  );
};

export default Loading;
