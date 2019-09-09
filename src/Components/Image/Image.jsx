import React, { useState } from 'react';
import './Image.css';
import Like from './Like';
import Dislike from './Dislike';
import LikeCounter from './LikeCounter';

export default function Image({ url, id }) {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <div className="image" style={{ backgroundImage: `url(${url})` }}>
      <div
        className="image-film"
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        {showButtons ? <Like id={id} /> : null}
        {showButtons ? <LikeCounter id={id} /> : null}
        {showButtons ? <Dislike id={id} /> : null}
      </div>
    </div>
  );
}
