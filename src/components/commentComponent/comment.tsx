import {FC} from "react";
import {IComments} from "../../models/commentsModel.tsx";

export type CommentType = {
    comment: IComments
}
const Comment: FC<CommentType> = ({comment}) => {
    return (
        <div>
            <div className="p-4 bg-gray-50 rounded-md text-sm">
                <p><span className="font-bold">ID:</span> {comment.id}</p>
                <p><span className="font-bold">Коментар:</span> {comment.body}</p>
                <p><span className="font-bold">Email:</span> {comment.email}</p>
                <p><span className="font-bold">Ім’я:</span> {comment.name}</p>
                <p><span className="font-bold">Post ID:</span> {comment.postId}</p>
            </div>
        </div>
    );
};

export default Comment;