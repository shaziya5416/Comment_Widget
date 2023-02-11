import React,{useState} from 'react'
import { timeSince } from '../constants'
import { FaTrash, FaAngleUp, FaAngleDown, FaReply } from "react-icons/fa";

function CommentBox({item,handleDelete,handleEditClick,handleEditSave,handleReplytocomment,setEditInput,setReplyInput,setReplytocommmentID,handleLike,replytocommentID,editInput,replyInput}) {
    const [editID, setEditID] = useState("");
    const manageEditClick=()=>{
        handleEditClick(item)
        setEditID(item.id)
    }
    const manageEditSave=()=>{
       handleEditSave(item.id)
       setEditID("")
    }
    return (
        <div>
            {editID == item.id ?
                <div>
                    <div className='comment'>
                        <img src={item.user.imgURL} className='commentPicture'></img>
                        <div className='commentExceptImage'>
                            <div className='profileAndTime'>
                                <span className='name'>{item.user.name}</span>
                                <span className='time'>{timeSince(item.createdAt)}</span>
                            </div>
                            <input value={editInput} onChange={(e) => setEditInput(e.target.value)} type="text" maxLength="200" className='editInput' ></input>
                            <button onClick={manageEditSave}>Save</button>
                            <button onClick={() => setEditID("")}>Cancel</button>
                            <div className='icons'>
                                <button onClick={() => { handleDelete(item.id) }}><FaTrash /></button>
                                <button onClick={() => handleLike(item.id, 1)}><FaAngleUp />{item.likeCount}</button>
                                <button onClick={() => handleLike(item.id, -1)}><FaAngleDown /></button>
                                <button onClick={() => setReplytocommmentID(item.id)}>Reply <FaReply /></button>
                            </div>
                        </div>
                    </div>
                </div>
                : (

                    <div className='comment'>
                        <img src={item.user.imgURL} className='commentPicture'></img>
                        <div className='commentExceptImage'>
                            <div className='profileAndTime'>
                                <span className='name'>{item.user.name}</span>
                                <span className='time'>{timeSince(item.createdAt)} ago</span>
                            </div>
                            <h4>{item.value}</h4>
                            <div className='icons'>
                                <button onClick={() => { handleDelete(item.id) }}><FaTrash /></button>
                                <button onClick={() => handleLike(item.id, 1)}><FaAngleUp />{item.likeCount}</button>
                                <button onClick={() => handleLike(item.id, -1)}><FaAngleDown /></button>
                                <button onClick={() => setReplytocommmentID(item.id)}>Reply <FaReply /></button>
                                <button onClick={manageEditClick}>Edit</button></div>
                        </div>
                    </div>
                )}

            {replytocommentID == item.id ?
                <>
                    <input type="text" value={replyInput} onChange={(e) => { setReplyInput(e.target.value) }} className="replyButton" onKeyUp={(e) => { handleReplytocomment(e, item.id) }} maxLength="200"></input>
                    <button onClick={() => setReplytocommmentID("")}>Cancel</button>
                </>
                : null}
            <div>{item.replies.map((replyObject) => (<div className='comment reply'>
                <img src={replyObject.user.imgURL} className='commentPicture reply'></img>
                <div className='commentExceptImage reply'>
                    <div className='profileAndTime reply'>
                        <span className='name reply'>{replyObject.user.name}</span>
                        <span className='time reply'>{timeSince(replyObject.createdAt)} ago</span>
                    </div>
                    <h5>{replyObject.value}</h5>
                </div>
            </div>))}</div>
        </div>

    )
}

export default CommentBox
