import { Sidebar, SearchBar } from "../components";

const BaseLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen h-screen bg-[#262626] flex items-stretch">
      <Sidebar />
      <div className="w-full h-full relative">
        <SearchBar />
        { children }
      </div>
    </div>
  );
};

export default BaseLayout;
