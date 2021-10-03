import {StyleSheet, View, FlatList, ActivityIndicator, Text} from 'react-native'
import React from "react";
import {  useSelector } from "react-redux";
import { RootState } from "../store";
import AppHeader from '../components/Header';
import { AppImage } from '../components/Image';
import { Photo } from '../interfaces';

export const BookedScreen = ({navigation}: {navigation: any}) => {

    const photos = useSelector((state: RootState) => state.gallery.photos).filter((p: any) => p.booked )
    const loader = useSelector((state: RootState) => state.gallery.loader)

    if (photos.length) return (
        <View style={styles.container}>
            <FlatList
            data={photos}
            numColumns={4}
            keyExtractor={(el: Photo, index: number) => index.toString()}
            renderItem={({item}: {item: Photo}) => <AppImage photo={item} navigation={navigation}/>}/>
        </View>
    );

    if (loader) return <View style={styles.center}>
                <ActivityIndicator color='#A10D99'/>
            </View>

    return <View style={styles.center}>
            <Text>Нет избранных</Text>
        </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


BookedScreen.navigationOptions = () => ({
    header: (props: any) => <AppHeader {...props}/>,
    headerTitle: 'Избранное'
})