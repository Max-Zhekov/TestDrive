import styles from './practise.module.scss';
import Image from 'next/image';

const Practice = () => {
  return (
    <section className={styles.practice}>
      <div className="container">
        <div className={styles.practice__wrapper}>
          <div className={styles.practice__left}>
            <h2 className={styles.practice__title}>Practice Speaking - On the Road</h2>
            <ul className={styles.practice__list}>
              <li className={styles.practice__list_item}>
                <Image src="/practice/1.svg" width={40} height={40} alt="icon" />
                <h3>Listen to real voices</h3>
              </li>
              <li className={styles.practice__list_item}>
                <Image src="/practice/2.svg" width={40} height={40} alt="icon" />
                <h3>Speak and get feedback</h3>
              </li>
              <li className={styles.practice__list_item}>
                <Image src="/practice/3.svg" width={40} height={40} alt="icon" />
                <h3>Improve with personalized tips</h3>
              </li>
            </ul>
          </div>

          <div className={styles.practice__right}>
            <div className={styles.practice__card}>
              <div className={styles.practice__card_testimonial}>
                <Image src="/practice/4.svg" width={44} height={44} alt="icon" />
                <p className={styles.practice__card_text}>
                  I feel more confidenttalking at weigh stations and pickups
                </p>
              </div>
              <div className={styles.practice__customer}>
                <Image
                  className={styles.practice__customer}
                  src="/practice/men.png"
                  width={64}
                  height={64}
                  alt="men"
                />
                <div className={styles.practice__customer_info}>
                  <p className={styles.practice__customer_info_name}>Andriy</p>
                  <p className={styles.practice__customer_info_job}>Driver from Ukraine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Practice;
