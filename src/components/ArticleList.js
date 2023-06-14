import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    return(
        <main>
           {posts.map((postArray) => {
            return(
                <Article 
                    key={postArray.id}
                    title={postArray.title}
                    date={postArray.date}
                    preview={postArray.preview}
                    time={postArray.minutes}
                />
            )
           })}
        </main>
    )
}

export default ArticleList

 