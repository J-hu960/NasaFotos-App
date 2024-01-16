import { View, StyleSheet, Image, Text,ScrollView } from "react-native"
import Header from "../../Header/Header"
import fetchData from '../../utils/fetchData'
import { useEffect, useState } from "react"
import TodaysImage from "../../TodaysImage/TodaysImage"
import { format,sub } from "date-fns"
import LastFiveImgs from "../../LastFiveImages/LastFiveImgs"

const Home = () => {
  const [img,setImg] = useState('')
  const [fiveImages,setFiveImages] = useState([])
  


  useEffect(()=>{
     const loadTodayImg =async()=>{
      const todaysImg=await fetchData();
      setImg(todaysImg)
    }
    loadTodayImg()
    const loadLast5daysImages=async()=>{
      const date = new Date();
      const todaysDate = format(sub(date,{days:1}),'yyyy-MM-dd')
      const fiveDaysAgoDate = format(sub(date,{days:6}),'yyyy-MM-dd')
      const last5Images=await fetchData(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`)
      setFiveImages(last5Images)
    }
    loadLast5daysImages()

 
 

  },[])


  return (
    <View style={styles.container}>
        <Header />
        {img ? (
          <TodaysImage image={img} />
        ):(
          <Text>Loading...</Text>
        )}

        <ScrollView style={{paddingHorizontal:24}} >
        <Text style={{color:'white',fontSize:16,marginBottom:18,}}>Last 5 Days</Text>

         { fiveImages && fiveImages.map(image=>(
           <LastFiveImgs key={image.date} image={image} />

           ))}

        </ScrollView>

       

        
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:16,
    backgroundColor:'rgba(7,26,93,255)'
  }
})