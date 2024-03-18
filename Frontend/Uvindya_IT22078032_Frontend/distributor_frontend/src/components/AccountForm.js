import { useState } from "react"
import { useAccountsContext } from "../hooks/useAccountContext"
const AccountForm=()=>{
    const{dispatch}=useAccountsContext()

    const [fname,setfname]=useState('')
    const [lname,setlname]=useState('')
    const [id,setid]=useState('')
    const [nic,setnic]=useState('')
    const [email,setemail]=useState('')
    const [contactNo,setcontactNo]=useState('')
    
    const [error,setError]=useState(null)

    const handleSubmit=async(e)=>{
        e.preventDefault()

        const account={fname,lname,id,nic,email,contactNo}
        const response= await fetch('/api/accounts',{
            method:'POST',
            body:JSON.stringify(account),
            headers:{
                'Content-Type':'application/json'
            }

        })
        const json=await response.json()

        if(!response.ok){
           
            setError(json.error)
        }
        if(response.ok){
            setfname('')
            setlname('')
            setid('')
            setnic('')
            setemail('')
            setcontactNo('')
            setError(null)
            console.log('new account added',json)
            dispatch({type:'CREATE_ACCOUNT',paload:json})
        }
       
    }
  
    return (
        <form className="create" onSubmit={handleSubmit}>
        <h3>Add Distributor Details</h3>
        <label>First Name:</label>
            <input 
                type="text"
                onChange={(e)=>setfname(e.target.value)}
                value={fname}/>

       
            <label>Last Name:</label>
            <input 
                type="text"
                onChange={(e)=>setlname(e.target.value)}
                value={lname}/>
        <br/>
        
            <label>Distributor Id:</label>
            <input 
                type="text"
                onChange={(e)=>setid(e.target.value)}
                value={id}/>

        <br/>
        <label>NIC:</label>
            <input 
                type="text"
                onChange={(e)=>setnic(e.target.value)}
                value={nic}/>

        <br/>
    
       
         <br/>
        <label>Email:</label>
            <input 
                type="text"
                onChange={(e) => setemail(e.target.value)}
                value={email} />
             <br/>


            <label>Contact No:</label>
            <input 
                type="text"
                onChange={(e) => setcontactNo(e.target.value)}
                value={contactNo} />
            <br/>
           
           
           
        <button>Submit Form</button>

        {error && <div className="error">{error}</div>}
        </form>

    )
}
export default AccountForm