import React from "react";
import classes from "./PureHTMLContent.module.scss";

type PureHTMLContentProps = {
  html: string;
};

const PureHTMLContent = ({ html }: PureHTMLContentProps) => {
  return (
    <div
      data-testid="html-content"
      className={classes["PureHTMLContent"]}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default PureHTMLContent;
