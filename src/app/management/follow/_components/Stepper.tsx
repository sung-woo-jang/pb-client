import classes from '@/app/management/follow/styles.module.scss';
import { useState } from 'react';

type StepperTypes = {
  id: number;
  title: string;
  totalPeople: number;
};
export default function Stepper() {
  const [value, setValue] = useState(1);
  const [stepper] = useState<StepperTypes[]>([
    { id: 1, title: '팔로워', totalPeople: 20 },
    { id: 2, title: '팔로잉', totalPeople: 35 },
  ]);
  return (
    <div className="flex justify-around p-4 border-b">
      {stepper.map(({ id, title, totalPeople }) => (
        <div key={id} className={classes.stepper} onClick={() => setValue(id)}>
          <p className="text-lg font-bold black-color">{title}</p>
          <p className="text-lg black-color">{totalPeople}명</p>
          <div
            className={classes.line}
            style={{ background: value === id ? 'black' : 'transparent' }}
          />
        </div>
      ))}
    </div>
  );
}
