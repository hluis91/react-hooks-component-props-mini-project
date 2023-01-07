import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList(){
    const articleList = blogData.posts.map((data)=> {
        return <Article
        id={data.id}
        title={data.title}
        date={data.date}
        preview={data.preview} />
    })
    return (
        <main>{articleList}</main>
    )
}

export default ArticleList;