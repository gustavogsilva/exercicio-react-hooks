import React from 'react';
import { useStateContext } from '../../StateContext';

export default function LikeCounter({ id }) {
  const [{ imageList }] = useStateContext();
  let imgIndex = imageList.findIndex(image => image.id === id);
  return (
    <div>
      <p className="like-counter">{imageList[imgIndex].likeCounter}</p>
    </div>
  );
}
