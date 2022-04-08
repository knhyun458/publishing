import React from 'react';
import { TextField } from '../components/TextField';

export const LoginPage = () => {
  return (
    <div className="m-4 p-4 w-80">
      <div className="text-3xl font-bold mb-10">로그인</div>

      <div>
        <TextField label="이메일" placeholder="이메일을 입력해주세요." />
        <div className="m-4"></div>
        <TextField
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          type="password"
        />
      </div>

      <div className="mt-10">
        <div className="bg-gray-800 text-white text-center py-3 rounded h-12 mb-2">로그인</div>
        <div className="text-center py-3 text-gray-800 border-gray-800 mt-2 h-12 rounded border">회원가입</div>
      </div>
    </div>
  );
};
