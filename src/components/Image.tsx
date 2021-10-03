import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width - 30
const imageSize = windowWidth / 4

export const AppImage = ({photo, navigation}: {photo: any, navigation: any}) => {

    return <TouchableOpacity onPress={() => {navigation.navigate('Photo', {photo})}}>
        <View style={styles.imageContainer}>
            <Image
                source={{uri: photo.src.small}}
                style={styles.image}
            />
            {photo.booked
                ?
                <Text style={styles.hearthIcon}>❤</Text>
                :
            null}
        </View>
    </TouchableOpacity>
    
}

const styles = StyleSheet.create({
    image: {
        display: "flex",
        width: imageSize,
        height: imageSize,
        borderRadius: 10,
        margin: 2,
        backgroundColor: 'red'
    },
    hearthIcon: {
        position: "absolute",
        bottom: 2,
        left: 4,
    },
    imageContainer: {
        width: imageSize + 4,
        height: imageSize + 4,
    }
});