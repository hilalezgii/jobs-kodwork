import React from "react";
import LottieView from "lottie-react-native";
const Loading = () => {
    return <LottieView
        style={{ width: "100%", height: "100%" }}
        source={require('../../../assets/loading.json')}
        autoPlay
    />;
}

export default Loading;