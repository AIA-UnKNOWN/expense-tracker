import { createSlice } from '@reduxjs/toolkit';

type TABS = "expenses" | "topups";

interface TabsState {
  currentTab: TABS
}

interface Action {
  payload: {
    tab: TABS
  }
}

const initialState: TabsState = {
  currentTab: 'expenses'
}

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setCurrentTab: (state: TabsState, action: Action) => {
      state.currentTab = action.payload.tab;
    },
  }
});

export const { setCurrentTab } = tabsSlice.actions;
export default tabsSlice.reducer;