import React from "react";
import LottieView from "lottie-react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";

const { width: WIDTH } = Dimensions.get('window')

interface IGradientLoader {
  width?: number
  height?: number
  opacity?: number
  speed?: number
  backgroundColor?: string
}

export function GradientLoader(props: IGradientLoader) {
  const {
    width = WIDTH + 100,
    height = 2.5,
    opacity = 1,
    speed = 2,
    backgroundColor = "#f2f2f2"
  } = props;

  return (<View style={{ backgroundColor: backgroundColor }}>
    <LottieView resizeMode='cover' speed={speed} style={{ opacity, width, height }} source={require('./assets/loader.json')}
      autoPlay
      loop
    />
  </View>)
}
