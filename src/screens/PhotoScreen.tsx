import React from 'react';
import {Dimensions, View, StyleSheet, Image, TouchableOpacity, Text} from "react-native";
import {useState} from "react";
import { useDispatch} from 'react-redux';
import { deletePhoto, toggleBooked } from '../store/galleryActions';
import AppHeader from '../components/Header';

const windowWidth = Dimensions.get('window').width


export const PhotoScreen = ({navigation}: {navigation: any}) => {
    const dispatch = useDispatch()
    const [isToggleBookedDisabled, setIsToggleBookedDisabled] = useState<boolean>(false)
    const [isDeleteDisabled, setIsDeleteDisabled] = useState<boolean>(false)

    const [curPhoto, setCurlPhoto] = useState(navigation.state.params.photo)
    const height = windowWidth * curPhoto.height / curPhoto.width
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={{height, width: windowWidth}} source={{
                    uri: curPhoto.src.large,
                }}/>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={[{borderBottomWidth: 1, borderBottomColor: 'gray'}, styles.text]}
                    disabled={isToggleBookedDisabled}
                    onPress={() => {
                    setIsToggleBookedDisabled(true)
                    dispatch(toggleBooked(curPhoto.id))
                    setCurlPhoto({...curPhoto, booked: !curPhoto.booked})
                    setIsToggleBookedDisabled(false)
                }}>
                    {curPhoto.booked
                        ?
                        <Text>❤ Убрать из избранного</Text>
                        :
                        <Text>🤍 Добавить в избранное</Text>
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={isDeleteDisabled}
                    style={[{borderTopWidth: 1, borderBottomColor: 'gray'}, styles.text]}
                    onPress={() => {
                        setIsDeleteDisabled(true)
                        dispatch(deletePhoto(curPhoto.id))
                        navigation.goBack()
                }}
                >
                    <Text>🗑 Удалить изображение</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    imageContainer: {
        justifyContent: "center",
        height: '100%',
    },
    buttonsContainer: {
        bottom: 10,
        position: "absolute",
        borderRadius: 30,
        backgroundColor: 'white',
        width: '90%',
        overflow: "hidden",
        height: 85,
        zIndex: 10
    },
    container: {
        height: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        paddingBottom: 10
    },
    text: {
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 42,
        backgroundColor: '#fff'
    }
})

PhotoScreen.navigationOptions = () => ({
    header: (props: any) => <AppHeader {...props} isBackButtonEnable={true} 
    headerTitle={`ID ${props.navigation.state.params.photo.id}`}/>
})