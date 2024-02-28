import { useSelector } from "react-redux";
import { months } from "../utils";

const Stats = () => {
  const initialData = useSelector(
    (state: any) => state.filterReducer.usersData
  );
  const userData = useSelector(
    (state: any) => state.filterReducer.filteredData
  );
  console.log(initialData);
  const givenMonths = months;
  let [mostActiveMonth, mostRevenueMonth, mostSaleMonth] = ["", "", ""];

  if (userData.length > 0) {
    const userVisitArray = userData[0]?.userVisit;
    const userRevenueMonth = userData[0]?.revenue;
    const userSaleMonth = userData[0]?.sales;
    const maxIndex = userVisitArray.indexOf(Math.max(...userVisitArray));
    const maxIndexRevenue = userRevenueMonth.indexOf(
      Math.max(...userRevenueMonth)
    );
    const maxIndexSale = userSaleMonth.indexOf(Math.max(...userSaleMonth));

    mostActiveMonth = givenMonths[maxIndex];
    mostRevenueMonth = givenMonths[maxIndexRevenue];
    mostSaleMonth = givenMonths[maxIndexSale];
  } else {
    const userVisitArray = initialData[0]?.userVisit;
    const userRevenueMonth = initialData[0]?.revenue;
    const userSaleMonth = initialData[0]?.sales;
    const maxIndex = userVisitArray.indexOf(Math.max(...userVisitArray));
    const maxIndexRevenue = userRevenueMonth.indexOf(
      Math.max(...userRevenueMonth)
    );
    const maxIndexSale = userSaleMonth.indexOf(Math.max(...userSaleMonth));

    mostActiveMonth = givenMonths[maxIndex];
    mostRevenueMonth = givenMonths[maxIndexRevenue];
    mostSaleMonth = givenMonths[maxIndexSale];
  }

  return (
    <>
      <div className="flex gap-20 justify-center max-lg:flex-wrap  max-lg:gap-10 max-sm:gap-6">
        <div className="bg-[rgb(48,55,68)] shadow-xl p-6 rounded-md w-[17%] max-xl:w-[23%] max-lg:w-[40%]  max-sm:w-[80%] ">
          <p className="text-gray-400">User most active from</p>
          <p className="text-white ">{mostActiveMonth}</p>;
        </div>
        <div className="bg-[rgb(48,55,68)] shadow-xl p-6 rounded-md w-[17%]  max-xl:w-[23%] max-lg:w-[40%]  max-sm:w-[80%]">
          <p className="text-gray-400"> Highest revenue generated in</p>
          <p className="text-white">{mostRevenueMonth}</p>
        </div>
        <div className="bg-[rgb(48,55,68)] shadow-xl p-6 rounded-md w-[17%]  max-xl:w-[23%] max-lg:w-[40%]  max-sm:w-[80%]">
          <p className="text-gray-400">Most sales made in </p>
          <p className="text-white">{mostSaleMonth}</p>
        </div>
      </div>
    </>
  );
};

export default Stats;
