import React, { Component } from 'react';
import { AppRegistry, View, ScrollView } from 'react-native';
import ShowDate from './ShowDate';
import { ListItem } from 'react-native-elements';
import schedule_json from '../data/schedule.json';

export default class ScheduleScreen extends Component {
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

AppRegistry.registerComponent('footalk', () => ScheduleScreen);