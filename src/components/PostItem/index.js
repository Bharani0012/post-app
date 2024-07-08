import { useSelector } from "react-redux";
import "./index.css";

const PostItem = ({ post, onEdit, onRemove }) => {
    const isDarkTheme=useSelector(state=>state.theme.isDarkTheme)
    console.log(post)
    const {title, content, imageUrl}=post
    return (
        <div className={`${isDarkTheme ? 'post-item-dark-mode' : 'post-item-light-mode'} post-item col-10 m-3 col-md-5 d-flex justify-content-around`}>
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
                <button onClick={() => onEdit(post)} className="btn btn-success button m-1">Edit</button>
                <button onClick={()=>onRemove(post)} className="btn btn-danger button m-1">Delete</button>
            </div>
            {imageUrl && <img src={imageUrl} className="image m-1" alt={title}/>}
        </div>
    );
};

export default PostItem;
