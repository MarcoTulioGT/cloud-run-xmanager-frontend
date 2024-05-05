import  { Routes, Route } from 'react-router-dom';


import Invoices from './pages/Invoices/invoices.page';
import Table from './components/table/table.component.jsx';

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Invoices/>}>
      </Route>
      <Route path='/table' element={<Table/>}>
      </Route>
    </Routes>
  );
}

export default App;