import React from 'react';
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RangePicker from '@/components/RangePicker';

const CURRENT_SET = 1;
const SETS = 2;
const REPS = 10;

export const Workout = () => {
  const [set,] = React.useState<number>(CURRENT_SET);
  const [reps, setReps] = React.useState<number>(REPS);
  const [isPickerVisible, setIsPickerVisible] = React.useState<boolean>(false);

  const { workout } = useLocalSearchParams();
  const workoutName = String(workout ?? '');

  const navigation = useNavigation();
  React.useEffect(() => {
    navigation.setOptions({ headerTitle: workoutName.toUpperCase() });
  }, [navigation]);

  const updateRepsAndHidePicker = (v: number) => {
    setReps(v);
    setIsPickerVisible(false);
  };

  return (
    <View style={styles.container}>
      <VideoTutorial />
      <WorkoutProgress title={workoutName} totalSets={SETS} currentSet={set} />
      <ProgressControl reps={reps} onPress={() => setIsPickerVisible(true)} />
      <Modal
        transparent
        animationType="slide"
        visible={isPickerVisible}
        onRequestClose={() => setIsPickerVisible(false)}
      >
        <View
          style={{
            flex: 1,
            height: '30%',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
        <View
          style={{
            backgroundColor: '#FFF',
          }}
        >
          <RangePicker
            testID="reps-modal-picker"
            value={reps}
            onValueChange={updateRepsAndHidePicker}
          />
        </View>
        </View>
      </Modal>
    </View>
  );
};

const VideoTutorial = () => (
  <View testID="workout-video-tutorial" style={styles.video}>
    <Text>(Video section)</Text>
  </View>
);

const WorkoutProgress = ({ title, currentSet, totalSets }: { title: string; currentSet: number, totalSets: number }) => (
  <View style={styles.workoutContainer}>
    <Text testID="workout-progress-name" style={styles.workoutTitle}>{title}</Text>
    <Text>SET {currentSet} / {totalSets}</Text>
  </View>
);

const ProgressControl = ({ reps, onPress = () => {} }: { reps: number, onPress: () => void }) => (
  <View testID="workout-control" style={styles.controlContainer}>
    <Button title="<" onPress={() => {/* move to previous workout */}} />
    <TouchableOpacity testID="workout-control-reps-button" onPress={onPress}>
      <View style={styles.repsIndicator}>
        <View>
          <Text testID="workout-control-reps-count">{reps}</Text>
        </View>
        <View>
          <Text>REPS</Text>
        </View>
      </View>
    </TouchableOpacity>
    <Button title=">" onPress={() => {/* move to next workout */}} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 240,
    backgroundColor: '#777',
    justifyContent: 'center',
    alignItems: 'center',
  },
  workoutContainer: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  workoutTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  controlContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  repsIndicator: {
    flexDirection: 'column',
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: '#FAA',
  },
});

export default Workout;
