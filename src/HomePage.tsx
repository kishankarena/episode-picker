import React, { Suspense, useContext, useEffect } from "react";
import { URL } from "./constants";
import { IAction, IEpisode, IEpisodeProps } from "./interfaces";
import { store } from "./Store";

const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));

const HomePage = () => {
  const { state, dispatch } = useContext(store);
  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    };
    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter(
        (favEp: IEpisode) => favEp.id !== episode.id
      );

      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode,
      };
    }

    return dispatch(dispatchObj);
  };
  const props: IEpisodeProps = {
    episodes: state.episodes,
    toggleFavAction: toggleFavAction,
    favourites: state.favourites,
  };
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </Suspense>
    </>
  );
};

export default HomePage;
