import React from 'react';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  return (
    <div className="m-4 p-4 w-80">
      <div className="text-3xl font-bold mb-10">회원가입</div>

      <div>
        <TextField label="타이틀" placeholder="내용을 입력해주세요." />
        <div className="m-3"></div>
        <TextField label="타이틀" placeholder="내용을 입력해주세요." />
        <div className="m-3"></div>
        <TextField label="타이틀" placeholder="내용을 입력해주세요." />
        <div className="m-3"></div>
        <TextField label="타이틀" placeholder="내용을 입력해주세요." />
      </div>

      <div className="mt-8">
        <div className="text-center py-4 text-gray-800 border border-gray-800 mt-2 rounded border">회원가입</div>
      </div>
    </div>
  );
};
