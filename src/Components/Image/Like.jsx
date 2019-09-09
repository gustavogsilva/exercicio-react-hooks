import React from 'react';
import './Image.css';
import thumbsUp from '../../Assets/thumbs-up.png';
import { useStateContext } from '../../StateContext';
import { incrementLike } from '../../StateActions';

export default function Like({ id }) {
  const [, dispatch] = useStateContext();

  return (
    <button
      className="like"
      onClick={() => dispatch(incrementLike(id))}
    >
      <img src={thumbsUp} alt="Like" />
    </button>
  );
}
