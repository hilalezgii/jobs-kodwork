import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        list: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            const isUnique = state.list.find(listItem => listItem.id === action.payload.id);
            if (!isUnique) {
                state.list.push(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            state.list = state.list.filter(listItem => listItem.id !== action.payload.id);
        }

    }
})
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;