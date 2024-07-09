import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import React from 'react';
import { ScrollView, useWindowDimensions, View } from 'react-native';
import RenderHtml from 'react-native-render-html';
import useFetch from '../../hooks/useFetch/useFetch';
import { API_URL } from "@env";
import DetailCardHeader from '../../components/DetailCard/DetailCardHeader';
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { addFavorite } from '../../store/features/favorites/favoritesSlice';
import DetailFooter from '../../components/DetailFooter/DetailFooter';

const Detail = () => {
    const value = useSelector(state => state.favorites.list)
    const dispatch = useDispatch()
    const route = useRoute();
    const { id } = route.params;
    const { data, loading, error } = useFetch(`${API_URL}/jobs/${id}`);
    const { width } = useWindowDimensions();

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    const source = {
        html: data?.contents || "<p>No content available</p>"
    };

    const addFavoriteList = () => {
        dispatch(addFavorite(data))
    }

    return (
        <View style={{ flex: 1 }}>

            <DetailCardHeader
                name={data?.name}
                level={data?.levels?.name}
                location={data?.locations?.[0]?.name}
            />
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ backgroundColor: 'white', padding: 10 }}>
                <RenderHtml
                    contentWidth={width}
                    source={source}
                />
                <DetailFooter  
            addFavoriteList={addFavoriteList}
            />

            </ScrollView>
        </View>
    );
};

export default Detail;
