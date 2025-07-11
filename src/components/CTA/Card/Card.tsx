import styles from '../cta.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  text: string;
}

const Card = ({ title, text }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__text}>{text}</p>
      </div>

      <div className={styles.right}>
        <div className={styles.right__links}>
          <Link href="#">
            <Image src="/cta/appstore.svg" width={180} height={52} alt="apple store" />
          </Link>
          <Link href="#">
            <Image src="/cta/googleplay.svg" width={180} height={52} alt="google play" />
          </Link>
        </div>
        <div className={styles.right__links_tel}>
          <Link href="#">
            <Image src="/hero/appstore-mob.svg" width={328} height={50} alt="apple store" />
          </Link>
          <Link href="#">
            <Image src="/hero/googleplay-mob.svg" width={328} height={50} alt="google play" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
