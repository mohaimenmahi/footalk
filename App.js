import React from 'react';
import {AppRegistry, View, FlatList, StyleSheet, Text, Linking } from 'react-native';

export default class App extends React.Component {
  render() {
      return (
          <View  style={styles.container}>
              <Text>Here is the free Live Streaming Links!</Text>
              <FlatList
                  data={[
                      {name: 'Stream2Watch', key: 'https://www.stream2watch.org/soccer/'},
                      {name: 'Sports Category', key: 'http://www.sportcategory.com/c-1.html'},
                      {name: 'LaoLaOne TV', key: 'http://www.laola1.tv/en-int/channel/fussball'},
                      {name: 'SonyLiv', key: 'https://www.sonyliv.com/listing/sport_football_all'},
                      {name: 'Bosscast', key: 'http://bosscast.net/'},
                      {name: 'Batman Stream', key: 'https://www.batmanstream.net/'},
                      {name: 'Firsts Row Sports', key: 'http://firstsrowsports.tv/soccer'},
                      {name: 'LiveSport WS', key: 'https://livesport.ws/en/live-football'},
                  ]}
                  renderItem={({item}) => {
                      return (
                          <Text style={styles.item}
                            onPress={() => Linking.openURL(item.key)}
                          >
                              {item.name}
                          </Text>
                      );
                    }
                  }
              />
          </View>
      );
  }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 22,
        fontSize: 18
    },
    item: {
        padding: 10,
        fontSize: 14,
        height: 44
    }
})

AppRegistry.registerComponent('footalk', () => App);

