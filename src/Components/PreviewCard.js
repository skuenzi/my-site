import React from "react";

export default function PreviewCard(props) {
  const { id, className, handlePreviewClick, title, img, description } = props;

  return (
    <div
      className={`preview-card ${className}`}
      onClick={() => handlePreviewClick(id)}
    >
      <img src={img} alt={title} className="preview-card-img" />
      <h4 className="preview-card-title">{title}</h4>
      <p className={`preview-card-description`}>{description}</p>
    </div>
  );
}
