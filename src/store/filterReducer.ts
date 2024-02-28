import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../utils/index";

// Define the type for a user object
interface User {
  userName: string;
  userVisit: number[];
  revenue: number[];
  sales: number[];
}

interface FilterState {
  usersData: User[];
  selectedUserName: string;
  filteredData: User[];
}

const initialState: FilterState = {
  usersData: data,
  selectedUserName: "",
  filteredData: [],
};

const filterData = createSlice({
  name: "filterReducer",
  initialState,
  reducers: {
    setSelectedUserName: (state, action: PayloadAction<string>) => {
      state.selectedUserName = action.payload;
      state.filteredData = state.usersData.filter(
        (user) => user.userName === action.payload
      );
    },
  },
});

export const { setSelectedUserName } = filterData.actions;

export default filterData.reducer;
