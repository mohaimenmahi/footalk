import * as React from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default class HomeScreen extends React.Component {
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

AppRegistry.registerComponent('footalk', ()=> HomeScreen);
