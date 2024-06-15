import classes from './styles.module.scss';
import { useState } from 'react';

const CircleData = [
  { id: 1, color: 'green' },
  { id: 2, color: 'orange' },
  { id: 3, color: 'yellow' },
  { id: 4, color: 'green' },
  { id: 5, color: 'teal' },
  { id: 6, color: 'blue' },
  { id: 7, color: 'purple' },
  { id: 8, color: 'pink' },
];

// button을 맨 밑에 두려면 CustomSwipeableDrawer의 밑에 button 컴포넌트를 만들면 됨
export default function AddPPCategory() {
  const [selectedCircle, setSelectedCircle] = useState<number>(1);

  return (
    <div className={classes.wrapper}>
      <div className="mt-4">
        <div className={classes.inputContainer}>
          <label htmlFor="name" className={`${classes.label} mb-2`}>
            새 카테고리명
          </label>
          <span className="text-sm text-gray-500">0/25</span>
        </div>
        <input
          id="name"
          type="text"
          placeholder="새 카테고리명을 입력해주세요."
          className={classes.input}
        />
      </div>
      <div className={classes.pickPCContainer}>
        <label htmlFor="name" className={classes.pickPCLabel}>
          색상 선택
        </label>
        <div className={classes.iconContainer}>
          {CircleData.map(({ id, color }) => (
            <div
              key={id}
              className={`${classes.colorCircle} bg-${color}-500`}
              onClick={() => {
                setSelectedCircle(id);
              }}
            >
              {selectedCircle === id && <CheckIcon className="h-4 w-4" />}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div className={classes.inputContainer}>
          <label htmlFor="name" className={classes.label}>
            메모
          </label>
          <span className="text-sm text-gray-500">0/25</span>
        </div>
        <input
          id="name"
          type="text"
          placeholder="메모를 남겨주세요"
          className={classes.input}
        />
      </div>
      <div className="mt-4">
        <div className={classes.inputContainer}>
          <label htmlFor="description" className={classes.label}>
            관련 링크
          </label>
          <span className="text-sm text-gray-500">0/25</span>
        </div>
        <input
          id="description"
          type="text"
          placeholder="https://"
          className={classes.input}
        />
      </div>
      <div className={classes.buttonWrapper}>
        <button type="button" className={classes.button}>
          완료
        </button>
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
