import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus, Status } from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import Layout from '../layout/layout';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { getOfferStatus } from '../../store/offer-procces/offer-procces.selector';

function App(): JSX.Element {
  const isAuthChecked = useAppSelector(getAuthorizationStatus);
  const isDataLoading = useAppSelector(getOfferStatus);

  if (isAuthChecked === AuthorizationStatus.Unknown || isDataLoading === Status.Loading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={`${AppRoute.Offer}:id`} element={<Property />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
