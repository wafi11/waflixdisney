import React, { useEffect, useState } from "react";
import { getMovieList, getMoviePoster } from "../libs/api";
import Main from "../components/ListAnime/main";
import Banner from "../components/ListAnime/Banner";
import ProductionHouse from "../components/ListAnime/ProductionHouse";

const Home = () => {
  const [Popular, setPopular] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => setPopular(result));
    getMoviePoster().then((result) => setBanner(result));
  }, []);

  return (
    <>
      <section>
        <Banner api={banner} />
        <ProductionHouse />
        <Main api={Popular} />
      </section>
    </>
  );
};

export default Home;
