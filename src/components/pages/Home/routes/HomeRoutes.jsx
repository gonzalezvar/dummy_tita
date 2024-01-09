import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from '../Home';
import { Template } from '../../../template/TemplateHome';
import { NotFound } from '../../../template/NotFound';

export const HomeRouter = () => {

  return (
    <Routes>
        <Route path="/template"  element={ <Template /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="/*" element={<NotFound/>} />
    </Routes>
  );
};