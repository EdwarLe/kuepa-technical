import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-3'>
        <h1 className='text-4xl text-center'>Login</h1>
        <LoginForm />
    </div>
    );
};

export default LoginPage;
