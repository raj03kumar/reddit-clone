import React from "react"
import PostItem from "./PostItem"
import './Posts.css'

export default function Main(){
    const posts=[
        {
            upvote: 547,
            image: "https://images.unsplash.com/photo-1682268329792-db6575d60b98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
            title: "Questions about migratory birds",
            user: "theindependentonline",
            subreddit: "nature",
            comment_count: 284
        },
        {
            upvote: 698,
            image: "https://images.unsplash.com/photo-1682533945500-9e7012432f75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "Questions about peak mountains",
            user: "theindependentonline",
            subreddit: "nature",
            comment_count: 284
        },
        {
            upvote: 377,
            image: "https://images.unsplash.com/photo-1682361370648-521dce49abb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
            title: "Questions about Japan",
            user: "theindependentonline",
            subreddit: "nature",
            comment_count: 284
        },
        {
            upvote: 447,
            image: "https://images.unsplash.com/photo-1682517164856-e88a400c47c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            title: "Questions about Thailand beach",
            user: "theindependentonline",
            subreddit: "nature",
            comment_count: 284
        },
        {
            upvote: 703,
            image: "https://images.unsplash.com/photo-1682270239838-165e15f0a284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "Questions about supermarket",
            user: "theindependentonline",
            subreddit: "nature",
            comment_count: 284
        },
        {
            upvote: 363,
            image: "https://images.unsplash.com/photo-1681779279774-79d871470b6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1166&q=80",
            title: "Questions about photography",
            user: "theindependentonline",
            subreddit: "nature",
            comment_count: 284
        },
        {
            upvote: 871,
            image: "https://images.unsplash.com/photo-1681625731358-54ccba21a786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1139&q=80",
            title: "Questions about bookstore",
            user: "theindependentonline",
            subreddit: "nature",
            comment_count: 284
        },
        {
            upvote: 404,
            image: "https://images.unsplash.com/photo-1680817976135-91487402512f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",
            title: "Questions about desert riding",
            user: "theindependentonline",
            subreddit: "nature",
            comment_count: 284
        },
        {
            upvote: 499,
            image: "https://images.unsplash.com/photo-1680479611085-2a075987da25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
            title: "Questions about night clubs",
            user: "theindependentonline",
            subreddit: "nature",
            comment_count: 284
        },
        {
            upvote: 247,
            image: "https://images.unsplash.com/photo-1680178441861-c9539e92434f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1216&q=80",
            title: "Questions about advertisement",
            user: "theindependentonline",
            subreddit: "nature",
            comment_count: 284
        },
        {
            upvote: 900,
            image: "https://plus.unsplash.com/premium_photo-1682002190692-4fc23c7ed732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            title: "Questions about couple relationship",
            user: "theindependentonline",
            subreddit: "nature",
            comment_count: 284
        },
    ]
    return (
        <div className="posts">
            {posts.map(post => (
                <PostItem post={post}/>
            ))}
        </div>
    )
}
