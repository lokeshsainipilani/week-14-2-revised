"use client"

export const Button = ()=>{
    function handler(){
        console.log("hi there")
    }
    
    return <div>
        <button onClick={handler}>Signup</button>
    </div>
}