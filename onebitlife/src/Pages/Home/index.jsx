import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, ScrollView, StyleSheet, Text} from "react-native";
//import { ScrollView } from "react-native-gesture-handler";
import LifeStatus from "../../Components/Common/LifeStatus";

export default function Home(){

    const navigation = useNavigation();

    function handleNavExplanation(){
        navigation.navigate("AppExplanation")
    }

    return(
        <View style = {styles.container}>
            <ScrollView>
                <View style= {{ alignItems: "center" }}>
                    <Text style={styles.dailyChecks}>❤️ 20 dias - 🚀 80 checks</Text>    
                    <LifeStatus/>
                </View>    
                <Text style={styles.explanationText}
                    onPress={() =>{
                        handleNavExplanation();
                    }} >
                    Ver explicação novamente.
                </Text>
            </ScrollView>                
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    dailyChecks: { 
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
    },
    explanationText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 25,
    },
});

/* <View style={styles.container}>
            <ScrollView>
                <View style= {{ alignItems: "center" }}>
                    <Text style={styles.dailyChecks}>❤️ 20 dias - 🚀 80 checks</Text>    
                    <LifeStatus/>
                </View>    
                <Text style={styles.explanationText}
                    onPress={() =>{
                        handleNavExplanation();
                    }} >
                    Ver explicação novamente.
                </Text>
            </ScrollView>      
        </View>*/