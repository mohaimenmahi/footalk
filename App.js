import React, { Component } from 'react';
import {AppRegistry, View, Text } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import ShowDate from './components/ShowDate';
import ScheduleScreen from './components/ScheduleScreen';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#9900ff'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    };
    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>This is Footalk Home</Text>
            </View>
        );
    }
}

const HomeStack = createStackNavigator(
    {
        Home: { screen: HomeScreen }
    }
);

const ScheduleStack = createStackNavigator(
    {
        Schedule: { screen: ScheduleScreen },
        Dates: { screen: ShowDate }
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

