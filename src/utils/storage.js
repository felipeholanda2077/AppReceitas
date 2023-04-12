import AsyncStorage from '@react-native-async-storage/async-storage';

//Buscar os Favoritos
// Salvar um novo Favorito
// Remover um Favorito

export async function getFavorites(key) {
  const favorites = await AsyncStorage.getItem(key);
  return JSON.parse(favorites) || [];
}

export async function saveFavorite(key, newItem) {
  let myFavorites = await getFavorites(key);

   let hasItem = myFavorites.some( item => item.id === newItem.id);

   if(hasItem) {
     console.log('Item já Salvo');
     return;
   }

   myFavorites.push(newItem);

   await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
   console.log('Item Salvo com Sucesso');
}

export async function removeFavorite(id) {
    let recipes = await getFavorites("@appreceitas");

    let myFavorites = recipes.filter( item => {
        return (item.id !== id)
    });

    await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites));
    console.log('Item Removido com Sucesso');
    return myFavorites;
}

export async function isFavorite(recipe) {
    
    let myRecipes = await getFavorites("@appreceitas");

    const favorite = myRecipes.find( item => item.id === recipe.id);

    if(favorite){
        return true;
    }

    return false;
}