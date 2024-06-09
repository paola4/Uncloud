import LoginForm from '@/stories/loginForm';
import React from 'react';

type Props = {};

const Login = (props: Props) => {
	return (
		<div className='mt-[8rem] flex w-full items-center justify-center'>
			<LoginForm />
		</div>
	);
};

export default Login;
