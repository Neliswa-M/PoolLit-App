import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import twrnc from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import RideOptionsCard from '../components/RideOptionsCard';
import NavFavourites from './NavFavourites';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';


const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={twrnc`bg-yellow-500 flex-1`}>
      {/*<Text style={twrnc`text-center py-5 text-xl`}>Hello, Jane Doe</Text>*/}
      <View style={twrnc`border-t border-gray-200 flex-shrink`}>

      <GooglePlacesAutocomplete 
          placeholder='Destination?'
          styles={toInputBoxStyles}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          onPress={(data, details = null) => {
            dispatch(
                setDestination({
                    location: details.geometry.location,
                    description: data.description,
                })
                );
                navigation.navigate('RideOptionsCard');

          }}
          query={{
            //key: GOOGLE_MAPS_APIKEY,
            key: 'AIzaSyCz_l6Rs2NyfHOkS1PahXMryqizzwfZxDo',
            language: 'en',
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        
      </View>
      <NavFavourites /*use onPress*//>
      <View style={twrnc`flex-row justify-evenly py-2 mt-auto border-t border-gray-100`}>
       {/*<TouchableOpacity style={twrnc`flex flex-row bg-black w-24 px-4 py-3 rounded-full`}>*/}
        <TouchableOpacity 
            onPress={() => navigation.navigate('RideOptionsCard')}
            style={twrnc`justify-between`}>

            <Icon name="car" type="font-awesome" color="black" size={24} />
                <Text style={twrnc`text-gray-500 text-center`}> 
                    Pools
                </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        //backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});