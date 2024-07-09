import React from 'react'
import { View, Text, TouchableOpacity, } from "react-native";
import styles from './FavoriteCard.style';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../../store/features/favorites/favoritesSlice';

const FavoriteCard = ({ job, onSelect }) => {
    const dispatch = useDispatch();

    const handleRemoveFavorite = () => {
        dispatch(removeFavorite({ id: job.id }));
    };
    return (
        <View style={styles.jobContainer} >
            <View style={styles.body_container}>
                <Text style={styles.jobTitle}>{job?.name}</Text>
                <Text style={styles.jobcompany}>{job?.company?.name}</Text>
                <Text style={styles.location}>{job?.locations?.[0]?.name}</Text>
            </View>
            <View style={styles.level_container}>
                <Text style={styles.level}>{job?.levels?.name}</Text>
            </View>
            <TouchableOpacity onPress={handleRemoveFavorite} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
        </View>
    )
}
export default FavoriteCard;
/*
"name": "Beauty Sales Consultant",
"type": "external",
"publication_date": "2024-06-06T12:39:54Z",
"short_name": "beauty-sales-consultant-21f279",
"model_type": "jobs",
"id": 14177939,
*/