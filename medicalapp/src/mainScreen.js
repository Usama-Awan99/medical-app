//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//import Local Files Here
import Topbar from './mainScfiles/top';
import Window from './Width';

// create a component
const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Topbar />
            <Text>Usam ais </Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // marginTop:30,
    },
});

//make this component available to the app
export default MainScreen;
