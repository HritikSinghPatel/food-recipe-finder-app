import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    recipes: [],
    addFavourite: (recipe: {}) => {},
    removeFavourite: (recipe: {}) => {}
});

function FavouritesContextProvider({children}: any) {
    const [favouriteRecipes, setFavouriteRecipes] = useState<any[]>([]);

    function addFavourite(recipe: any) {
        setFavouriteRecipes((currentFavRecipes) => [...currentFavRecipes, recipe]);
    }

    function removeFavourite(recipe: any) {
        setFavouriteRecipes((currentFavRecipes) => 
        currentFavRecipes.filter((rec) => rec !== recipe)
        );
    }

    const value = {
        recipes: favouriteRecipes,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite,
    };

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}

export default FavouritesContextProvider;