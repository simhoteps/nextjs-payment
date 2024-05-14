import { IPackageType } from "@/types/types";
import {  createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface PackagesState {
    selectPackage: IPackageType[];
    totalPrice:number;
    packages: IPackageType[];
}

const initialState: PackagesState = {
    selectPackage: [],
    totalPrice:0,
    packages: [],
};

export const { actions, reducer } = createSlice({
  name: "packages",
  initialState,
  reducers: {
    setPackagesSelect: (state, action: PayloadAction<IPackageType>) => {
      if (state.selectPackage.find((item) => item._id === action.payload._id)) {
        state.selectPackage = state.selectPackage.filter(
          (k) => k._id !== action.payload._id
        );
        state.totalPrice = state.selectPackage.reduce(
          (acc, k) => acc + k.price,
          0
        );
    
      } else {
        state.selectPackage = [...state.selectPackage, action.payload];
        state.totalPrice = state.selectPackage.reduce(
          (acc, k) => acc + k.price,
          0
        );
      }
    },
  },
});

export const selectPackages = ({ packages }: { packages: PackagesState }) => packages;
