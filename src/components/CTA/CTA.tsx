import Card from './Card/Card';
import styles from './cta.module.scss';

interface CardProps {
  title: string;
  text: string;
}

const CTA = ({ title, text }: CardProps) => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <Card title={title} text={text} />
      </div>
    </section>
  );
};

export default CTA;
