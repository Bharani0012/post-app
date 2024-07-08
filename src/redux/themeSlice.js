import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkTheme: false
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme;
            localStorage.setItem('isDarkTheme', JSON.stringify(state.isDarkTheme));
        },
        loadTheme: (state) => {
            try {
                const savedTheme = JSON.parse(localStorage.getItem('isDarkTheme'));
                if (savedTheme !== null) {
                    state.isDarkTheme = savedTheme;
                }
            } catch (e) {
                console.error('Failed to parse isDarkTheme from localStorage', e);
                state.isDarkTheme = false;
            }
        }
    }
});

export const { toggleTheme, loadTheme } = themeSlice.actions;
export default themeSlice.reducer;
