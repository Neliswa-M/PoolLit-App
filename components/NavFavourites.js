import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import twrnc from 'tailwind-react-native-classnames';

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, Gauteng, RSA",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "William Nicol, Bryanston, RSA",
    },
   /* {
        id: "789",
        icon: "heart",
        location: "Shopping",
        destination: "Mall Of Africa, RSA",
    },*/
        
];

const NavFavourites = () => {
    
    return ( 
    <FlatList
    data={data} 
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={() => <View style={[twrnc`bg-gray-400`, {height: 0.5 }]} /> } 
    renderItem={({item: {location, destination, icon}}) => (
        <TouchableOpacity style={twrnc`flex-row items-center p-5`}>
            <Icon
                style={twrnc`mr-4 rounded-full bg-gray-300 p-3`}
                name={icon}
                type="ionicon"
                color="white"
                size={18}
            />
            <View>
                <Text style={twrnc`font-semibold text-lg`}>{location}</Text>
                <Text style={twrnc`text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
    )}
    /> 
    );
};

export default NavFavourites;

const styles = StyleSheet.create({});