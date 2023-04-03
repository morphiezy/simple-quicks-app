import React from "react";
import BlueSpinner from "../../../assets/icons/blue-spinnner.svg";

const LoadingCS = () => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }, []);

  return (
    <>
      {visible && (
        <div className="px-8 py-3">
          <div className="flex items-center w-full h-fit bg-[#E9F3FF] p-2 rounded-[5px]">
            <img src={BlueSpinner} alt="loading" className="animate-spin" />
            <p className="text-xs font-bold">
              Please wait while we connect you with one of our team ...{" "}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingCS;
