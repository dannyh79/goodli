import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Index = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Welcome!</Text>
      <Link href="workouts/push-up">Push up</Link>
      <Link href="workouts/plank">Plank</Link>
    </View>
  );
}

export default Index;
