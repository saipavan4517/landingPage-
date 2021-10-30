import React,{useState} from 'react'
import JSONDATA from '../../MOCK_DATA.json'
import '../../Styles/contact.css'

const AddContact = () => {

    const [searchTerm,setSearchTerm] = useState("")
    return (
        <div className="contact">

                <input type="text" placeholder="Search..." className ="input-style"
                 onChange={(e)=>(setSearchTerm(e.target.value))}/> 

        
            {
                JSONDATA.filter((data) =>{
                    if(searchTerm==""){
                        return data
                    }else if(data.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return data
                   }
                }).map((item)=>{
                   return(
                    <div  key={item.id}>
                        <p>{item.first_name}</p>
                    </div>
                   )
                })
            }
        </div>
    )
}

export default AddContact
