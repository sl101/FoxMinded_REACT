import style from './DisplayField.module.scss';

const DisplayField = (props) => {
  return <span className={style.resultField}>{props.number}</span>;
};

export default DisplayField;
