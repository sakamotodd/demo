import React from 'react';
import Header from '../../components/Header';

export default function lesson2() {
  return (
    <div>
      <Header />
      <div className="mt-4 ml-4 border-b-8 text-gray-500">
        <h1 className="text-2xl font-serif">幅と高さ</h1>
      </div>
      <div aria-label="width・heigh実践">
        <ul className="list-disc ml-12 p-4">
          <li className="font-serif">固定（rem) 可変（%)</li>
          <li className="font-serif">ここで苦しめられた</li>
        </ul>
      </div>
      <div>
        <div className="mt-12 ml-4 border-b-8 ">
          <h1 className="text-2xl text-gray-500 font-serif">
            width・heigh - 基本
          </h1>
        </div>
        <div className="mt-4  ml-12">
          <ul className="list-disc px-4">
            <li>ブロック要素　　◯</li>
            <li>インライン要素　❌</li>
          </ul>
          <div className="mt-8">
            <span className="border border-blue-400 w-4">
              インライン要素：適用なし
            </span>
            <div className="mt-4 border-b-4 text-gray-500">
              <h1 className="ml-1 text-xl text-gray-500 font-serif">固定</h1>
            </div>
            <div className="mx-4 mt-4">
              <div className="border bg-blue-400 w-48">ブロック：w-48</div>
              <div className="border bg-blue-400 w-96">ブロック要素：w-96</div>
            </div>
            <div className="mt-4 border-b-4 text-gray-500">
              <h1 className="ml-1 text-xl text-gray-500 font-serif">可変</h1>
            </div>
            <div className="mx-4 mt-4">
              <div className="border bg-blue-400 w-full">
                ブロック要素：w-full
              </div>
              <div className="border bg-blue-400 w-1/2">
                ブロック要素：w-1/2
              </div>
              <p className="items-center justify-center flex w-1/2">↓</p>
              <div className="border bg-blue-400 w-1/2">
                w-1/2：自動改行自動改行自動改行自動改行自動改行自動改行自動改行自動改行自動改行自動改行自動改行自動改行自動改行自動改行自動改行自動改行自動改行自動改行
              </div>
            </div>
            <div className="mt-4 border-b-4 text-gray-500">
              <h1 className="ml-1 text-xl text-gray-500 font-serif">
                幅max指定
              </h1>
            </div>
            <div className="mx-4 mt-4">
              <div className="border bg-blue-400 max-w-2xl">
                ブロック要素：w-full
              </div>
            </div>
            <div className="mb-16">
              <div className="mt-4 border-b-4 ">
                <h1 className="ml-1 text-xl text-gray-500 font-serif">
                  ブロック要素を横に並べる。
                </h1>
              </div>
              <div className="mx-4 mt-4">
                <div className="border  flex justify-around">
                  <div className="border w-1/2 bg-blue-400">左側</div>
                  <div className="border w-1/2 bg-green-400">右側</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
