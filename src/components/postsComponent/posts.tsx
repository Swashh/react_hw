import {useEffect, useState} from "react";
import {IPost} from "../../models/postModel.tsx";
import {getPost} from "../../services/arrPosts.tsx";
import Post from "../postComponent/post.tsx";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getPost()
            .then(response => {
                setPosts(response)
            })
    }, []);

    return (
        <div>
            {
                posts.map((value) => <Post key={value.id} postInfo={value}/>)
            }
        </div>
    );
};

export default Posts;