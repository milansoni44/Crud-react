import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmployeeList from './EmployeeList';

function App() {
    return (
        <div className="App">
            React JS CRUD Operation
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<EmployeeList />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
