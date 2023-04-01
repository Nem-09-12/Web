import Home from '~/pages/home';
import Following from '~/pages/following';
import Profile from '~/pages/profile';
import Upload from '~/pages/upload';
import { HeaderOnly } from '~/Components/layout';

const publicRoutes = [
   { path: '/', component: Home },
   { path: '/following', component: Following },
   { path: '/profile', component: Profile },
   { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
