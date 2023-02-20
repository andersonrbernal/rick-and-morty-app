import axios from "axios";
import { ListRenderItem } from "react-native/types";
import { Episode } from "../../interfaces/Episode";
import { FetchMoreEpisodesParams } from "../../interfaces/FetchMoreEpisodesParams";
import { RickAndMortyAPI } from "../../interfaces/RickAndMortyAPI";
import EpisodeItem from "../EpisodeItem";

const fetchEpisodes = async (page: number) => {
    const { data } = await axios.get<RickAndMortyAPI>(`https://rickandmortyapi.com/api/episode?page=${page}`)
    return data;
}

const fetchMoreEpisodes = async ({
    page,
    fetchEpisodes,
    setEpisodes,
    setPage,
    setHasMoreEpisodes
}: FetchMoreEpisodesParams) => {
    setPage((prevPage) => prevPage + 1);
    const newEpisodes = await fetchEpisodes(page);

    if (newEpisodes.info?.next) {
        setEpisodes((prevEpisodes) => [...prevEpisodes, ...newEpisodes.results]);
        return;
    }

    setHasMoreEpisodes(false)
};


const renderItem: ListRenderItem<Episode> = ({ item }) => <EpisodeItem {...item} />

export { fetchEpisodes, fetchMoreEpisodes, renderItem }