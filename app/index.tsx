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
      <Text testID="index-headline">Welcome!</Text>
      <Link testID="index-link-push-up" href="workouts/push-up">Push up</Link>
      <Link testID="index-link-plank" href="workouts/plank">Plank</Link>
    </View>
  );
}

export default Index;
