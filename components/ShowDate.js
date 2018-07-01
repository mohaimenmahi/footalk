import * as React from 'react';
import { AppRegistry, View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class ShowDate extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
          title: navigation.getParam('navBar', 'Match Dates'),
          headerStyle: {
              backgroundColor: '#9900ff'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
              fontWeight: 'bold'
          }
      };
    };
    render() {
        const { navigation } = this.props;
        const scheduledMatch = navigation.getParam('scheduledMatch', []);
        return (
            <View>
                <ScrollView>
                    {
                        scheduledMatch.map((dd, i) => {
                            return (
                                <ListItem
                                    key={i}
                                    leftAvatar={{source: {uri: dd.avatar_url}}}
                                    title={dd.date}
                                    onPress={() => this.props.navigation.navigate('Details', {
                                        otherParam: dd.matches,
                                        matchDate: dd.date
                                    })}
                                />
                            );
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

AppRegistry.registerComponent('footalk', () => ShowDate);