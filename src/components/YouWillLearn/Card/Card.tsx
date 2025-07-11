import Image from 'next/image';
import styles from '../youWillLearn.module.scss';
import { IFeatureItem } from '@/content/youWillLearn/types';

interface CardProps {
  feature: IFeatureItem;
}

const Card = ({ feature }: CardProps) => {
  return (
    <div className={styles.card}>
      <Image src={feature.icon} alt={feature.title} width={48} height={48} />
      <h3 className={styles.card__title}>{feature.title}</h3>
      <p className={styles.card__text}>{feature.text}</p>
    </div>
  );
};

export default Card;
