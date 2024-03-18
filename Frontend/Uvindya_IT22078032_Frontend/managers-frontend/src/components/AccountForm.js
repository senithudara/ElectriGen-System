import { useState } from "react";
import { useAccountsContext } from "../hooks/useAccountsContext";
import { useAuthContext } from "../hooks/useAuthContext";




const AccountForm =()=>{

    const {dispatch}=useAccountsContext()
    const {user}=useAuthContext()

    const allowedRoles = ['Inventory Manager', 'Distributor Manager', 'Showroom Manager', 'Donation Manager', 'Export Manager', 'Supplier Manager', 'User Manager'];
    const [fname,setfname]=useState('')
    const [lname,setlname]=useState('')
    const [id,setid]=useState('')
    const [pword,setpword]=useState('')
    const [dob,setdob]=useState('')
    const [email,setemail]=useState('')
    const [contactNo,setcontactNo]=useState('')
    const [role,setrole]=useState('')
    const [error,setError]=useState(null)

    
    const hadleSubmit=async(e)=>{
        e.preventDefault()

        if(!user){
            setError('You must be logged in')
            return 
        }
        const account={fname,lname,id,pword,dob,email,contactNo,role}

        const response=await fetch('/api/accounts',{
            method:'POST',
            body:JSON.stringify(account),
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user.token}`
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
            setpword('')
            setdob('')
            setemail('')
            setcontactNo('')
            setrole('')
            setError(null)
            console.log("New Manager Added",json)
            dispatch({type:'CREATE_ACCOUNT',payload:json})
           
        }
    }

    return(
        <form className="create" onSubmit={hadleSubmit}>
            <h3>Add Manager Details</h3>

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
        
            <label>ManagerId:</label>
            <input 
                type="text"
                onChange={(e)=>setid(e.target.value)}
                value={id}/>

        <br/>
        
        <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setpword(e.target.value)}
                value={pword}/>
        
        <br/>

        <label>DOB:</label>
            <input
                type="Date"
                onChange={(e)=>setdob(e.target.value)}
                value={dob}/>
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
           
            <label>Role:</label>
            <select onChange={(e) => setrole(e.target.value)} value={role}>
                <option value="">Select a Role</option>
                {allowedRoles.map((role, index) => (
                    <option key={index} value={role}>{role}</option>
                ))}
            </select>
            <br/>
        <button>Submit Form</button>

        {error && <div className="error">{error}</div>}
        </form>

        
    )
}

export default AccountForm