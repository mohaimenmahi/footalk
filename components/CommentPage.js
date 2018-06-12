import * as React from 'react';
import { View, AppRegistry, TextInput, ScrollView } from 'react-native';

export default class CommentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newComment: ''
        };
    }
    static navigationOptions = {
        title: 'Comment',
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
            <ScrollView>
                <View>
                    <TextInput
                        placeholder="Write something"
                        style={{height: 80}}
                        onChangeText={(text) => this.setState({newComment: text })}
                    />
                </View>
            </ScrollView>
        );
    }
}

AppRegistry.registerComponent('footalk', () => CommentPage);