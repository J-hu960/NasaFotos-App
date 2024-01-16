import { Text, View,StyleSheet, Button,Image,ScrollView} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const Detail = () => {
  const navigation = useNavigation()
  const {params:{date,title,url,explanation}} = useRoute()
  return (
  <ScrollView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image source={{uri:url}} style={styles.img} />
        <Text style={styles.parraf}>{explanation}</Text>
        
        
    </ScrollView>)
  
}


const styles=StyleSheet.create({
    container:{
        backgroundColor:'#2c449d',
        marginBottom:26,
        borderRadius:0,
        padding:15,
        marginHorizontal:0,
        height:'100%',
    },
   
    img:{
        width:'100%',
        height:300,
        borderWidth:2,
        borderColor:'white',
        borderRadius:32,
    },
    title:{
        color:'white',
        fontSize:20,
        marginTop:2,
        fontWeight:'bold',

    },
    parraf:{
      fontSize:12,
      color:'white',
      padding:10,
      marginBottom:15,
    }
   
    


})
export default Detail