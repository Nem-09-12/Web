import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/73421b705a968b3a962538e23d5ff758~c5_300x300.webp?x-expires=1680786000&x-signature=E37hX%2BvMZgnxbWECS%2FdEy9Si1i8%3D"
            alt=""
         />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>dkn.nnnnn</span>
               <FontAwesomeIcon className={cx('checked')} icon={faCircleCheck} />
            </h4>
            <span className={cx('username')}>dkn</span>
         </div>
      </div>
   );
}

export default AccountItem;
