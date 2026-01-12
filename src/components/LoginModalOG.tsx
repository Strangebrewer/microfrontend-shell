import React, { useState } from "react";

type LoginModalProps = {
  close: () => any;
}

const LoginModal: React.FC<LoginModalProps> = ({ close }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onClickOutside(e: React.BaseSyntheticEvent) {
    if (e.target.className.includes('login-modal-wrapper')) {
      closeModal();
    }
  }

  function submit() {
    console.log('email:::', email);
    console.log('password:::', password);
    closeModal();
  }

  function closeModal() {
    setEmail('');
    setPassword('');
    close();
  }

  return (
    <div
      className="login-modal-wrapper"
      onClick={onClickOutside}
      style={{ display: 'flex', background: '#000000cc', position: 'fixed', inset: 0 }}>
      <div style={{ height: '300px', width: '300px', margin: 'auto', background: 'white' }}>
        <h2>Login</h2>
        <div>
          <label>email</label>
          <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} style={{ border: '1px solid black '}} />
        </div>
        <div>
          <label>password</label>
          <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} style={{ border: '1px solid black '}} />
        </div>
        <button onClick={submit}>submit</button>
      </div>
    </div>
  );
};

export default LoginModal;
