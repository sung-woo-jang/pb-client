import { useEffect, useState } from 'react';
import axios from 'axios';
import ConfigurableSourceImage from '@/components/common/ConfigurableSourceImage';

interface UserInfo {
  id: string;
  name: string;
  nickname: string;
  email: string;
  profileImage: string;
}

export default function Logout() {
  const [user, setUser] = useState<UserInfo | null>(null);

  const handleNaverLogin = () => {
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const loginWindow = window.open(
      'http://localhost:8000/api/auth/login-naver',
      'NaverLogin',
      `width=${width},height=${height},left=${left},top=${top}`
    );

    // 주기적으로 팝업 창이 닫혔는지 확인
    const checkLoginStatus = setInterval(() => {
      if (loginWindow?.closed) {
        clearInterval(checkLoginStatus);
        fetchUserInfo();
      }
    }, 500);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        'http://localhost:8000/api/auth/logout',
        {},
        { withCredentials: true }
      );
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get<UserInfo>(
        'http://localhost:8000/api/auth/my-info',
        {
          withCredentials: true,
        }
      );
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div>
      <h1>Naver Login Test</h1>
      {user ? (
        <div>
          <p>Welcome, {user.nickname}!</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {user.profileImage && (
            <ConfigurableSourceImage
              src={user.profileImage}
              alt="Profile"
              width={50}
              height={50}
            />
          )}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleNaverLogin}>Login with Naver</button>
      )}
    </div>
  );
}
