import { MouseEvent, ReactNode, useRef } from 'react';
import classes from './styles.module.scss';

// material
import Button from '@mui/material/Button';

/**
 * IConfirmProps 인터페이스. Confirm 모달의 프롭스를 정의합니다.
 * @interface
 * @property {ReactNode} children - 자식 컴포넌트들
 * @property {boolean} open - 컴포넌트의 표시 여부
 * @property {Function} onClose - 모달 바깥 영역 클릭 시 실행되는 콜백함수
 * @property {Function} confirmHandler - 모달창에서 확인 버튼 클릭 시 호출되는 콜백함수
 * @property {'CONFIRM'} type - 모달 타입(버튼 2개)
 * @property {Function} cancelHandler - 모달창에서 취소 버튼 클릭 시 호출되는 콜백함수
 */
interface IConfirmProps {
  cancelHandler: () => void;
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
  confirmHandler: () => void;
}

export default function ConfirmModal({
  cancelHandler,
  children,
  confirmHandler,
  onClose,
  open,
}: IConfirmProps) {
  // 취소 버튼 클릭시 실행되는 함수
  const cancelButtonHandler = () => {
    cancelHandler();
  };
  // 확인 버튼 클릭시 실행되는 함수
  const confirmButtonHandler = () => {
    confirmHandler();
  };
  // 모달의 배경 참조
  const modalBackground = useRef(null);

  // 모달 영역 바깥 클릭시 모달을 닫는 함수
  const closeOnOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === modalBackground.current) {
      onClose();
    }
  };

  return (
    <>
      {open && (
        <div
          ref={modalBackground}
          onClick={closeOnOutsideClick}
          className={classes.modalWrap}
        >
          <div className={classes.modalContent}>
            <div className={classes.modalBody}>{children}</div>

            <div className={classes.modalFooter}>
              <Button
                variant="contained"
                color="secondary"
                onClick={cancelButtonHandler}
              >
                아니요
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={confirmButtonHandler}
              >
                예
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
