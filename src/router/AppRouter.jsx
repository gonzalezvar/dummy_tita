
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Loader } from '../components/atoms/loader/Loader';
import { HomeRouter } from '../components/pages/Home/routes/HomeRoutes';
import { NotFound } from '../components/template/NotFound';
import { Login } from '../login/Login';

export const AppRouter = () => {
  const status = useSelector(state => state.auth.status);
  const savedStatus = sessionStorage.getItem('status');

  if (status === 'verifying') {
    return <Loader />
  }

  return (
    <Routes>
      {(status === 'authenticated' || savedStatus === 'authenticated') ? (
        <>
          <Route path="/home/*" element={<HomeRouter />} />
          <Route path="*" element={<NotFound />} />
        </>

      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </>
      )}

    </Routes>
  );
};