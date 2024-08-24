import dayjs from 'dayjs';

const generateYYYYMMDD = (date: Date) => dayjs(date).format('YYYY-MM-DD');

export default generateYYYYMMDD;
