import * as React from 'react';
import { AppRegistry, View, Text, Button, ScrollView } from 'react-native';

export default class MatchDetails extends React.Component {
    static navigationOptions = {
        title: 'Match Details',
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
        const otherParam = navigation.getParam('otherParam', []);
        return (
            <View>
                <ScrollView>
                    {
                        otherParam.map((item) => {
                            return (
                                <View>
                                    <View>{item.group}</View>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

AppRegistry.registerComponent('footalk', ()=> MatchDetails);