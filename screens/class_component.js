import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";

// Membuat screen dengan class component
class ClassComponent extends Component {
  // Menginisialisasi constructor pada class
  constructor(props) {
    super(props);

    // Menginisialisasi state
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  // Menginisialisasi fungsi untuk memanggil API
  async getMovies() {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      this.setState({ data: json.movies });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  // componenDidMount sama dengan useEffect ketika di functional component
  componentDidMount() {
    this.getMovies();
  }

  // fungsi untuk merender data movie
  renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>
            {item.title}, {item.releaseYear}
          </Text>
        </TouchableOpacity>
    );
  };

  // menggunakan fungsi render untuk merender component
  render() {
    // destructuring state dari component
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
                  keyExtractor={({ id }, index) => id}
                  renderItem={this.renderItem}
              />
          )}
        </View>
    );
  }
}

export default ClassComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  item: {
    borderBottomWidth: 1,
    padding: 15,
  },
  itemText: {
    fontSize: 20,
  },
});
