import React,{useEffect,useState} from 'react'
import axios  from 'axios'
import '../../Styles/Home.css'
import Loader from "react-loader-spinner";

const Home = () => {
  
     const [fetchedData,setFetchedData] = useState([])
     const [Loading,setLoading] = useState(true)

    useEffect(()=>{
      getData()
    },[])

        async function getData(){
        const  response= await axios.get('https://jsonplaceholder.typicode.com/users')
       
        const data = await response.data
         console.log("datata",data)
        setFetchedData(data)
        setLoading(false)
    }

 
    console.log("sattattat",fetchedData && fetchedData)

    return (
        <div className="Home">
            <ul>
                {
                 Loading ? 
                 <Loader style={{marginLeft : "40%"}}
                 type="Circles" color="#00BFFF" height={380} width={480}
                 />
                 :fetchedData.map((data)=>(
                    <li key={data.id}>{data.name}</li>
                 ))  
             }
            </ul>
        </div>
    )
}

export default Home


    // async function getData(){
    //     const  response= await axios.get('https://fortniteapi.io/v2/items/list?lang=en',{
    //         headers :{
    //             Authorization:"8dcd3fa7-aae18848-74ab7667-6e573604"}
    //
    //     })