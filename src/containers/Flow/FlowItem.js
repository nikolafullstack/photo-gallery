import React from 'react';

import {
  Favorite,
  ChatBubble,
} from '@material-ui/icons';

function FlowItem({ image, ownerImage, ownerName, text, likes, comments }) {
  return (
    <div className="app-flow__grid__column__item">
      {image && <img src={image} crossOrigin="anonymous" alt="" />}
      <div className="app-flow__grid__column__item__info">
        <div className="app-flow__grid__column__item__info__name">
          {text}
        </div>
        <div className="app-flow__grid__column__item__info__author">
          <div className="app-flow__grid__column__item__info__author__name-avatar">
            <img src={ownerImage} alt="" />
            <div className="app-flow__grid__column__item__info__author__name">{ownerName}</div>
          </div>
          <div className="app-flow__grid__column__item__info__author__activity">
            <div className="app-flow__grid__column__item__info__author__activity__heart">
              <Favorite />
              <span>{likes}</span>
            </div>
            <div className="app-flow__grid__column__item__info__author__activity__comments">
              <ChatBubble />
              <span>{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowItem;
