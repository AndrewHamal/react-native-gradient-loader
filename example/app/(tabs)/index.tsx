import React from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-next-carousel";
import { GradientLoader } from "react-native-gradient-loader";

const { height } = Dimensions.get('screen')

export default function HomeScreen() {

  const imageUrls = [
    { title: 'First Slide', img: 'https://plus.unsplash.com/premium_photo-1664546293816-191e0566f19e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Second Slide', img: 'https://plus.unsplash.com/premium_photo-1683134105531-42032fc66937?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Third Slide', img: 'https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ]

  return (
    <View style={{ backgroundColor: "#C1E2A4", flex: 1, height: height }}>
      <GradientLoader
        speed={2}
        opacity={1}
        height={4}
        backgroundColor={"#f2f2f2"}
      />

      <View style={{ paddingVertical: 30 }}>
        <Carousel
          data={imageUrls}
          rounded={30}
          height={320}
          imageGap={15}
          imageObj={'img'}
          imageOffset={120}
          paddingHorizontal={20}
        />
      </View>
    </View>
  );
}

