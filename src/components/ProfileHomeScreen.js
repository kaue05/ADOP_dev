import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const ProfileHomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerPoints}>
                <Image
                    source={require('../../assets/images/user/icons8-rating-circled-100.png')}
                    style={styles.imagePoints}
                />
                <Text style={styles.textPointsUser}>1755</Text>
            </View>
            <Image
                source={require('../../assets/images/user/icons8-male-user-96.png')}
                style={styles.imageUser}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerPoints: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
    },
    imagePoints: {
        maxWidth: 30,
        maxHeight: 30,
        marginVertical: 25,
    },
    textPointsUser: {
        color: '#e5aa17',
        fontSize: 35,
        paddingVertical: 15,
    },
    imageUser: {
        maxWidth: 80,
        maxHeight: 80,
    }
})

export default ProfileHomeScreen;