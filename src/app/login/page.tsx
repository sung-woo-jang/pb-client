'use client';
export default function Page() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:8000/api/auth/login-naver';
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <svg className="w-32 h-32 mx-auto" viewBox="0 0 100 100">
            <rect width="100" height="100" fill="#4A5568" />
            <text
              x="50"
              y="50"
              fontFamily="Arial"
              fontSize="14"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              PlayBuds Logo
            </text>
          </svg>
        </div>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6 text-center">PlayBuds</h2>

          <div className="mb-4">
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
              onClick={handleLogin}
            >
              <span className="mr-2">N</span>
              네이버 로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
