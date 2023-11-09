import React from 'react';
import Link from 'next/link';

const Button = () => {
  return (
    <div className="flex justify-center text-center mx-14 items-center h-screen bg-gray-100 rounded-lg">
      <div className="bg-white p-12 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-6xl px-10 font-bold">Are you?</h1>
        </div>
        <div className="flex justify-center m-3 ">
          <Link href="/frontend/postedJob" className="px-6 py-3 m-3 text-xl font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition-all duration-300">
              Student
          
          </Link>
          <Link href="/frontend/postAJob" className="px-6 py-3 m-3 text-xl font-medium text-white bg-green-500 rounded hover:bg-green-600 transition-all duration-300">
              Recruiter
            {/* </a> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Button;
