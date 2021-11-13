import React from 'react';
import Header from '../../components/Header';
import Image from 'next/image';

export default function lesson6() {
  return (
    <div>
      <section>
        <div className="flex items-center">
          <div className="w-2/5">
            <img src="/image/IconLogo.png" className="mx-auto" />
            <img src="/image/Enjibianoizumi.png" className="mx-auto mt-6" />
            <img
              src="/image/HomeText.png"
              className="w-auto h-auto mx-auto mt-2"
            />
            <img
              src="/image/Slack.png"
              className="mx-auto mt-10 cursor-pointer"
            />
          </div>
          <img
            src="/image/AdobeStock.png"
            className="object-cover w-3/5 h-screen focus:opacity-20"
          />
        </div>
      </section>
    </div>
  );
}
