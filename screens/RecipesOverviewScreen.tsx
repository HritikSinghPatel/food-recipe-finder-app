import { useLayoutEffect, useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, ToastAndroid, View } from "react-native";
import RecipeList from "../components/RecipeList/RecipeList";
import axios from "axios";

function RecipesOverViewScreen({route, navigation}: any) {

    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");

    function fetchRecipes() {
        if (query === "") {
            ToastAndroid.show('Empty search!!', ToastAndroid.SHORT);
            return;
        }
        axios.get("https://api.edamam.com/api/recipes/v2?type=public&app_id=ff85ad80&app_key=cb6256f348b05710bc8a69e3cc422752&q=" + query).then(response => {
            if (response.data.hits.length === 0) {
                ToastAndroid.show('Nothing found related to your search!!!', ToastAndroid.SHORT);
                return;
            }
            setRecipes([]);
            const newRecipes = []
            response.data.hits.forEach((hit, index) => {
                const recipe = hit.recipe;
                newRecipes.push({
                    id: index,
                    categoryIds: "",
                    title: recipe.label,
                    imageUrl: recipe.image,
                    ingredients: recipe.ingredientLines,
                    steps: [],
                    duration: recipe.totalTime,
                    mealType: recipe.mealType.length > 0 ? recipe.mealType[0] : "",
                    dishType: recipe.dishType > 0 ? recipe.dishType[0] : "",
                    complexity: "",
                    affordability: "",
                    isGlutenFree: "",
                    isVegan: "",
                    isVegetarian: "",
                    isLactoseFree: ""
                  })
            });
            setRecipes(newRecipes)
        });
    }

    return (
        <View style={{flex: 1}}>
            <View style={styles.searchBar}>
                <TextInput style={styles.searchInput} value={query} onChangeText={setQuery}></TextInput>
                <Button color={"grey"} title="Search" onPress={fetchRecipes} />
            </View>
            <RecipeList displayedRecipes={recipes} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },  
    searchInput: {
        height: 40,
        width: "70%",
        marginRight: 20,
        borderWidth: 1,
        padding: 10,
        color: 'white',
        borderColor: "white",
    }
})

export default RecipesOverViewScreen;