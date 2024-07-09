import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './DetailFooter.style';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const DetailFooter = ({ addFavoriteList }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => addFavoriteList()}>
                    <MaterialIcons name="input" size={24} color="white" />
                    <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addFavoriteList()}>
                    <AntDesign name="heart" size={24} color="white" />
                    <Text style={styles.text}>Add Favorite</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}
export default DetailFooter;