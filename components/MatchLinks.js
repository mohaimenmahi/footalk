import React from 'react';
import { View, Text, AppRegistry, FlatList, StyleSheet } from 'react-native';

export default class MatchLinks extends React.Component {
    render() {
        return (
            <View>
                <Text style={style.container}><h3>Here is the free Live Streaming Links!</h3></Text>
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
                    renderItem={({item}) => <Text style={styles.item}><a href={item.key}>{item.name}</a></Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
})

AppRegistry.registerComponent('footalk', () => MatchLinks);