import { Episode } from "./Episode";
import { RickAndMortyAPI } from "./RickAndMortyAPI";

export type FetchEpisodesFunction = (page: number) => Promise<RickAndMortyAPI>
export type SetEpisodesFunction = React.Dispatch<React.SetStateAction<Episode[]>>
export type SetPageFunction = React.Dispatch<React.SetStateAction<number>>
export type SetHasMoreEpisodes = React.Dispatch<React.SetStateAction<boolean>>

export interface FetchMoreEpisodesParams {
    page: number;
    fetchEpisodes: FetchEpisodesFunction;
    setEpisodes: SetEpisodesFunction;
    setPage: SetPageFunction;
    setHasMoreEpisodes: SetHasMoreEpisodes
}