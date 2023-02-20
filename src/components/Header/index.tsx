import { Image, Text, View } from "react-native";
import { styles } from "./styles";

const Header = () => {
    return (
        <View>
            <Image
                style={styles.image}
                source={require('../../assets/images/cover.jpeg')}
            />
            <Text style={styles.title}>Rick and Morty</Text>
        </View>
    );
}



export default Header;