import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function RecipeItem({recipe, onPress}: any) {
    return (
        <View style={styles.recipeItem}>
            <Pressable android_ripple={{color: '#ccc'}} style={({pressed}) => [pressed ? styles.pressed : null]} onPress={onPress}>
                <View>
                    <Image  source={{uri: recipe.imageUrl}} style={styles.image}/>                    
                    <Text style={styles.title}>{recipe.title}</Text>
                </View>
                <View style={styles.details}>
                    <Text>{recipe.duration !== "" ? recipe.duration + "min" : ""}</Text>
                    <Text>{recipe.mealType.toUpperCase()}</Text>
                    <Text>{recipe.dishType.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    recipeItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4
    },

    pressed: {
        opacity: 0.75,
    },

    image: {
        width: '100%',
        height: 200,
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8,
    },

    details: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
    }
});

export default RecipeItem;