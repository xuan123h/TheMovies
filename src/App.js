import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";
import MoviePage from "./pages/MoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage />
                <Navbar />
                <Contact />
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage />}></Route>
          <Route path="/movie/:movieId" element={<MovieDetailsPage />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}
export default App;

// Main duoc su dung o moi noi
