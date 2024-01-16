const api_key = `xzLborC0dWj5LkXnkgdTdZeTiDUitzSLnWJbacgc`
const api_url = `https://api.nasa.gov/planetary/apod`

const fetchData = async(urlParams) => {
    try {
        const res = await fetch(`${api_url}?api_key=${api_key}${urlParams && urlParams.length>0 ? urlParams : ''}`)
        const data = await res.json()
        return data
        
    } catch (error) {
        return error   
    }
 
}

export default fetchData