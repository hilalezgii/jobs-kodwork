import React from 'react'
import { View, Text, Image, TouchableOpacity, } from "react-native";
import styles from './JobsCard.style';

const JobsCard = ({job ,onSelect}) => {
    return (
        <TouchableOpacity style={styles.jobContainer} onPress={onSelect}>
            <View style={styles.body_container}>
                <Text style={styles.jobTitle}>{job?.name}</Text>
                <Text style={styles.jobcompany}>{job?.company?.name}</Text>
                <Text style={styles.location}>{job?.locations?.[0]?.name}</Text>
            </View>
            <View style={styles.level_container}>
                <Text style={styles.level}>{job?.levels?.name}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default JobsCard;
/*
"name": "Beauty Sales Consultant",
"type": "external",
"publication_date": "2024-06-06T12:39:54Z",
"short_name": "beauty-sales-consultant-21f279",
"model_type": "jobs",
"id": 14177939,
*/