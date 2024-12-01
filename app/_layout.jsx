import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";

export default function RootLayout() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2f184b" style="light" />
      <Text style={styles.title}>It's A Birthday Celebration!!!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Message"
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Upload An Image</Text>
      </TouchableOpacity>
      {image && (
        <Image source={{ uri: image }} style={styles.image} />
      )}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Celebrate</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c8b1e4",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#10002b",
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: "80%",
    borderColor: "#f2ebfb",
    borderWidth: 1,
    borderRadius: 25, 
    paddingHorizontal: 10,
    color: "#10002b",
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2f184b",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginTop: 20,
  },
});
