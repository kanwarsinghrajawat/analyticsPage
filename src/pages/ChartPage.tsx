import { useSelector } from "react-redux";
import ChartGraph from "../components/ChartGraph";
import { backgroundColor } from "../utils";

const ChartPage = () => {
  const initialData = useSelector(
    (state: any) => state.filterReducer.usersData
  );
  const userData = useSelector(
    (state: any) => state.filterReducer.filteredData
  );

  return (
    <>
      <div className="flex flex-wrap gap-16 justify-center ">
        <ChartGraph
          types="line"
          datasets={[
            {
              label: "User Activity",
              data:
                userData.length < 1
                  ? initialData[0].userVisit
                  : userData[0]?.userVisit,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              lineTension: 0.1,
            },
          ]}
        />
        <ChartGraph
          types="pie"
          datasets={[
            {
              label: "Revenue",
              data:
                userData.length < 1
                  ? initialData[0].revenue
                  : userData[0]?.revenue,
              backgroundColor: backgroundColor,
            },
          ]}
        />
        <ChartGraph
          types="bar"
          datasets={[
            {
              label: "Sales",
              data:
                userData.length < 1 ? initialData[0].sales : userData[0]?.sales,
              backgroundColor: "rgb(75, 192, 192)",
              borderColor: "rgb(75, 192, 192)",
              borderWidth: 1,
            },
          ]}
        />
      </div>
    </>
  );
};

export default ChartPage;
