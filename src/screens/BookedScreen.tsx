import {StyleSheet, View, FlatList} from 'react-native'
import React from "react";
import {  useSelector } from "react-redux";
import { RootState } from "../store";
import AppHeader from '../components/Header';
import { AppImage } from '../components/Image';

export const BookedScreen = ({navigation}: {navigation: any}) => {

    const photos = useSelector((state: RootState) => state.gallery.photos).filter((p: any) => p.booked )
    
    if (photos.length) return (
        <View style={styles.container}>
            <FlatList
            data={photos}
            numColumns={4}
            keyExtractor={(el: any, index: number) => index.toString()}
            renderItem={({item}: {item: any}) => <AppImage photo={item} navigation={navigation}/>}/>
        </View>
    );

    return null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10
    }
});


BookedScreen.navigationOptions = () => ({
    header: (props: any) => <AppHeader {...props}/>,
    headerTitle: 'Избранное'
})