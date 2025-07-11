import style from './youWillLearn.module.scss';
import Card from './Card/Card';
import features from '@/content/youWillLearn/features';

const YouWillLearn = () => {
  return (
    <section className={`${style.youWillLearn} background_grey`}>
      <div className="container">
        <div className={style.youWillLearn__header}>
          <h2 className={style.youWillLearn__header_title}>What You&rsquo;ll Learn</h2>
          <p className={style.youWillLearn__header_text}>
            Whether you&rsquo;re new to English or just want to improve, Lingo Driver helps you
            understand rules, fill out forms, give updates, and stay safe on the job
          </p>
        </div>
        <div className={style.youWillLearn__cards}>
          {features.map((feature) => (
            <Card key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouWillLearn;
