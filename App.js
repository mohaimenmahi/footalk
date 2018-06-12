import * as React from 'react';
import {AppRegistry, View, Text } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import ShowDate from './components/ShowDate';
import ScheduleScreen from './components/ScheduleScreen';
import MatchDetails from './components/MatchDetails';
import HomeScreen from './components/HomeScreen';

const HomeStack = createStackNavigator(
    {
        Home: { screen: HomeScreen }
    }
);

const ScheduleStack = createStackNavigator(
    {
        Schedule: { screen: ScheduleScreen },
        Dates: { screen: ShowDate },
        Details: { screen: MatchDetails }
    }
);

const RootStack = createBottomTabNavigator(
    {
        Home: HomeStack,
        Schedule: ScheduleStack
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#9900ff',
            inactiveBackgroundColor: '#9900cc',
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#FFFFFF',

        }
    }
);

export default class App extends React.Component {
    render() {
        return (
            <RootStack />
        );
    }
}

AppRegistry.registerComponent('footalk', () => App);

