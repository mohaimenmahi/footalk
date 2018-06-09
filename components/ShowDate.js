import React, { Component } from 'react';
import { AppRegistry, View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import schedule_json from '../data/schedule.json'

export default class ShowDate extends Component {
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

AppRegistry.registerComponent('footalk', () => ShowDate);