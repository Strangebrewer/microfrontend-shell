import React, { useState } from "react";

import { useLogin } from '../hooks/userHooks';
// import Button from "../ui-library/Button";
import { Modal, Button } from "@bka-stuff/mfe-utils";

type LoginModalProps = {
  isOpen: boolean;
  close: () => any;
}

const LoginModal: React.FC<LoginModalProps> = ({ close, isOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLogin();

  function onClickOutside(e: React.BaseSyntheticEvent) {
    if (e.target.className.includes('login-modal-wrapper')) {
      closeModal();
    }
  }

  async function submit() {
    await login({ email, password });
    closeModal();
  }

  function closeModal() {
    setEmail('');
    setPassword('');
    close();
  }

  return (
    <Modal open={isOpen}>
      <div
        className="login-modal-wrapper"
        onClick={onClickOutside}
        style={{ display: 'flex', background: '#000000cc', position: 'fixed', inset: 0 }}>
        <div className="tw:h-[300px] tw:w-[300px] tw:m-auto tw:bg-[#ffffff] tw:px-[16px] tw:py-[8px]">
          <h2 className="tw:text-[24px] tw:font-semibold tw:text-center tw:my-[8px]">Login</h2>
          <div>
            <label className="tw:block">email</label>
            <input className="tw:block tw:w-full" type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} style={{ border: '1px solid black ' }} />
          </div>
          <div>
            <label className="tw:block">password</label>
            <input className="tw:block tw:w-full" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} style={{ border: '1px solid black ' }} />
          </div>
          <div className="tw:flex tw:justify-center tw:gap-[8px] tw:py-[8px]">
            <Button text="cancel" variant="red" onClick={closeModal} />
            <Button text="submit" variant="blue" last onClick={submit} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
