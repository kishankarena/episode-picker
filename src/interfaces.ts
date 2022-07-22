export interface IState {
  episodes: Array<any>;
  favourites: Array<any>;
}
export interface IAction {
  type: string;
  payload: any;
}

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: {
    self: {
      href: string;
    };
  };
}
export interface IEpisodeProps {
    episodes: Array<IEpisode>;
    toggleFavAction: (episode: IEpisode) => IAction;
    favourites: Array<IEpisode>;
  }