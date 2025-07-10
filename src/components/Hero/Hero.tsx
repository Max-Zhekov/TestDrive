import Image from 'next/image';
import style from './hero.module.scss';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className={style.hero__wrapper}>
      <section className="container">
        <div className={style.hero}>
          <div className={style.hero__left}>
            <h2 className={style.hero__left_title}>Lingo Driver: English for Truck Drivers</h2>
            <p className={style.hero__left_text}>
              Learn real-life English for the road. Anytime. Anywhere.
            </p>

            <div className={style.hero__left_links}>
              <Link href="#">
                <Image src="/hero/appstore.svg" width={180} height={52} alt="apple store" />
              </Link>
              <Link href="#">
                <Image src="/hero/googleplay.svg" width={180} height={52} alt="google play" />
              </Link>
            </div>

            <div className={style.hero__left_links_mobile}>
              <Link href="#">
                <Image src="/hero/appstore-mob.svg" width={360} height={50} alt="apple store" />
              </Link>
              <Link href="#">
                <Image src="/hero/googleplay-mob.svg" width={360} height={50} alt="google play" />
              </Link>
            </div>
          </div>
          <div className={style.hero__right}>
            <Image
              src="/hero/hero.webp"
              width={638}
              height={631}
              alt="man is sitting in car and learn english"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
