import React from "react";

function Article({title, date, preview, time}){
    const defaultDate = "January 1, 1970"
    return(
        <article>
            <h3>{title}</h3>
            <small>{date || defaultDate} • {time}minute read.</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article