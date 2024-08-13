import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
    return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-3'>
        <h1 className='text-4xl text-center'>Register</h1>
        <RegisterForm />
    </div>
    );
};

export default RegisterPage;
