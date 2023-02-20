import { Text, View } from "react-native";
import { Episode } from "../../interfaces/Episode";
import { styles } from "./styles";


const EpisodeItem: React.FC<Episode> = ({ name, episode, air_date }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name} - {episode}</Text>
            <Text style={styles.air_date}>{air_date}</Text>
        </View>
    );
}

export default EpisodeItem;