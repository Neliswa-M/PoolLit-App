import React from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import { FlatList, StyleSheet, Image } from "react-native";
import twrnc from 'tailwind-react-native-classnames';
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";

const data = [
    {
        id: "123",
        title: "Driver",
        // image:  require('../Images/Driver.jpg'),
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmagT7ZrwEDuUuCHyNkE6AI9jg4zLujRFVA&usqp=CAU",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Passenger",
        image:  "https://i.pinimg.com/originals/17/fb/67/17fb6782185ae7125d9bab929f1ed57e.png",
        //image: require('../Images/Passenger.jpg'),
        screen: "MapingScreen",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
        <FlatList
         data={data}
         horizontal
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={twrnc`p-2 pl-6 pb-8 pt-4 bg-gray-200 rounded m-2 w-40`}
                disabled={!origin}>
                <View style={twrnc`${!origin && "opacity-20"}`}>
                    <Image
                        style={{ width: 50, height: 50, resizeMode: "contain"}}
                        source={{ uri: item.image}} 
                    />
                    <Text style={twrnc`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                        style={twrnc`p-2 bg-black rounded-full w-10 mt-4`}
                        name='arrowright' 
                        color='white' 
                        type='antdesign'/>
                </View> 
            </TouchableOpacity>
         )}
        />
        
    );
};

export default NavOptions;