import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './home-page/HomePage';
import LoginForm from './login-form/LoginForm';
import ApiProvider from './api/ApiProvider';

function App() {
  return (
    <BrowserRouter>
      <ApiProvider>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Routes>
      </ApiProvider>
    </BrowserRouter>
  );
}

export default App;
