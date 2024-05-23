import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

// .../ volta pasta
import today_Image from '../../assets/imgs/today.jpg'

export default class Task_List {
    render (){
        return(
            // Se utilizar Js na Interface usa {}
            <View style={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}>

                </ImageBackground>
                <View style={styles.taskList}> 
                <text>Lista de Tarefas</text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container:{
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    }
})
