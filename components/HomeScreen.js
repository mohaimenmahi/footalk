import * as React from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';

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
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 20}}>Next match: </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 20}}>Live event!</Text>
                    <Button
                        title="Comment now"
                        onPress={() => this.props.navigation.navigate('Comment')}
                    />
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('footalk', ()=> HomeScreen);
