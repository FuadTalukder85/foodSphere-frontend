import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/AuthSlice";
import supplyReducer from "./features/supplyAppi/SupplySlice";
import volunteerReducer from "./features/volunteerApi/VolunteerSlice";
import testimonialsReducer from "./features/testimonialsApi/TestimonialsSlice";

import statsReducer from "./features/allStats/AllStatsSlice";
import { baseApi } from "./api/baseApi";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
};
const persistAuthReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistAuthReducer,
    supplies: supplyReducer,
    volunteer: volunteerReducer,
    testimonials: testimonialsReducer,
    allStats: statsReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
