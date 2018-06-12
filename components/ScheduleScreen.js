import * as React from 'react';
import { AppRegistry, View, ScrollView } from 'react-native';
import ShowDate from './ShowDate';
import { ListItem } from 'react-native-elements';
import ScheduleJson from '../data/schedule.json';

export default class ScheduleScreen extends React.Component {
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
                        ScheduleJson.map((item, i) => {
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