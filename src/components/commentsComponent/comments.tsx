import {useEffect, useState} from "react";
import {IComments} from "../../models/commentsModel.tsx";
import {getComments} from "../../services/arrComments.tsx";
import Comment from "../commentComponent/comment.tsx";

const Comments = () => {
    const [comments, setComments] = useState<IComments[]>([])

    useEffect(() => {
        getComments()
            .then(response => {
                setComments(response)
            })

    }, []);


    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
};

export default Comments;