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
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [customMessage, setCustomMessage] = useState("");
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

  const celebrate = () => {
    if (name && message) {
      setCustomMessage(`🎉 Happy Birthday, ${name}! 🎂\n${message}`);
    } else {
      setCustomMessage("Please enter both your Name and a Message.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2f184b" style="light" />
      <View style={styles.whiteContainer}>
        <Text style={styles.title}>Birthday Card!!!</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Message"
          placeholderTextColor="#999"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Upload An Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={celebrate}>
          <Text style={styles.buttonText}>Create Card</Text>
        </TouchableOpacity>
        {customMessage && (
          <Text style={styles.customMessage}>{customMessage}</Text>
        )}
      </View>
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
  whiteContainer: {
    width: "90%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2f184b",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    width: "100%",
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
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
  },
  customMessage: {
    fontSize: 18,
    color: "#2f184b",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
