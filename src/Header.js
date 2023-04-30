import React from "react"
import './Header.css'

export default function Main(){
    return (
        <div className="header">
            <div className="header__left">
                <ul>
                    <li><a href="/r/popular" class="active">Popular</a></li>
                    <li><a href="/r/hot">Hot</a></li>
                    <li><a href="/r/rising">Rising</a></li>
                    <li><a href="/r/controversial">Controversial</a></li>
                    <li><a href="/r/gilded">Gilded</a></li>
                </ul>
            </div>
            <div className="header__right">
                <i className="fas fa-bell"></i>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp&w=256"></img>
                <div className="header__user">
                    <span>Raj Kumar </span>
                    <i className="fas fa-caret-down"></i>
                </div>
            </div>
        </div>
    )
}
