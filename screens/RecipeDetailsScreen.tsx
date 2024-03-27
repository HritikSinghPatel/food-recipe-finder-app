import { useContext, useLayoutEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/RecipeDetails/List";
import { FavouritesContext } from "../store/context/favourite-context";

function RecipeDetailsScreen({route, navigation}: any) {
    
    const favouriteRecipesCtxt = useContext(FavouritesContext);

    const recipe:any = route.params.recipe;
    const isRecipeFavourite = favouriteRecipesCtxt.recipes.filter(rec => {
        return rec.title === recipe.title
    }).length > 0;
    

    function favouriteStatusHandler() {
        if (isRecipeFavourite) {
            favouriteRecipesCtxt.removeFavourite(recipe);
        } else {
            favouriteRecipesCtxt.addFavourite(recipe)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: recipe.title,
            headerRight: () => {
                return <IconButton onPress={favouriteStatusHandler} iconType={isRecipeFavourite ? 'solid' : 'empty'}/>
            }
        });
    }, [recipe, isRecipeFavourite, navigation, favouriteStatusHandler]);
    
    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: recipe.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{recipe.title}</Text>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>{recipe.duration !== "" ? recipe.duration + "min" : ""}</Text>
                <Text style={styles.detailsText}>{recipe.mealType.toUpperCase()}</Text>
                <Text style={styles.detailsText}>{recipe.dishType.toUpperCase()}</Text>
            </View>
            <View style={styles.listContainer}>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Ingredients</Text>
                </View>
                
                <List data={recipe.ingredients}/>
                
                {/* <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Steps</Text>
                </View> */}
                
                <List data={recipe.steps}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    rootContainer: {
        marginBottom: 20,        
    },

    image: {
        width: '100%',
        height: 350,
    },
    
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },

    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 8,
    },
    
    detailsText: {
        color: 'white',
    },

    listContainer: {
        //width: '80%',
        marginHorizontal: 50,
    },

    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    subtitleContainer: {
        padding: 6,
        margin: 4,
        marginHorizontal: 12,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    }
});

export default RecipeDetailsScreen;