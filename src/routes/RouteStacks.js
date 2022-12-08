import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "@/src/routes/PrivateRoute";
import { Navigate } from "react-router-dom";
import URLS from "@/src/enums/urls";

// import { useStore } from "react-redux";

// pages
const Page404 = lazy(() => import("../pages/404"));
const Home = lazy(() => import("../pages/Home"));
const Transaksi = lazy(() => import("../pages/Transaksi"));
const Akun = lazy(() => import("../pages/Akun"));
const Notifikasi = lazy(() => import("../pages/Notifikasi"));

const RouteStacks = () => {
  // const store = useStore();
  // const loggedIn = () => {
  //   const token = AUTH_GETTERS.loginToken(store.getState());
  //   return token.length > 0;
  // };
  // const loggedOut = () => {
  //   const token = AUTH_GETTERS.loginToken(store.getState());
  //   return token === "";
  // };

  const loggedIn = () => {
    const token = localStorage.getItem("token") || "";
    return token.length > 0;
  };
  const loggedOut = () => {
    const token = localStorage.getItem("token") || "";
    return token === "";
  };

  return (
    <Routes>
      <Route exact path={URLS.LANDING} element={<Navigate to={URLS.HOME} />} />

      <Route path={URLS.HOME} element={<Home />} />

      <Route
        path={URLS.AKUN}
        element={
          <PrivateRoute
            path={URLS.AKUN}
            allow={[loggedOut]}
            navigateTo={URLS.AKUN}
          >
            <Akun />
          </PrivateRoute>
        }
      />

      <Route
        path={URLS.TRANSAKSI}
        element={
          <PrivateRoute
            path={URLS.TRANSAKSI}
            allow={[loggedIn]}
            navigateTo={URLS.AUTH}
          >
            <Transaksi />
          </PrivateRoute>
        }
      />
      <Route
        path={URLS.NOTIFIKASI}
        element={
          <PrivateRoute
            path={URLS.NOTIFIKASI}
            allow={[loggedIn]}
            navigateTo={URLS.AUTH}
          >
            <Notifikasi />
          </PrivateRoute>
        }
      />

      {/* keep  <Route path="*"> being the last of siblings */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
export default RouteStacks;
