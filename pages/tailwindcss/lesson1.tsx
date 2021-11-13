import React from 'react';
import Header from '../../components/Header';

export default function lesson1() {
  return (
    <div>
      <Header />
      <div className="mt-12">
        <span className="border border-blue-600 m-8">spanタグです。</span>
        <span className="border border-blue-600 p-12">
          インライン要素です。
        </span>
        <div className="border-t-8 mt-16 border-gray-400">
          <p className="border border-blue-600 mt-16">
            pは、ブロック要素です。
          </p>
          <p className="border border-blue-600 m-8 p-8">
            pは、ブロック要素です。
          </p>
          <p className="border border-blue-600 mx-16">
            pは、ブロック要素です。
          </p>
        </div>
        <div className="border-t-8 mt-16 border-gray-400">
          <p className="border border-blue-600 mt-16">
            p = ブロック要素
            <span className="border border-blue-600 mt-16">
              ブロック要素の中のインライン要素
            </span>
            <span className="border border-blue-600 m-8 ">spanタグ</span>
            <span className="border border-blue-600 p-12 ">spanタグ</span>
          </p>
        </div>
        <div className="border-t-8 mt-16 border-gray-400"></div>
        <div className="border border-gray-200 m-8">
          <span className="justify-center items-center flex text-red-600">ブロック要素の中にブロック要素</span>
          <span className="justify-center items-center flex text-red-600">ブロック要素を横に並べる</span>
          <span className="justify-center items-center flex text-red-600">m-12のマージンをつけることによって真ん中に調整できる</span>
        </div>
        <div className="border border-blue-600 mt-8 flex justify-around">
          親ブロック
          <div className="border border-blue-600">子ブロック</div>
          <div className="border border-blue-600 m-12">子ブロック</div>
        </div>
      </div>
    </div>
  );
}
