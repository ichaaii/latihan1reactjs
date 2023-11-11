import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import { RouterList } from "./routes/RouterList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store from "../src/redux/store/store";
import { Provider } from "react-redux";

//klo pake query harus pake ini
const queryMovie = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryMovie}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_GOOGLE_ID}>
          <ToastContainer />
          <RouterList />
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
