const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col absolute bottom-[110px] right-[34px] w-[620px] h-[520px] bg-white rounded-md overflow-hidden">
      {children}
    </div>
  );
};

export default AppLayout;