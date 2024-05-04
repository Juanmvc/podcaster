import classes from './PureHTMLContent.module.scss';

type PureHTMLContentProps = {
  html: string;
};

const PureHTMLContent = ({
  html,
}: PureHTMLContentProps) => {

  return (
    <div
      className={classes['PureHTMLContent']}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default PureHTMLContent;