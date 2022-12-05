import React from "react";
import { StyleSheet, Text, View } from "react-native";
import twrnc from 'tailwind-react-native-classnames';
import Map from "../components/Map";
import MapView from "react-native-maps";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreen = () => {
    // enable navigation from one screen to another
    const Stack = createStackNavigator();
    return (
        <View>
            <View style={twrnc`h-1/2`}>
                <Map/>
            </View>

            <View style={twrnc`h-1/2`}>
                {/*<Map/>*/}
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                    // navigate to RideOptionsCard screen
                    <Stack.Screen
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                        options={{
                            headerShown: false,
                        }}
                    /> 
                </Stack.Navigator>
            </View>
           {/* <View style={twrnc`h-1/2`}> </View>}*/}

        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({});
