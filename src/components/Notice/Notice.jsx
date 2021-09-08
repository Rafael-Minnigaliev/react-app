import "./Notice.scss";

export const Notice = ({ mouseOver, notice }) => {
  return (
    <p className="Notice" onMouseOver={mouseOver}>
      {notice}
    </p>
  );
};
