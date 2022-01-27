import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BackToMainHeader from "../components/reusable/BackToMainHeader";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const AboutJahezScreen = () => {
  return (
    <>
      <BackToMainHeader title={"عن جاهز"} />
      <View style={styles.container}>
        <Text style={{ color: "gray", fontSize: 18 }}>
          جاهز هي منصة الكترونية تربط بين مقدمي خدمة الطعام ( مطاعم ، اكل بيت )
          و بين المشتري . جاهز يقدم خدمة التوصيل و متابعة الطلب بشكل دقيق . يتيح
          لك تطبيق جاهز مراقبة طلباتك ، ويتيح للمقدمي الخدمة من متابعة الطلبات و
          تحديد اماكن الخدمة و مراقبة المبيعات من داخل المنصة.
        </Text>
        <View style={styles.socialmediaContainer}>
          <View style={styles.singleInfo}>
            <AntDesign name="twitter" size={30} color="#1DA1F2" />
            <Text style={{ marginLeft: 5, fontSize: 18, color: "#1DA1F2" }}>
              Jahezapp
            </Text>
          </View>
          <View style={styles.singleInfo}>
            <FontAwesome name="instagram" size={30} color="black" />
            <Text style={{ marginLeft: 5, fontSize: 18 }}>Jahezapp</Text>
          </View>
        </View>
        <View style={styles.callButton}>
          <Text style={{ color: "red" }}>اتصل بنا</Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  socialmediaContainer: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
  singleInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  callButton: {
    padding: 10,
    alignItems: "center",
    borderColor: "lightgray",
    borderWidth: 1,
  },
});

export default AboutJahezScreen;
