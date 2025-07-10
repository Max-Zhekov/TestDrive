import Image from 'next/image';
import style from './whyLingo.module.scss';

const WhyLingo = () => {
  return (
    <section className="container">
      <div className={style.whyLingo}>
        <div className={style.whyLingo__left}>
          <h2 className={style.whyLingo__left_title}>Why Lingo Driver?</h2>
          <p className={style.whyLingo__left_desc}>
            Lingo Driver is the first English learning app built just for truck drivers in the USA.
          </p>
          <p className={style.whyLingo__left_text}>
            Designed to fit your route and routine, our lessons teach you the English you need to do
            your job safely, professionally, and confidently.
          </p>
        </div>
        <div className={style.whyLingo__right}>
          <div className={style.whyLingo__right_card}>
            <div className={style.whyLingo__right_card_circle}></div>

            <div className={style.whyLingo__right_card_title}>
              Make your English meet CDL requirements in the easiest way!{' '}
            </div>

            <div className={style.whyLingo__right_card_item}>
              <Image
                src="/whyLingo/shtuka-1.svg"
                width={40}
                height={40}
                alt="icon 1"
                className={style.whyLingo__right_card_item_img}
              />
              <p className={style.whyLingo__right_card_item_text}>Build your job vocabulary</p>
            </div>

            <div className={style.whyLingo__right_card_item}>
              <Image
                src="/whyLingo/shtuka-2.svg"
                width={40}
                height={40}
                alt="icon 2"
                className={style.whyLingo__right_card_item_img}
              />
              <p className={style.whyLingo__right_card_item_text}>Improve speaking and listening</p>
            </div>

            <div className={style.whyLingo__right_card_item}>
              <Image
                src="/whyLingo/shtuka-3.svg"
                width={40}
                height={40}
                alt="icon 3"
                className={style.whyLingo__right_card_item_img}
              />
              <p className={style.whyLingo__right_card_item_text}>
                Get ready for CDL-related language
              </p>
            </div>

            <div className={style.whyLingo__right_card_footer}>
              It’s simple, feedback-rich, and made for life on the road.  Speak with confidence,
              stay safe, and handle your job in English!
            </div>
          </div>
        </div>
        <div className={style.truck}>
          <Image src="/whyLingo/track.webp" width={390} height={177} alt="truck" />
        </div>
      </div>
    </section>
  );
};

export default WhyLingo;
