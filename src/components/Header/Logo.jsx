import style from './Logo.module.scss';

const Logo = (prop) => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={prop.src} alt={prop.alt} />
      </div>
    </header>
  );
};
export default Logo;
