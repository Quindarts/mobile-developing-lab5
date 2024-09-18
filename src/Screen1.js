import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const colors = {
  black: require("../assets/black.png"),
  blue: require("../assets/blue.png"),
  red: require("../assets/red.png"),
  white: require("../assets/white.png"),
};
export default function Screen1() {
  const navigation = useNavigation();
  const [currentCl, setCurrentCl] = useState("black");

  const handleCl = (color) => {
    setCurrentCl(color);
  };
  return (
    <View style={styles.card}>
      <Image
        source={colors[currentCl]}
        style={styles.image}
        alt="Vsmart Joy 3 smartphone"
      />
      <Text style={styles.title}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>★★★★☆</Text>
        <Text style={styles.reviewCount}>(Xem 828 đánh giá)</Text>
      </View>
      <Text style={styles.price}>1.790.000 ₫</Text>
      <Text style={styles.oldPrice}>1.790.000 ₫</Text>
      <Text style={styles.promoText}>Ở đâu rẻ hơn hoàn tiền</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Chọn Mua</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Screen2", {
            handleCl: handleCl,
            currentCl: currentCl,
          })
        }
        style={styles.colorButton}
      >
        <Text style={styles.colorButtonText}>4 MÀU - CHỌN LOẠI</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: "auto",
    backgroundColor: "#f8f9fa", // bg-card
    borderColor: "#e0e0e0", // border-border
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 16,
    width: "100vw",
    height: "100vh",
  },
  image: {
    width: 310,
    height: 361,
    objectFit: "contain",
  },
  title: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: "600",
    color: "#000", // text-foreground
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  rating: {
    color: "#ffc107", // text-yellow-400
  },
  reviewCount: {
    marginLeft: 8,
    fontSize: 12,
    color: "#6c757d", // text-muted
  },
  price: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: "#007bff", // text-primary
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "#6c757d", // text-muted
  },
  promoText: {
    marginTop: 8,
    fontSize: 12,
    color: "red", // text-muted
  },
  button: {
    marginTop: 16,
    backgroundColor: "red", // bg-secondary
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff", // text-secondary-foreground
    textAlign: "center",
  },
  colorButton: {
    marginTop: 8,
    borderColor: "#6c757d", // border-muted
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  colorButtonText: {
    color: "#6c757d", // text-muted
    textAlign: "center",
  },
  footer: {
    marginTop: 8,
    backgroundColor: "#17a2b8", // bg-accent
    paddingVertical: 8,
    borderRadius: 8,
  },
  footerText: {
    color: "#fff", // text-accent-foreground
    textAlign: "center",
  },
});
