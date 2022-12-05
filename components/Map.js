import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps';
import twrnc from 'tailwind-react-native-classnames';
//import { setDestination, setOrigin } from '../slices/navSlice';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY} from "@env";
import { useRef } from 'react';


const Map = () => {

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;
    
    //zoom and fit to location markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left:50},
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {    
      fetch(
      //  'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${',AIzaSyCz_l6Rs2NyfHOkS1PahXMryqizzwfZxDo,'}'
        'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=$%7Borigin.description%7D&destinations=$%7Bdestination.description%7D&key=AIzaSyCz_l6Rs2NyfHOkS1PahXMryqizzwfZxDo'
      ) 
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });

    };

    getTravelTime();
  //}, [origin, destination, 'AIzaSyCz_l6Rs2NyfHOkS1PahXMryqizzwfZxDo']);
}, [origin, destination, 'AIzaSyCz_l6Rs2NyfHOkS1PahXMryqizzwfZxDo']);


  return (
    <MapView
    ref={mapRef}
    style={twrnc`flex-1`}
    mapType='mutedStandard'
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
    >

    {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          //apikey={GOOGLE_MAPS_APIKEY}
          apikey='AIzaSyCz_l6Rs2NyfHOkS1PahXMryqizzwfZxDo'
          strokeWidth={3}
          strokeColor="black"

        />
    )}
      {origin?.location && (
        <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title='Origin'
            description={origin.description}
            identifier='origin'
        />
      )}

      {destination?.location && (
        <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title='Destination'
            description={destination.description}
            identifier='destination'
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});