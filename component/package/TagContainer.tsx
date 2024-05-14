import React from "react";
import styled from "./styled/styled.module.scss";

const TagContainer = ({ tag }: { tag: string }) => {
  return (
    <div className={styled.tagContainer} key={`tag_${tag}`}>
      <p className={styled.detailText}>{tag}</p>
    </div>
  );
};

export default TagContainer;
