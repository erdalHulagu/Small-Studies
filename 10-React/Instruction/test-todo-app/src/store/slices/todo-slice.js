import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    add: (state, action) => {
      state.items.push({
        id: Date.now(),
        title: action.payload,
        completed: false
      });
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setState: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, completed: true } : item
      );
    },
  },
});

// reducer isimleri ile aynı olacak şekilde action lar otomatik oluşturulur
// ve export edilir
export const { add, remove, setState } = todoSlice.actions;

// reducer export edilir.
export default todoSlice.reducer;
