import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import RecipeItem from "./RecipeItem";

function RecipeList({displayedRecipes, navigation}: any) {
    
    function renderRecipeItem(itemData: any) {
        
        function pressHandler() {
            navigation.navigate('RecipeDetails', {recipe: itemData.item});
        }
        
        return (
            <RecipeItem recipe={itemData.item} onPress={pressHandler}/>
        );
    }
    
    return (
        <View style={styles.container}>
            <FlatList data={displayedRecipes} keyExtractor={(item) => item.id + item.title} renderItem={renderRecipeItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});

export default RecipeList;