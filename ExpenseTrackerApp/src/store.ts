import { configureStore } from '@reduxjs/toolkit';
import tabsSlice from './reducers/tabsSlice';

const store = configureStore({
  reducer: {
    tabs: tabsSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;