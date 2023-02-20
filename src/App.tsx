import { View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { EpisodeList } from "./components";
import { styles } from "./styles/app";

const App = () => {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <View style={styles.container}>
        <EpisodeList />
      </View>
    </QueryClientProvider>
  );
}

export default App;