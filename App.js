import React, { Component } from 'react';
import {AppRegistry, View, Text, ScrollView } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import schedule_json from './data/schedule.json'

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

class ScheduleScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: ''
        };
    }
    componentDidMount() {
        return <ShowDate title={this.state.title}/>;
    }
    static navigationOptions = {
        title: 'Schedule',
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
            <View>
                <ScrollView>
                {
                    schedule_json.map((item, i) => {
                        this.setState({title: item.title});
                        return (
                            <ListItem
                                key={i}
                                leftAvatar={{source: {uri: item.avatar_url}}}
                                title={item.title}
                                onPress={() => this.props.navigation.navigate('Dates')}
                            />
                        );
                    })
                }
                </ScrollView>
            </View>
        );
    }
}

class ShowDate extends Component {
    static navigationOptions = {
        title: 'Match Dates',
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
            <View>
                <ScrollView>
                {
                    schedule_json.map((item, i) =>{
                        if(item.title === this.props.title) {
                            return (
                                item.schedule.map((dd, i) => (
                                    <ListItem
                                        key={i}
                                        leftAvatar={{source: {uri: item.avatar_url}}}
                                        title={dd.date}
                                    />
                                ))
                            );
                        }
                    })
                }
                </ScrollView>
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
        Schedule: { screen: ScheduleScreen},
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

