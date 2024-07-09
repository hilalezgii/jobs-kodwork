import { StyleSheet } from "react-native";

export default StyleSheet.create({
        jobContainer: {
          borderWidth: 1,
          borderColor: 'white',
          backgroundColor: 'white',
          borderRadius: 10,
          marginHorizontal: 10,
          padding: 10,
          marginTop: 10,
        },
        body_container: {
          flex: 1,
          alignItems: 'flex-start',
        },
        jobTitle: {
          fontWeight: 'bold',
          color: 'black',
          fontSize: 18,
        },
        jobcompany: {
          fontSize: 14,
          marginTop: 5,
        },
      
        location: {
          marginTop: 5,
          backgroundColor: 'tomato',
          color: 'white',
          fontSize: 14,
          fontWeight: 'bold',
          padding: 3,
          borderRadius: 8,
        },
        level_container: {
          flex: 1,
          alignItems: 'flex-end',
        },
        level: {
          color: 'tomato',
          fontWeight: '600',
          fontSize: 15,
        },
      });