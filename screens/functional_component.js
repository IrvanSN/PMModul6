import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";

// Membuat screen dengan functional component
const FunctionalComponent = () => {
  // Membuat state loading untuk mengatur loading screen
  const [isLoading, setLoading] = useState(true);
  // Membuat state data untuk mengatur data yang diambil dari API
  const [data, setData] = useState([]);

  // Fungsi untuk mengambil data dari API menggunakan method dari promise
  const getMoviesWithPromise = () => {
    // Menggunakan fetch untuk memanggil API
    return fetch("https://reactnative.dev/movies.json")
        // Mengkonversi response ke dalam bentuk json
        .then((response) => response.json())
        // Mengatur state data dari response yang diberikan oleh API
        .then((json) => setData(json.movies))
        // Jika ada error maka keluarkan error ke console
        .catch((error) => console.error(error))
        // Jika semua selesai maka atur state loading ke false
        .finally(() => setLoading(false));
  };

  // Fungsi untuk mengambil data dari API menggunakan async/await
  const getMoviesWithAsyncAwait = async () => {
    // membuat block try/catch untuk menangkap jika response dari API berhasil
    // maka akan masuk ke dalam block try jika tidak berhasil maka akan masuk ke
    // catch block
    // jika semuanya selesai di proses akan masuk ke block finally
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Komponen untuk merender setiap item/judul movies
  // Menerima parameter object item untuk data movie
  const renderItem = ({ item }) => {
    return (
        // Menggunakan komponen TouchableOpacity agar bisa ditekan
        <TouchableOpacity style={styles.item}>
          {/*Di dalam teks print data title dan releaseYear dari data movie*/}
          <Text style={styles.itemText}>
            {item.title}, {item.releaseYear}
          </Text>
        </TouchableOpacity>
    );
  };

  // useEffect jika deps tidak ada isinya maka akan di jalankan fungsinya sekali saat
  // lifecycle componentDidMount
  useEffect(() => {
    // getMoviesWithAsyncAwait();
    getMoviesWithPromise();
  }, []);

  return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Irvan Surya Nugraha</Text>
          <Text>1203210007</Text>
        </View>
        {/*jika isLoading true maka keluarkan komponen ActivityIndicator*/}
        {isLoading ? (
            <ActivityIndicator size="large" color="#AA0002" />
        ) : (
            // Jika tidak maka akan keluarkan komponen FlatList
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={renderItem}
            />
        )}
      </View>
  );
};

export default FunctionalComponent;

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
