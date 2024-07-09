import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';
const Favorites = () =>{
    
    const favoritesData = useSelector(state => state.favorites.list)


    const JobItem = ({ item }) => {
        return (
            <FavoriteCard
                job={item}
                onSelect={() => handleProductSelect(item.id)}
            />
        )
    }


    return(
        <View>
         <FlatList
                data={favoritesData}
                renderItem={JobItem} />
                        </View>
    )
}
export default Favorites;