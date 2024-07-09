import React from 'react';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20,
    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: 'tomato',
        borderColor: 'tomato',
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row', 
      },
      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
      },
    });
