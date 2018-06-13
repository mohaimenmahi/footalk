import * as React from 'react';
import { AppRegistry, View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import ScheduleJson from '../data/schedule.json'

export default class ShowDate extends React.Component {
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
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        return (
            <View>
                <ScrollView>
                    {
                        ScheduleJson.map((item, idx) => {
                            if(JSON.stringify(itemId) === idx) {
                                return (
                                    item.schedule.map((dd, i) => {
                                        return (
                                            <ListItem
                                                key={i}
                                                leftAvatar={{source: {uri: item.avatar_url}}}
                                                title={dd.date}
                                                onPress={() => this.props.navigation.navigate('Details')}
                                            />
                                        );
                                    })
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