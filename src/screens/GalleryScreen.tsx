import {StyleSheet, View, FlatList, Text} from 'react-native'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { requestPhotos } from "../store/galleryActions";
import { AppImageList } from '../components/ImageList';
import AppHeader from '../components/Header';

export const GalleryScreen = ({navigation}: {navigation: any}) => {

    const dispatch = useDispatch()

    function listToMatrix(list: any[], elementsPerSubArray: number) {
        var matrix: any[][] = [], i: number, k: number;
    
        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }
    
            matrix[k].push(list[i]);
        }
    
        return matrix;
    }

    const photos = useSelector((state: RootState) => state.gallery.photos)

    useEffect(() => {
        dispatch(requestPhotos())
    }, [dispatch])
    let transformedPhotos = listToMatrix(photos, 4)
    
    if (transformedPhotos.length) return (
        <View style={styles.container}>
            <FlatList
            data={transformedPhotos}
            keyExtractor={(el: any, index: number) => index.toString()}
            renderItem={({item}: {item: any}) => <AppImageList photos={item} navigation={navigation}/>}/>
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


GalleryScreen.navigationOptions = () => ({
    header: (props: any) => <AppHeader {...props}/>,
    headerTitle: 'Все изображения'
})