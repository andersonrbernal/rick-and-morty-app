import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, StyleSheet } from "react-native"
import { Episode } from "../../interfaces/Episode"
import { FetchMoreEpisodesParams } from "../../interfaces/FetchMoreEpisodesParams"
import Header from "../Header"
import { fetchEpisodes, fetchMoreEpisodes, renderItem } from "./utils"



const EpisodeList = () => {
    const [episodes, setEpisodes] = useState<Episode[]>([])
    const [page, setPage] = useState<number>(1)
    const [hasMoreEpisodes, setHasMoreEpisodes] = useState(true)
    const flatListArgs: FetchMoreEpisodesParams = {
        page, fetchEpisodes,
        setEpisodes, setPage,
        setHasMoreEpisodes
    };

    useEffect(() => {
        if (hasMoreEpisodes) fetchEpisodes(page).then(episodes => setEpisodes(episodes.results));
    }, [])

    return (
        <FlatList
            keyExtractor={episode => episode.id.toString()}
            ListHeaderComponent={Header}
            ListFooterComponent={Loader({ loading: hasMoreEpisodes })}
            onEndReached={() => fetchMoreEpisodes(flatListArgs)}
            onEndReachedThreshold={0.1}
            data={episodes}
            renderItem={renderItem}
        />
    )
}

const Loader = ({ loading }: { loading: boolean }) => {
    if (loading) {
        return <ActivityIndicator style={styles.loader} size='large' color='#F4439D' />
    }
    return null
}

const styles = StyleSheet.create({
    loader: {
        padding: 10
    }
})

export default EpisodeList;