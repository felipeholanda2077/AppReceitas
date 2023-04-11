import { View, Text, StyleSheet } from 'react-native';

export function Logo() {
    return (
        <View style={styles.LogoArea}>
        <Text style={styles.logo}>Receitas Rápidas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    LogoArea:{
        backgroundColor: "#4CBE6C",
        alignSelf: "flex-start",
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8,
    },
    logo:{
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    }
    

}
);