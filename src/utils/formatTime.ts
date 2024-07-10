import dayjs from 'dayjs';

export const generateTimestamps = () => {
  const now = dayjs();

  // n시간 전 데이터 생성 (예시로 5시간 전)
  const nHoursAgo = now
    .subtract(parseInt(`${Math.random() * 10 + 1}`), 'hour')
    .toISOString();

  // n일 전 데이터 생성
  const nDaysAgo = now
    .subtract(parseInt(`${Math.random() * 10 + 1}`), 'day')
    .toISOString();

  return {
    nHoursAgo,
    nDaysAgo,
  };
};

function formatTime(timestamp: string) {
  const now = dayjs();
  const time = dayjs(timestamp);
  const diff = now.diff(time, 'hour');

  return diff < 24 ? `${diff}시간 전` : time.format('YYYY년 MM월 DD일');
}

export default formatTime;
