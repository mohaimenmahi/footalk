import * as React from 'react';
import { AppRegistry, View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default class MatchDetails extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('matchDate', 'Match Details'),
            headerStyle: {
                backgroundColor: '#9900ff'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        };
    };
    convertTimestamp = (timeStamp) => {
        const d = new Date(timeStamp*1000);
        let hh = d.getHours();
        let h = hh;
        let min = ('0'+ d.getMinutes()).slice(-2);
        let ampm  = "AM";

        if(hh > 12) {
            h = hh - 12;
            ampm = "PM";
        } else if (hh === 12) {
            h = 12;
            ampm = "PM";
        } else if(hh === 0) {
            h = 12;
        }

        const time = h + ':' + min + " " + ampm;

        return time;
    };
    render() {
        const { navigation } = this.props;
        const otherParam = navigation.getParam('otherParam', []);
        return (
            <View>
                <ScrollView>
                    {
                        otherParam.map((item, i) => {
                            return (
                                <View key={i} style={styles.container}>
                                    <Text style={{ fontSize: 24 }}>{item["group"]}</Text>
                                    <View>
                                        <Text style={{ fontSize: 20 }}>
                                            {item["team1"]}
                                            {' '}
                                            <Image
                                                style={{width: 45, height: 27}}
                                                source={{uri: item["flag1"]}}
                                            />
                                        </Text>
                                    </View>
                                    <Text style={{ fontSize: 18 }}>vs</Text>
                                    <View>
                                        <Text style={{ fontSize: 20 }}>
                                            {item["team2"]}
                                            {' '}
                                            <Image
                                                style={{width: 45, height: 27}}
                                                source={{uri: item["flag2"]}}
                                            />
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 20 }}>{this.convertTimestamp(item["time"])}</Text>
                                    </View>
                                    <Text style={{ fontSize: 18 }}>{item["place"]}</Text>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
        borderColor: '#ffffff',
        borderTopWidth: 4
    }
});

AppRegistry.registerComponent('footalk', ()=> MatchDetails);