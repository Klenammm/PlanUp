// app/index.jsx
import { View, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/HomeScreen'); // or your main screen
    }, 3000); // 3 seconds splash

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/splash.png')} // Move your image here
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
