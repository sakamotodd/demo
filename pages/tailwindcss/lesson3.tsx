import React from 'react';
import Header from '../../components/Header';


export default function lesson3() {
  const dates = ['大きさ', 'フォントの種類', '太さ', '文字間の余白', '位置'];
  const child = [
    'FontSize（text-xl, text-2xl）',
    'FontFamily（font-serif, font-mono）',
    'FontWeight（font-light, font-bold）',
    'Letter Spacing（tracking-wider）Line Height',
    'Text Alignment（text-center)',
  ];
  return (
    <div>
      <Header />
      <div className="mt-8 mx-4 font-serif">
        <h1 className=" border-b-8 text-2xl text-gray-500 font-bold">
          フォント・テキスト
        </h1>
        <div className="flex justify-around">
          <ul className="mx-12 list-disc p-4 w-1/2">
            {dates.map((data) => {
              return <li key={data}>{data}</li>;
            })}
          </ul>
          <ul className="mx-12 p-4 w-1/2">
            {child.map((data) => {
              return <li key={data}>{data}</li>;
            })}
          </ul>
        </div>
        <h1 className=" border-b-8 text-2xl text-gray-500 font-bold">
          フォント・テキスト(基本)
        </h1>
        <div className="mt-4 mx-8">
          <p className="text-sm">フォントサイズ（text-sm）</p>
          <p className=" text-base">フォントサイズ（text-base）</p>
          <p className=" text-xl">フォントサイズ（text-xl）</p>
          <br/>
          <p className="tracking-tighter">横に文字の間が開く（tracking-tighter）</p>
          <p className="tracking-tight">横に文字の間が開く（tracking-tight）</p>
          <p className="tracking-wide">横に文字の間が開く（tracking-wide）</p>
          <p className="tracking-wider">横に文字の間が開く（tracking-wider）</p>
          <p className="tracking-widest">横に文字の間が開く（tracking-widest）</p>
          <br/>
          <p className="leading-tight">縦に文字の間が開く（leading-tight）</p>
          <p className="leading-snug">縦に文字の間が開く（leading-snug）</p>
          <p className="leading-relaxed">縦に文字の間が開く（leading-relaxed）</p>
          <p className="leading-loose">縦に文字の間が開く（leading-loose）</p>
          <p className="leading-3">縦に文字の間が開く（leading-3）</p>
          <p className="leading-5">縦に文字の間が開く（leading-5）</p>
          <p className="leading-7">縦に文字の間が開く（leading-7）</p>
          <p className="leading-10">縦に文字の間が開く（leading-10）</p>
          <br />
          <div className="text-center">文字の位置（中央）</div>
          <div className="text-center">ブロック要素のみ有効</div>
        </div>
      </div>
    </div>
  );
}
