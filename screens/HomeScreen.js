import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import twrnc from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"; 
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';


const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={twrnc`bg-yellow-500 h-full`}>
      <View>
        <Text style={twrnc`mt-5 text-4xl font-bold`}>PoolLit</Text>
        {/*<Image
          style={{
            width: 100, 
            height: 100, 
            resizeMode: "contain" 
          }}
          source={
            require('../Images/NicerCar.jpg')}
            
          />*/}
        <GooglePlacesAutocomplete 
          placeholder='Location'
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) =>{
            /*console.log(data);
            console.log(details);*/
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            //key: GOOGLE_MAPS_APIKEY,
            key: 'AIzaSyCz_l6Rs2NyfHOkS1PahXMryqizzwfZxDo',
            language: 'en',
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        
        <NavOptions/>
        <NavFavourites  />
      </View>
    </SafeAreaView>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "yellow",
  },
});