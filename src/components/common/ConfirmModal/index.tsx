import { MouseEvent, useRef } from 'react';
import classes from './styles.module.scss';

// material
import Button from '@mui/material/Button';
import useModalController from '@/store/slice/modal/useModalController';

export default function ConfirmModal() {
  const { label, modalState, setModalStateHandler } = useModalController();
  // 취소 버튼 클릭시 실행되는 함수
  const cancelButtonHandler = () => {
    setModalStateHandler(false);
  };
  // 확인 버튼 클릭시 실행되는 함수
  const confirmButtonHandler = () => {
    setModalStateHandler(false);
  };
  // 모달의 배경 참조
  const modalBackground = useRef(null);

  // 모달 영역 바깥 클릭시 모달을 닫는 함수
  const closeOnOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === modalBackground.current) {
      setModalStateHandler(false);
    }
  };

  return (
    <>
      {modalState && (
        <div
          ref={modalBackground}
          onClick={closeOnOutsideClick}
          className={classes.modalWrap}
        >
          <div className={classes.modalContent}>
            <div className={classes.modalBody}>{label}</div>

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
