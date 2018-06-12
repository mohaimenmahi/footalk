import * as React from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';

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
        return (
            <View>
                <Text>There will be details</Text>
                <Button
                    title="Back to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('footalk', ()=> MatchDetails);