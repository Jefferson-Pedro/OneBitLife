import React from "react";
import {View, Text, StyleSheet, ScrollView,} from "react-native-gesture-handler";

export default function AppExplation(){
    function handleSetShowHome(){
        console.log("Funciona!")
    }


    return(
        <View style = {styles.container}>
            <ScrollView>
                <View style={{alignItems: "center"}} >
                    <Text style={styles.title}>
                        Antes,deixa {"\n"} eu te explicar...
                    </Text>
                    <Text style={styles.descriptionCta}>
                        Pronto(a) ára subir de nível na vida?
                    </Text>
                    <Text style={styles.description}>
                        Na próxima tela você vai poder escolher {"\n"} seus 4 hábitos de forma
                        individual.
                    </Text>
                    <DefaultButton
                    buttonText={"Continuar"}
                    handlePress={handleSetShowHome}
                    width={250}
                    height={50}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    title: { 
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 40,
    },
    descriptionCta: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        color: "white",
        textAlign: "center",
        marginBottom: 30,
    },
});