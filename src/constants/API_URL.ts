/* ******** GET ******** */
/* ******** POST ******** */
/* ******** Updata ******** */
/* ******** Delete ******** */
export const API_URL = {
  BASE_URL: process.env.BASE_URL,
  AUTH: {
    /* ******** POST ******** */
    /**
     * @description 회원가입
     */
    SIGN_UP: `auth/signup`,
    /**
     * @description 로그인
     */
    LOG_IN: `auth/login`,
    /**
     * @description 사용자 정보 가져오기
     */
    GET_PROFILE: 'users/profile',
    /**
     * @description 로그아웃
     */
    LOGOUT: `auth/logout`,
  },
} as const;
