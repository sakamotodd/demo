import React from 'react';
import Header from '../../components/Header';
import AdobeStock from '../../public/AdobeStock.png';

export default function lesson5() {
  return (
    <div>
      <Header />
      <div className="mx-4 font-serif">
        <h1 className="mt-4 text-2xl text-gray-500 border-b-8">
          表示方法：display
        </h1>
        <div className="mx-4 mt-4">
          <span className=" block bg-gray-300">
            インライン要素をブロック要素に変える。:display
          </span>
          <br />
          <div className="inline mr-8 bg-gray-400">
            ブロック要素横並び：inline
          </div>
          <div className="inline mr-8 bg-gray-400">
            ブロック要素横並び：inline
          </div>
        </div>
        <h1 className="mt-4 text-2xl text-gray-500 border-b-8">
          headerの左右の使い方
        </h1>
        <div className="flex justify-between">
          <h1>タイトル</h1>
          <ul className=" flex flex-end space-x-12">
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
          </ul>
        </div>
        <div className="flex flex-wrap space-x-10 justify-center">
          <div className="w-12 bg-gray-400">1</div>
          <div className="w-12 bg-gray-300">1</div>
          <div className="w-12 bg-gray-200">1</div>
          <div className="w-12 bg-gray-100">1</div>
        </div>
        <ul className="list-disc mt-4 ml-8">
          <li>f</li>
          <li>i</li>
          <li>i</li>
        </ul>
      </div>
      <section className="mt-16">
        <h2 className="text-center mb-8">入れ替えテスト</h2>
        <div className="flex items-center">
          <div className="w-1/2 p-16 bg-gray-400">
            ここに文章がはいります。ここに文章が入ります。ここに文章がはいります。
          </div>
            <img src="/image/AdobeStock.png" width="50%"/>
        </div>
      </section>
    </div>
  );
}
