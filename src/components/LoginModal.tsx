import React, { useState } from "react";
import Modal from '@xds-react/modal';
import { Button } from '@xds-react/button';
import TextField from "@xds-react/text-field";

import { useLogin } from '../hooks/userHooks';

type LoginModalProps = {
  show: boolean;
  close: () => any;
}

const LoginModal: React.FC<LoginModalProps> = ({ close, show }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLogin();

  async function submit() {
    console.log('email:::', email);
    console.log('password:::', password);
    await login({ email, password });
    closeModal();
  }

  function closeModal() {
    setEmail('');
    setPassword('');
    close();
  }

  return (
    <Modal
      showModal={show}
      closeModal={closeModal}
      width="480px"
      height="auto"
      headerTitle="Login"
      actions={[
        <Button
          variant="borderless"
          color="red"
          onClick={closeModal}
          title="Cancel"
        />,
        <Button
          variant="borderless"
          color="teal"
          onClick={submit}
          title="Login"
        />,
      ]}
    >
      <div className="tw:h=[100%] tw:w-[100%] tw:p-[16px]">
        <div className="tw:mb-[16px]">
          <TextField
            id="login-email-text-field"            
            label="Email"
            isRequired
            onChange={setEmail}
            value={email}
          />
        </div>
        <TextField
          id="login-password-text-field"
          label="Password"
          isRequired
          onChange={setPassword}
          value={password}
        />
      </div>
    </Modal>
  );
};

export default LoginModal;
