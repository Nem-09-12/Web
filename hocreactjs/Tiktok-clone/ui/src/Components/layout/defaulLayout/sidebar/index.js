import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <h3>Sidebar page</h3>
      </aside>
   );
}

export default Sidebar;
