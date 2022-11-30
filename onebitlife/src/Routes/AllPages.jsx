import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../Pages/Start";
import AppExplation from "../Pages/AppExplanation";
import Home from "../Pages/Home";
import HabitPage from "../Pages/HabitPage";

const Stack = createNativeStackNavigator();

export default function AllPages(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                }}
            >
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="AppExplanation" component={AppExplation} /> 
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HabitPage" component={HabitPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}