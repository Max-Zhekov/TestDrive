import Image from 'next/image';
import style from './header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__container}>
          <div className={style.logo}>
            <Image
              src="./header/logo.svg"
              width={250}
              height={56}
              alt="Logo"
              className={style.logo_desk}
            />
            <Image
              src="./header/logo-mobile.svg"
              width={65}
              height={50}
              alt="Logo"
              className={style.logo_mob}
            />
          </div>

          <div className={style.links}>
            <ul className={style.links__list}>
              <li className={style.links__list_item}>
                <Link href="#">
                  <Image src="./header/facebook.svg" width={32} height={32} alt="facebook" />
                </Link>
              </li>

              <li className={style.links__list_item}>
                <Link href="#">
                  <Image src="./header/instagram.svg" width={32} height={32} alt="instagram" />
                </Link>
              </li>

              <li className={style.links__list_item}>
                <Link href="#">
                  <Image src="./header/tiktok.svg" width={32} height={32} alt="tiktok" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
