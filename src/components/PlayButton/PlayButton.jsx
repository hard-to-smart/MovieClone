import styles from '../PlayButton/PlayButton.module.css'
const PlayButton = () => {
  return (
    <div className={`${styles.container} size-16`}>
      <div href="#" className={styles.playBut}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60.7px"
          height="60.7px"
          viewBox="0 0 213.7 213.7"
        >
          <polygon
            className={styles.triangle}
            fill="none"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            points="73.5,62.5 148.5,105.8 73.5,149.1"
          />
          <circle
            className={styles.circle}
            fill="none"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            cx="106.8"
            cy="106.8"
            r="103.3"
          />
        </svg>
      </div>
    </div>
  );
};

export default PlayButton