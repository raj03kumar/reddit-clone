import React from "react"
import Header from "./Header"
import Posts from "./Posts"
import './Main.css'

export default function Main(){
    return (
        <div className="main">
            <Header/>
            <Posts/>
        </div>
    )
}
