import { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView, Image, Modal, Share } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';

import { Entypo, AntDesign, Feather } from "@expo/vector-icons";

import { Ingredients } from '../../components/ingredients'
import { Instructions } from '../../components/instructions'

import { VideoView } from '../../components/video'

import { isFavorites, saveFavorite, removeFavorite } from '../../utils/storage'


export function Detail() {
  const route = useRoute();
  const navigation = useNavigation();
  const [showVideo, setShowVideo] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useLayoutEffect(() => {

    async function getStatusFavorite() {
      const recipeFavorite = await isFavorites(route.params?.data);
      setFavorite(recipeFavorite);
    }

    getStatusFavorite();

    navigation.setOptions({
      title: route.params?.data ? route.params?.data.name : "Detalhes da Receita",
      headerRight: () => (
        <Pressable onPress={ () => handleFavoriteRecipe(route.params?.data)}>
          { favorite ? (
            <Entypo name="heart" size={28} color="#FF4141" style={{ marginRight: 14 }} />
          ) : (
            <Entypo name="heart-outlined" size={28} color="#FF4141" style={{ marginRight: 14 }} />
          )}
        </Pressable>
      )
    })
  }, [navigation, route.params?.data, favorite])

  async function handleFavoriteRecipe(recipe) {
    if(favorite) {
      await removeFavorite(recipe.id);
      setFavorite(false);
    }else {
     await saveFavorite("appreceitas", recipe);
      setFavorite(true);
    }
  }

  function handleOpenVideo() {
    setShowVideo(true);
  }

  async function shareReceipe() {
    try{
      await Share.share({
        url: route.params?.data.video,
        message: `Olha que receita legal: ${route.params?.data.name} - \nIngredientes: ${route.params?.data.ingredients.map((item) => item.name).join(", ")}\n VENHA CONFERIR ESSA RECEITA NO APP RECEITAS FACEIS`,
      })
    }catch(error) {
      console.log(error);
    }
  }

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 14}} style={styles.container} showsVerticalScrollIndicator={false}>
      <Pressable onPress={handleOpenVideo}>
        <View style={styles.playIcon}>
          <AntDesign name="playcircleo" size={50} color="#FAFAFA"/>
        </View>
        <Image source={{ uri: route.params?.data.cover }} style={styles.cover} />
      </Pressable>

      <View style={styles.headerDetails}>
        <View>
          <Text style={styles.title}>{route.params?.data.name}</Text>
          <Text style={styles.ingredientsText}>ingredientes ({route.params?.data.total_ingredients})</Text>
        </View>
        <Pressable onPress={shareReceipe}>
          <Feather name="share-2" size={24} color="#121212" />
        </Pressable>
      </View>

      {route.params?.data.ingredients.map((item) => (
        <Ingredients key={item.id} data={item}/>
      ) )}

      <View style={styles.instructionsArea}>
        <Text style={styles.instructionsTitle}>Modo de Preparo</Text>
        <Feather
        name="arrow-down"
        size={24}
        color="#FFF"
        />
      </View>

      {route.params?.data.instructions.map((item, index) => (
        <Instructions key={item.id} data={item} index={index}/>
      ) )}

      <Modal visible={showVideo} animationType="slide">
        <VideoView
          handleClose={() => setShowVideo(false)}
          videoUrl={route.params?.data.video}
        />
      </Modal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F9ff",
    paddingTop: 14,
    paddingEnd: 14,
    paddingStart: 14,
  },
  cover:{
    height: 200,
    borderRadius: 14,
    width: "100%",
  },
  playIcon: {
    position: "absolute",
    zIndex: 9,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    marginTop: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  ingredientsText: {
    marginBottom: 14,
    fontSize: 16,
  },
  headerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  instructionsArea: {
    backgroundColor: "#4cbe6c",
    flexDirection: "row",
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },
  instructionsTitle:{
    fontSize: 18,
    fontWeight: 500,
    color: "#FFF",
    marginRight: 8,
  }
});