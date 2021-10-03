import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { AppImage } from './Image'

export const AppImageList = ({photos, navigation}: {photos: any, navigation: any}) => {

    return <FlatList
        data={photos}
        keyExtractor={(el: any) => el.id.toString()}
        horizontal
        renderItem={({item}: {item: any}) => <AppImage photo={item} navigation={navigation}/>}
    />
}