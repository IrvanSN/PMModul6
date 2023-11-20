import React, { PureComponent } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

// Mendapatkan width dari screen
const windowWidth = Dimensions.get("window").width;

// Membuat screen News yang mengextend dari PureComponent
// Disini menerapkan usecase aplikasi news
class News extends PureComponent {
  // Menginisialisasi constructor
  constructor(props) {
    super(props);

    // Menginisialisasi state yang nanti akan digunakan
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  // Fungsi untuk mendapatkan data dari API
  async getNews() {
    try {
      const response = await fetch(
          "https://api-berita-indonesia.vercel.app/cnn/teknologi"
      );
      const json = await response.json();
      this.setState({ data: json.data.posts });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  // Ketika di lifecycle componentDidMount maka panggil fungsi getNews
  componentDidMount() {
    this.getNews();
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;

    return (
        <>
          <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("NewsDetail", { data: item })}
          >
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.itemBorder}></View>
        </>
    );
  };

  render() {
    // destructuring state agar mudah dipakai
    const { data, isLoading } = this.state;

    return (
        <View style={styles.container}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>Irvan Surya Nugraha</Text>
            <Text>1203210007</Text>
          </View>
          {isLoading ? (
              <ActivityIndicator size="large" color="#AA0002" />
          ) : (
              <FlatList
                  data={data}
                  keyExtractor={({ link }, index) => link}
                  renderItem={this.renderItem}
              />
          )}
        </View>
    );
  }
}

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    padding: 20,
    backgroundColor: "white",
  },
  itemBorder: {
    borderWidth: 0.5,
    borderColor: "#cccccc",
  },
  itemImage: {
    width: 100,
    height: 80,
  },
  itemText: {
    fontSize: 20,
    width: windowWidth - 150,
    marginLeft: 15,
  },
});

