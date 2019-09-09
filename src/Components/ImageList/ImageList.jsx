import React from 'react';
import './ImageList.css';
import Image from '../Image/Image';
import { useStateContext } from '../../StateContext';

export default function ImageList() {
  const [{ imageList }] = useStateContext();

  return (
    <div className="image-list">
      {imageList.map(image => (
        <Image url={image.url} id={image.id} key={image.id} />
      ))}
    </div>
  );
}
