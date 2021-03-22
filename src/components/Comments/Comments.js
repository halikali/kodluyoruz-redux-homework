import React from 'react'
import { addComment, getComments} from '../../store/actions/actions'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Redirect , useHistory } from 'react-router-dom';

const Comments = () => {
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getComments());
    }, []);

    const comments = useSelector((state) => state.commentsReducer.data);

    const [newComment, setNewComment] = useState({});
    const history = useHistory();
    const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addComment(newComment));
    };

    const onClickHandler = (event) => {
      event.preventDefault();
      history.push("/")
    }
    return (
        <div>
            {comments.length > 0 &&
            comments.map((comment) => (
              <>
                <p className="photo-info">
                  <span>{comment.name}</span> - {comment.body}
                </p>
              </>
            ))}
          <form onSubmit={handleSubmit}>
            <input
              onChange={(event) =>
                setNewComment({ name: "Isim", body: event.target.value })
              }
              value={newComment.body}
            />
            <button  onClick={(event) => onClickHandler(event)}>vazgeç</button>
          </form> 
        </div>
    )
}

export default Comments;