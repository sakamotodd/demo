import React from 'react';
import Header from '../../components/Header';

export default function lesson4() {
  const text: string = 'foo';
  return (
    <div>
      <Header />
      <div className="mx-4 font-serif">
        <h1 className="text-2xl text-gray-400 border-b-8 mt-4">
          Hover・focusの使い方
        </h1>
        <input
          type="text"
          className="w-56 border h-8 p-2 focus:outline-none text-sm"
          placeholder="テキスト入力してください。"
        />
        <button className="bg-indigo-500 w-24 h-8 m-4 hover:bg-indigo-400 text-white rounded-md">
          ボタン
        </button>
        <ul className="mx-8 list-disc">
          <li>input→paddingをつける</li>
          <li>高さを揃える→height</li>
          <li>{text}</li>
        </ul>
      </div>
    </div>
  );
}
