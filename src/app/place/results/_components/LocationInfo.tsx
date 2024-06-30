import styles from '../styles.module.scss';
import GreenPlacePicker from '@/components/Icon/GreenPlacePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function LocationInfo() {
  const place = '"스타벅스"';
  return (
    <div className={styles.locationWrapper}>
      <div className={styles.locationTop}>
        <div className="flex">
          <GreenPlacePicker />
          <div className="ml-2 text-green-500 font-semibold">
            위치 정보 없음
          </div>
        </div>
        <div className="flex">
          <div className="mx-2 cursor-pointer">내 위치</div>
          <div className="mx-2 cursor-pointer">변경</div>
        </div>
      </div>
      <p className="text-gray-500">서울특별시 송파구 {place} 검색결과</p>
      <RadioGroup row>
        <FormControlLabel value="1" control={<Radio />} label="관련도순" />
        <FormControlLabel value="2" control={<Radio />} label="거리순" />
      </RadioGroup>
    </div>
  );
}
