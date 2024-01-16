import { Text, View,StyleSheet, Button,Image} from "react-native"
import { useNavigation } from "@react-navigation/native";


const TodaysImage = ({image}) => {
    const {date,title,url,explanation} = image
    const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
        <Image source={{uri:url}} style={styles.img} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttonContainer}>
            <Text style={styles.data}>{date}</Text>
            <Button  onPress={() => navigation.navigate('Detail',{date,title,url,explanation})} title="View" />
        </View>
        
    </View>
  )
}

export default TodaysImage

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#2c449d',
        marginVertical:16,
        borderRadius:32,
        padding:13,
        marginHorizontal:24,
        height:270,
    },
   
    img:{
        width:'100%',
        height:160,
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
    data:{
        color:'white',
        fontSize:15,
        marginBottom:2,
        marginLeft:4,
    },
    buttonContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'start',
        justifyContent:'space-between',
        
    }


})