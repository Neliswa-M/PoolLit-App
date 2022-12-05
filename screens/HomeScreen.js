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
          //on click
          onPress={(data, details = null) =>{
            /*console.log(data);
            console.log(details);*/
            
            //set the pick up location
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))

            dispatch(setDestination(null));
          }}
          // get lcation details
          fetchDetails={true}
          returnKeyType={"search"}
          // removed the 'PoweredByGoggle' banner on APIs
          enablePoweredByContainer={false}
          // number of characters needed to be typed in 
          // search bar before suggestions start popping up
          minLength={2}
          query={{
            //key: GOOGLE_MAPS_APIKEY,
            // hardcode API key because env file throws an error
            key: 'AIzaSyCz_l6Rs2NyfHOkS1PahXMryqizzwfZxDo',
            language: 'en',
          }}
          //allow 400ms after typing before suggestions pop
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
