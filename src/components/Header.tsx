import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const AppHeader: React.FC<{ navigation: any, isBackButtonEnable?: boolean, scene: any, headerTitle: string }> = ({isBackButtonEnable = false, navigation, scene, headerTitle}) => {

    const { options } = scene.descriptor;
    const title =
    headerTitle ? headerTitle :
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.routeName;

    return (
        <View style={{backgroundColor: isBackButtonEnable ? 'black' : 'white'}}>
            <LinearGradient colors={['#800698', '#BC1399']} style={styles.container}>
                {isBackButtonEnable
                &&
                <TouchableOpacity
                    style={styles.goBackButtonContainer}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.goBackButtonText}>◀</Text>
                </TouchableOpacity>
                }
                <Text style={styles.text}>
                    {title}
                </Text>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "center",
        overflow: "hidden"
    },
    text: {
        color: 'white',
        textAlign: "center",
        fontSize: 22,
        zIndex: 99
    },
    goBackButtonContainer: {
        position: "absolute",
        height: 30,
        width: 30,
        top: 15,
        left: 20,
        zIndex: 10},
    goBackButtonText: {
        color: 'white',
        top: -7,
        fontSize: 30
    }
})

export default AppHeader;