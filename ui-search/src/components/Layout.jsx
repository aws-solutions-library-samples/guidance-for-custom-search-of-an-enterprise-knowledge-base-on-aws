import { AppLayout, Box } from '@cloudscape-design/components';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { SessionStoreProvider } from 'src/stores/session';
import Footer from './Footer';
import NavSide from './NavSide';
import NavTop from './NavTop';
import useCheckAppConfigsEffect from 'src/hooks/useCheckAppConfigsEffect';

const Layout = () => {
  // useCheckAppConfigsEffect();
  return (
    <Box>
      <SessionStoreProvider>
        <NavTop />
        <AppLayout navigation={<NavSide />} content={<Outlet />} />
        <Footer />
        <Toaster />
      </SessionStoreProvider>
    </Box>
  );
};

export default Layout;
