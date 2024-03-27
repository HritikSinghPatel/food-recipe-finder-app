import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import RecipeList from "../components/RecipeList/RecipeList";
import { FavouritesContext } from "../store/context/favourite-context";

function FavouriteScreen() {

    const favouriteRecipeCtxt = useContext(FavouritesContext);
    const favouriteRecipes = favouriteRecipeCtxt.recipes;

    const navigation = useNavigation();

    if(favouriteRecipes.length === 0){
        return(
            <View style={styles.rootContainer}>
                <Text style={styles.text}>
                    You have no favourite recipes yet.
                </Text>
            </View>
        );
    }

    return (
        <RecipeList displayedRecipes={favouriteRecipes} navigation={navigation}/>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 18,
         fontWeight: 'bold',
         color: 'white',
    }
});

export default FavouriteScreen;