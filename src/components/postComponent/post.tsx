import {FC} from "react";
import {IPost} from "../../models/postModel.tsx";
import "./post.css"
type PostType = {
    postInfo: IPost
}
const Post: FC<PostType> = ({postInfo}) => {
    return (
        <div className="italic p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <span className="font-bold text-blue-600">Айді поста</span> - {postInfo.id}
            <br />
            <span className="font-bold text-blue-600">Тайтил</span> - {postInfo.title}
            <br />
            <span className="font-bold text-blue-600">Тіло</span> - {postInfo.body}
            <br />
            <span className="font-bold text-blue-600">Айді користувача</span> - {postInfo.userId}
        </div>
    );
};

export default Post;