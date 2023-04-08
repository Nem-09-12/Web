import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/Components/Poppper';
import AccountItem from '~/Components/AccountItem';
import styles from './Header.module.scss';
import image from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
   const [searchResult, setSearchResult] = useState([1, 2, 3, 4, 5]);

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner-content')}>
            <div className={cx('logo')}>
               <img src={image.logo} alt="tiktok" />
            </div>

            <Tippy
               visible={false}
               interactive={true}
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx('search-tittle')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input type="search" placeholder="until i found you" />
                  <button className={cx('clear-btn')}>
                     <FontAwesomeIcon icon={faTimesCircle} />
                  </button>
                  <div className={cx('loading')}>
                     <FontAwesomeIcon icon={faSpinner} />
                  </div>
                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faSearch} />
                  </button>
               </div>
            </Tippy>

            <div className={cx('action')}>abc</div>
         </div>
      </header>
   );
}

export default Header;
