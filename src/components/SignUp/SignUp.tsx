import React, {useState} from 'react';
import {Input} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {Link, useHistory} from 'react-router-dom';
import axios from '@/config/axios';
import './SignUp.less';


const SignUp = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const history = useHistory();

  const commit = async () => {
    axios.post('sign_up/user', {
      account,
      password,
      password_confirmation: passwordConfirmation
    }).then(() => {
      console.log('注册成功');
      history.push('/login');
    }, (e) => {
      throw new Error(e);
    });
  };
  return (
    <div className="sign-up">
      <h1>欢迎注册 Tomatodo</h1>
      <Input size="large" placeholder="请输入用户名" prefix={<UserOutlined/>}
             onChange={(e) => {setAccount(e.target.value);}}/>
      <Input.Password size="large" placeholder="请输入密码" onChange={(e) => {setPassword(e.target.value);}}/>
      <Input.Password size="large" placeholder="请再次输入密码"
                      onChange={(e) => {setPasswordConfirmation(e.target.value);}}/>
      <button onClick={commit} className="login-button">注册</button>
      如果已经有账号，请立刻<Link to="/login" className="link">登陆</Link>
    </div>

  );
};

export default SignUp;