import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './home-page/HomePage';
import LoginForm from './login-form/LoginForm';
import ApiProvider from './api/ApiProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ApiProvider>
          <Routes>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<h1>Not Found 404</h1>} />
          </Routes>
        </ApiProvider>
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
