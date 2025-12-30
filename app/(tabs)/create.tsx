import Button from "@/components/button"
import { colors } from "@/constants/theme"
import { router } from "expo-router"
import { ScrollView, StyleSheet, Text, View } from "react-native"

export default function Home() {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                home page
            </Text>
            <View style={styles.buttonsContainer}>
            <Button variant="secondary" onPress={() => {router.push('/(auth)')}}>
                back to auth
            </Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 200,
        marginVertical: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 2000,
        gap: 20,
    },
})