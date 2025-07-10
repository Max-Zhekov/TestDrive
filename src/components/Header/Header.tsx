import Image from 'next/image';
import style from './header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="container">
      <header className={style.header}>
        <div className={style.logo}>
          <Image
            src="./header/logo.svg"
            width={250}
            height={56}
            alt="Logo"
            className={style.header__logo}
          />
          <Image
            src="./header/logo-mobile.svg"
            width={74}
            height={56}
            alt="Logo"
            className={style.header__logo_mobile}
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
      </header>
    </div>
  );
};

export default Header;
