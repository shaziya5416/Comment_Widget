import { useEffect, useState } from 'react'
import './App.css'
import { PROFILE, SORT_BY, LOCAL_KEY, timeSince, randomNumber } from './constants';
import CommentBox from './Components/CommentBox';

const newReply = (value) => ({
  createdAt: Date.now(),
  value,
  id: Date.now(),
  user: PROFILE[randomNumber()]
})

const newComment = (commentInput) => ({
  id: Date.now(),
  value: commentInput,
  likeCount: 0,
  createdAt: Date.now(),
  replies: [],
  user: PROFILE[randomNumber()]
})

function App() {
  const [commentInput, setCommentInput] = useState("");
  const [comment, setComment] = useState(JSON.parse(localStorage.getItem(LOCAL_KEY)) || []);
  const [sortedComments, setSortedComments] = useState([]);
  const [sortBy, setSortBy] = useState(SORT_BY.dateDesc);
  const [editInput, setEditInput] = useState("");
  const [replytocommentID, setReplytocommmentID] = useState("");
  const [replyInput, setReplyInput] = useState("")

  useEffect(() => {
    sortComments()
  }, [sortBy, comment])

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(comment));
  }, [comment])

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      setComment([...comment, newComment(commentInput)])
      setCommentInput("");
    }

  }
  const handleInput = (e) => {
    let { value } = e.target;
    if (value.length <= 200) {
      setCommentInput(value)
    }
  }

  const handleEditClick = (item) => {
    setEditInput(item.value)
  }

  const handleReplytocomment = (e, id) => {
    if (e.keyCode === 13) {
      let commentClone = structuredClone(comment);
      commentClone.forEach((item) => {
        if (item.id == id) {
          item.replies = [...item.replies, newReply(e.target.value)]
        }
      })
      setComment(commentClone);
      setReplyInput("")
      setReplytocommmentID("")
    }
  }

  const handleDelete = (id) => {
    // console.log(comment,"comment");
    const newArray = comment.filter(items => items.id != id);
    setComment(newArray);
    // console.log(id);
  }

  const handleLike = (id, count) => {
    let commentClone = structuredClone(comment);
    commentClone.forEach((item) => {
      if (item.id == id && item.likeCount + count >= 0) {
        item.likeCount += count;
      }
    })
    setComment(commentClone);
  }
  const sortComments = () => {
    let commentClone = structuredClone(comment)
    switch (sortBy) {
      case SORT_BY.likeAsc:
        commentClone.sort((a, b) => a.likeCount - b.likeCount);
        break;
      case SORT_BY.dateAsc:
        commentClone.sort((a, b) => a.createdAt - b.createdAt);
        break;
      case SORT_BY.likeDesc:
        commentClone.sort((a, b) => b.likeCount - a.likeCount);
        break;
      case SORT_BY.dateDesc:
        commentClone.sort((a, b) => b.createdAt - a.createdAt);
        break;
      default: break;

    }
    setSortedComments(commentClone)

  }

  const handleEditSave = (id) => {
    const commentClone = structuredClone(comment);
    commentClone.forEach((item) => {
      if (item.id == id) {
        item.value = editInput;
      }
    })
    setComment(commentClone);
  }


  return (
    <div className='wrapper'>
      <div>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value={SORT_BY.dateAsc}>Date (Old to New)</option>
          <option value={SORT_BY.dateDesc}>Date (New to Old)</option>
          <option value={SORT_BY.likeAsc}>Like (Low to High)</option>
          <option value={SORT_BY.likeDesc}>Like (High to Low)</option>
        </select>
      </div>
      <div className='wrapper1'>
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt='Profile' className='profile' />
        <input type="text" value={commentInput} onChange={handleInput} onKeyUp={(e) => { handleEnter(e) }} placeholder="Join the discussion..." maxLength="200" className='profile'></input>
      </div>
      <div className='wrapperComment'>
        {
          sortedComments.map((item) =>
            <CommentBox 
            item={item} 
            handleDelete={handleDelete} 
            handleLike={handleLike} 
            handleEditSave={handleEditSave} 
            setReplytocommmentID={setReplytocommmentID} 
            setEditInput={setEditInput} 
            handleEditClick={handleEditClick} handleReplytocomment={handleReplytocomment} 
            editInput={editInput}
            replytocommentID={replytocommentID}
            replyInput={replyInput}
            setReplyInput={setReplyInput}
            />)
        }
      </div>
    </div>
  )
}
export default App
