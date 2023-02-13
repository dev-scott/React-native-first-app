import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";

const App = () =>
    {
        return (
            <>
                <StatusBar style="auto" />
                <View style={styles.topbar}>
                    <TouchableOpacity style={styles.topbarbutton}>
                  
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.topbarbutton}>
                  
                    </TouchableOpacity>
                </View>
             
            </>
        );
    }


    const styles = StyleSheet.create({
      
        topbar: {
            
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f2f2f2',
            paddingTop: 40,
            paddingBottom: 40,
            // border: '1px solid #f2f2f2',
            borderColor: '#f2f2f2',
            // borderRadius: 10,
            borderWidth: 1,



        },

        topbarbutton:{
            padding:50,

            width: 48,
            height:48,
            backgroundColor: '#000',
                // borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',

        }


    })

export default App;