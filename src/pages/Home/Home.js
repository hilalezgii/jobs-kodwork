import React, { useState } from 'react'
import JobsCard from '../../components/JobsCard/JobsCard';
import { API_URL } from "@env"
import { View, FlatList, Text } from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Home = ({ navigation }) => {
    const { data, loading, error } = useFetch(`${API_URL}/jobs?page=0`);
    if (loading) {
        return (
            <Loading />
        )
    }
    if (error) {
        return (
            <Error />
        )
    }
    const handleProductSelect = id => {
        navigation.navigate('Detail', { id });
    };

    const JobItem = ({ item }) => {
        return (
            <JobsCard
                job={item}
                onSelect={() => handleProductSelect(item.id)}
            />
        )
    }

    return (
        <View>
            <FlatList
                data={data.results || []}
                renderItem={JobItem} />
        </View>
    )
}
export default Home;