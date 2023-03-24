import { HavingSidebar } from '~/components/Layouts';

import Homepage from '~/pages/Homepage';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import ContributorList from '~/pages/ContributorList';
import Chat from '~/pages/Chat';
import UploadAvatar from '~/pages/UploadAvatar'

// Public Routes: Access without login
const publicRoutes = [
    { path: '/', component: Homepage, layout: HavingSidebar },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/contributorList', component: ContributorList, layout: HavingSidebar },
    { path: '/chat', component: Chat },
    { path: '/uploadAvatar', component: UploadAvatar },
];

// Public Routes: Access within login
const privateRoutes = [{ path: '/chat', component: Chat }];

export { publicRoutes, privateRoutes };
