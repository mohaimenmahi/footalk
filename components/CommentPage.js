import * as React from 'react';
import { View, AppRegistry, TextInput, ScrollView, Button, Text } from 'react-native';

export default class CommentPage extends React.Component {
    constructor(props) {
        super(props);

        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);

        this.state = {
            newComment: '',
            comments: []
        };
    }
    onHandleChange(e) {
        this.setState({ newComment: e.target.value });
    }
    onHandleSubmit(e) {
        e.preventDefault();
        let comment = this.state.newComment;
        e.target.value = '';
        let newArr = this.state.comments.slice();
        newArr.push(comment); // pushing a new comment on the comments[] state
        this.setState({comments: newArr});
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
                        onChange={() => this.onHandleChange}
                    />
                    <Button
                        title="Submit"
                        onPress={() => this.onHandleSubmit}
                    />
                    <View>
                        {
                            this.state.comments.map((com, i) => <Text key={i}>{com}</Text>) // showing new + previous comment. this would be in the top of the page
                        }
                    </View>
                </View>
            </ScrollView>
        );
    }
}

AppRegistry.registerComponent('footalk', () => CommentPage);