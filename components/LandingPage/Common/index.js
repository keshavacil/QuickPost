import styles from "./style.module.css";

const Common = (props) => {
  //   const [title, para, button, image, tag] = props;
  return (
    <div className={styles.common}>
      <div className={styles.left}>
        <h3>{props.subtitle}</h3>
        <h2>{props.title}</h2>
        <p>{props.para}</p>
        <button  style={{ display: props.showButton ? 'block' : 'none' }}>{props.button}</button>
        <p>{props.tag}</p>
      </div>
      <div className={styles.right}><img src={props.image} /></div>
    </div>
  );
};

export default Common;
