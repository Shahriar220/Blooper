import React from 'react'

const UpvotesSection=({articleName,upvotes,setArticleInfo})=>{

    const upvoteAricle=async()=>{
        const result=await fetch(`/api/articles/${articleName}/upvote`,{
            method:'post',
        });
        const body=await result.json();
        setArticleInfo(body)
    }

    return(
        <div>
        <button onClick={()=>upvoteAricle()} id="upvotes-section">Upvote</button>
        <p>This post has been upvoted {upvotes} times</p>
    </div>
    );
    
}

export default UpvotesSection;