import { Text, View,StyleSheet, Button,Image} from "react-native"
import { useNavigation } from "@react-navigation/native";

const LastFiveImgs = ({image}) => {
    const {date,title,url,explanation} =image
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <Image source={{uri:url}} style={styles.img} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.data}>{date}</Text>
        <View style={styles.buttonContainer}>
            <Button onPress={() => navigation.navigate('Detail',{date,title,url,explanation})} title="View" />
        </View>
        
    </View>
  )
}

export default LastFiveImgs


const styles=StyleSheet.create({
    container:{
        backgroundColor:'rgba(18,19,113,255)',
        borderRadius:20,
        padding:16,
        marginBottom:12,
    },
   
    img:{
        width:'100%',
        height:180,
        borderWidth:2,
        borderColor:'white',
        borderRadius:32,
    },
    title:{
        color:'white',
        fontSize:18,
        marginVertical:12,
        fontWeight:'bold',

    },
    data:{
        color:'white',
        fontSize:12,
    },
    buttonContainer:{
        display:'flex',
        alignItems:'flex-end'
    }


})