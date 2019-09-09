import React from 'react';
import './Image.css';
import thumbsDown from '../../Assets/thumbs-down.png';
import { useStateContext } from '../../StateContext';
import { decrementLike } from '../../StateActions';

export default function Like({ id }) {
  const [, dispatch] = useStateContext();

  return (
    <button
      className="dislike"
      onClick={() => dispatch(decrementLike(id))}
    >
      <img src={thumbsDown} className="dislike" alt="Dislike" />
    </button>
  );
}
