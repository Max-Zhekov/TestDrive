import styles from './newLevel.module.scss';
import Image from 'next/image';

const NewLevel = () => {
  return (
    <section className={styles.newLevel}>
      <div className="container">
        <div className={styles.newLevel__wrapper}>
          <div className={styles.newLevel__left}>
            <h2 className={styles.newLevel__title}>Your New Level of English</h2>
            <p className={styles.newLevel__text}>
              Build grammar and vocabulary step-by-step, with trucker life in mind.
            </p>
            <Image
              src="/newLevel/shtuka-1.png"
              width={310}
              height={360}
              alt=""
              className={styles.newLevel__img}
            />
          </div>
          <div className={styles.newLevel__right}>
            <ul className={styles.newLevel__right_list}>
              <li className={styles.newLevel__right_list_item}>
                <Image src="/newLevel/check.svg" width={56} height={56} alt="check" />
                <h4>Speak with police, dispatchers, and customers</h4>
              </li>
              <li className={styles.newLevel__right_list_item}>
                <Image src="/newLevel/check.svg" width={56} height={56} alt="check" />
                <h4>Understand rules, signs, and directions</h4>
              </li>
              <li className={styles.newLevel__right_list_item}>
                <Image src="/newLevel/check.svg" width={56} height={56} alt="check" />
                <h4>Fill out forms and documents</h4>
              </li>
              <li className={styles.newLevel__right_list_item}>
                <Image src="/newLevel/check.svg" width={56} height={56} alt="check" />
                <h4>Talk about truck problems and delays</h4>
              </li>
              <li className={styles.newLevel__right_list_item}>
                <Image src="/newLevel/check.svg" width={56} height={56} alt="check" />
                <h4>Order food, check in at hotels, and more</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewLevel;
