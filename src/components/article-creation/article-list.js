import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArticleSidebarList = props => {
  const articleList = props.data.map(articleItem => {
    return (
      <div key={articleItem.id} className="article-item-thumb">
        <div className="article-thumb-img">
          <img src={articleItem.thumb_image_url} />
        </div>

        <div className="text-content">
          <div className="title">{articleItem.name}</div>

          <div className="actions">
            <a
              className="action-icon"
              onClick={() => props.handleEditClick(articleItem)}
            >
              {/* <FontAwesomeIcon icon="edit" /> */}
              Edit
            </a>

            <a
              className="action-icon"
              onClick={() => props.handleDeleteClick(articleItem)}
            >
                Delete
              {/* <FontAwesomeIcon icon="trash" /> */}
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <div className="article-sidebar-list-wrapper">{articleList}</div>;
};

export default ArticleSidebarList;