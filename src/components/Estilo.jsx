import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Estilo(){

    return(
        <View style={styles.bloco1}>

         <View style={styles.texto}>
           <Text style={{color: 'Black', fontSize: 20}}>Tema:</Text>
         </View>
       
        <View style={styles.bloco2}>
         <Text style={{color: '#8A2BE2', fontSize: 25}}>Desenvolvedor Mobile</Text>
         <Text style = {{color:'#8A2BE2',  fontWeight: 'bold', marginTop:-14}}>_________________________________________</Text>
        </View>

        </View>
    )
}

const styles = StyleSheet.create({

   bloco1:{
    borderRadius: '5px',
    backgroundColor: '#8A2BE2',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height:'13%'

  },

   bloco2:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    color: '#fff',
    borderRadius: '5px'
    
   

  },

  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  }
  
});