import { useDispatch, useSelector } from "react-redux";
import { setSelectedUserName } from "../store/filterReducer";

const Filter = () => {
  const userData = useSelector((state: any) => state.filterReducer.usersData);
  const userName = useSelector(
    (state: any) => state.filterReducer.selectedUserName
  );
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    const selectedName = event.target.value;
    console.log("SelectedName:", selectedName);
    dispatch(setSelectedUserName(selectedName));
  };

  console.log(userName, "lkjhguij");
  return (
    <>
      <select
        onChange={handleChange}
        className="border text-white bg-[rgb(48,55,68)] shadow-xl p-6   border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 hover:border-gray-400 transition duration-300"
      >
        {userData.map((item: any) => (
          <option
            key={item.userName}
            className="text-white"
            value={item.userName}
          >
            {item.userName}
          </option>
        ))}
      </select>
    </>
  );
};

export default Filter;
