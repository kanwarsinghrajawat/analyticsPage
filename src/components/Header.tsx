import Filter from "./Filter";

const Header = () => {
  return (
    <>
      <div className="flex justify-between ">
        <p className="text-2xl text-white">Dashboard</p>
        <Filter />
      </div>
    </>
  );
};

export default Header;
