import { createSlice } from "@reduxjs/toolkit";
import { IDataUser, IRepo } from "../../interface";

const initialState: { dataUser: IDataUser; listData: IRepo[] } = {
  dataUser: {
    avatar: null,
    followers: 0,
    following: 0,
    location: "",

    title: "",
    description: "",
  },

  listData: [],
};

export const useDataRepo = createSlice({
  name: "list repo",
  initialState,
  reducers: {
    dataUser: (state, action) => {
      state.dataUser = action.payload;
    },
    listData: (state, action) => {
      state.listData = action.payload;
    },
  },
});

export const { dataUser, listData } = useDataRepo.actions;
export default useDataRepo.reducer;
