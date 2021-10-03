import {StyleSheet, View, FlatList, ActivityIndicator, Text } from 'react-native'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { requestPhotos } from "../store/galleryActions";
import AppHeader from '../components/Header';
import { AppImage } from '../components/Image';

export const GalleryScreen = ({navigation}: {navigation: any}) => {

    const dispatch = useDispatch()

    const photos = useSelector((state: RootState) => state.gallery.photos)
    const loader = useSelector((state: RootState) => state.gallery.loader)

    useEffect(() => {
        dispatch(requestPhotos())
    }, [dispatch])
    
    if (photos.length) return (
        <View style={styles.container}>
            <FlatList
            data={photos}
            numColumns={4}
            keyExtractor={(el: any, index: number) => index.toString()}
            onEndReachedThreshold={1}
            onEndReached={() => dispatch(requestPhotos())}
            renderItem={({item}: {item: any}) => <AppImage photo={item} navigation={navigation}/>}/>
        </View>
    );

    if (loader) return <View style={styles.center}>
                <ActivityIndicator color='#A10D99'/>
            </View>

    return <View style={styles.center}>
            <Text>Нет изображений</Text>
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


GalleryScreen.navigationOptions = () => ({
    header: (props: any) => <AppHeader {...props}/>,
    headerTitle: 'Все изображения'
})