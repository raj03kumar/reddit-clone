import React from 'react'
import './SideNav.css'

export default function SideNav(){
    const menus = [
        {to: '/r/popular', text: "Popular"},
        {to: '/r/all', text: "All"},
        {to: '/r/random', text: "Random"}
    ]
    const subreddits =[
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "todayiLearned",
        "pics",
        "gaming",
        "movies",
        "news",
        "gifs",
        "aww",
        "mildlyinteresting",
        "showerthoughts",
        "television",
        "jokes",
        "science",
        "soccer",
        "internetisbeautiful",
        "dataisbeautiful"
    ]
    return (
        <div className='sidenav'>
            <div className='sidenav__logo'>
                <img src='https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.jpg'></img>
            </div>
            <div className='sidenav__search'>
                <input type='text' name='search' placeholder='Search'></input>
                <i className='fas fa-search'></i>
            </div>
            <div className='sidenav__link'>
                <ul className='sidenav__menu'>
                    {menus.map(menu =>(
                        <li><a href={menu.to}>{menu.text}</a></li>
                    ))}
                </ul>
                <hr/>
                <ul className='sidenav__subreddit'>
                    {subreddits.map(subreddit =>(
                        <li><a href={`/r/${subreddit}`}>{subreddit}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}