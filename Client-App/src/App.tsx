import './Site.css';
import { Routes, Route } from 'react-router';
import SignInForm from './_auth/forms/SignInForm';
import { Home } from './_root/Pages';
import SignUpForm from './_auth/forms/SignUpForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* Public routes */}
            <Route element={<AuthLayout />}>
                <Route path="/sign-in" element={<SignInForm />} />
                <Route path="/sign-out" element={<SignUpForm />} />
            </Route>
            {/* private routes */}
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </main>
  )
}

export default App