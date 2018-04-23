import About from './components/About';
import Users from './components/Users';
import Trains from './components/Trains';
import AppConfig from './components/AppConfig';
import Environment from './components/Environment';

const routes = [
  {
    path: '/users',
    component: Users,
    key: 'users',
  },
  {
    path: '/trains',
    component: Trains,
    key: 'trains',
  },
  {
    path: '/environments',
    component: Environment,
    key: 'environment',
  },
  {
    path: '/config',
    component: AppConfig,
    key: 'config'
  },
  {
    path: '/',
    component: About,
    key: 'about',
  },
];

export default routes;