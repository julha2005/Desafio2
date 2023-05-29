import React from "react";
import { View, Text, Image } from "react-native";

export default function Lista(){
  const imageVingadores = require('../imagens  /1.jpg')
  const imageOultimoaviso = require('../imagens/2.jpg')
  const imageOexorcista = require('../imagens/3.jpg')
  const imageAmortedodemonio = require('../imagens/4.jfif')
  const imageVelozes = require('../imagens/5.jfif')
  const imageGuardians = require('../imagens/6.jpg')
  const imageGatodebotas = require('../imagens/7.jng')
  const imageAvatar = require('../imagens/8.jpg')
  const imageOencontrodecarl = require('../imagens/9.jpg')
  const imageAbarracadobeijo = require('../imagens/10.jpg')



return(
  <View>
    <Text>Meus 10 Filmes favorito</Text>
        <View>
        <Image source={imageVingadores}/>
        <Image source={imageOultimoaviso}/>
        <Image source={imageOexorcista}/>
        <Image source={imageAmortedodemonio}/>
        <Image source={imageVelozes}/>
        <Image source={imageGuardians}/>
        <Image source={imageGatodebotas}/>
        <Image source={imageAvatar}/>
        <Image source={imageOencontrodecarl}/>
        <Image source={imageAbarracadobeijo}/>
        </View>
  </View>
)}