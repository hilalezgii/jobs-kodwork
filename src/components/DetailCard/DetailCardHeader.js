import React from 'react'
import { View, Text } from 'react-native';
import styles from './DetailCardHeader.style';

const DetailCardHeader = ({ name, location, level }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.level}>{level}</Text>
           <View style={styles.text}><Text style={styles.text} >Job Detail</Text></View> 
        </View>
    )

}
export default DetailCardHeader;