import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';
import EmployeeDetail from './EmployeeDetail';

function App() {
    return (
        <div className="App">
            React JS CRUD Operation
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<EmployeeList />} />
                    <Route path='employee/create' element={<EmployeeCreate />} />
                    <Route path='employee/show/:id' element={<EmployeeDetail />} />
                    <Route path='employee/edit/:id' element={<EmployeeEdit />} />
                    <Route path='employee/delete/:id' element={<EmployeeEdit />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
