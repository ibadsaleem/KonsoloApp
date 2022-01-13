import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Colab from './src/Screens/AchieveCollaborationScreen.js';
import ProgScreen from './src/Screens/AchieveProgressScreen.js';
import HomeScreen from './src/Screens/HomeScreen.js';
import AchieveScreen from './src/Screens/AchieveScreen.js';
import AchieveProgressMyJournal from './src/Screens/AchieveProgressMyJournal';
import AchieveProgressIteration from './src/Screens/AchieveProgressIterationScreen';
import AchievePause from './src/Screens/AchievePauseStreak';
import AchieveStart from './src/Screens/AchieveStartStreak';
import StreakPaused from './src/Screens/AchieveStreakPaused';
import StreakStarted from './src/Screens/AchieveStreakStarted';
import StartOver from './src/Screens/AchieveStartOver';
import AchieveDeepWork from './src/Screens/AchieveDeepWorkMode';
import AchieveDailyWork from './src/Screens/AchieveProgressDailyProductivity';
import ModalCheck from './src/Screens/ModalCheck.js';
const App= () => {

  return (
    <View >
      {/* <ProgScreen/> */}
      {/* <AchieveDeepWork/> */}
      {/* <AchieveDailyWork/> */}
      {/* <AchievePause/> */}
      {/* <AchieveStart/> */}
      {/* <StreakPaused/> */}
      {/* <StreakStarted/> */}
      {/* <StartOver/> */}
      {/* <Colab/> */}
      {/* <HomeScreen/> */}
      {/* <AchieveScreen/> */}
      {/* <AchieveProgressMyJournal/> */}
      {/* <AchieveProgressIteration/> */}
      <ModalCheck/>
    </View>
  );
};

export default App;
