import {BiHome} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import {SlEnvolopeLetter} from 'react-icons/sl';
import {GiOrganigram} from 'react-icons/gi';
import {FaSignOutAlt} from 'react-icons/fa';
import {RiTeamLine} from 'react-icons/ri';
import {MdDashboard} from 'react-icons/md';

export const SideNav = [
    {
        title: 'Home',
        path: '/home',
        icon: <BiHome />,
        clssName: 'icon-home'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgProfile/>,
        clssName: 'icon-profile'
    },
    {
        title: 'Request',
        path: '/request',
        icon: <SlEnvolopeLetter/>,
        clssName: 'icon-request'
    }

]
