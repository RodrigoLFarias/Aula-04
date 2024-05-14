import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Estilo2(){
    
    return(
       <View style={stilo.container}> 
       <Text></Text>
           <View style={stilo.header}></View>
           <View style={stilo.main}></View>
           <View style={stilo.footer}></View>
       </View>

    )
}

const stilo = StyleSheet.create({
  container:{
    backgroundColor: '#555',
    flex: 1,
    width: '100%',
    
  },

  header:{
    backgroundColor: '#555',
    height: 65

  },

  main:{
  backgroundColor: 'black',
  flex: 1

  },

  footer:{
    backgroundColor: '#555',
    height: 65
  
  },

});