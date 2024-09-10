import { MouseEvent, useRef } from 'react';
import useModalController from '@/store/slice/modal/useModalController';

interface ConfirmModalProps {
  confirmHandler: (callbackFn: () => void) => void;
}

export default function ConfirmModal({ confirmHandler }: ConfirmModalProps) {
  const { label, modalState, setModalStateHandler } = useModalController();
  const modalBackground = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setModalStateHandler(false);
  };

  const closeOnOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === modalBackground.current) {
      closeModal();
    }
  };

  const okButtonClickHandler = () => {
    confirmHandler(closeModal);
  };

  if (!modalState) return null;

  return (
    <div
      ref={modalBackground}
      onClick={closeOnOutsideClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1300]"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[70%] bg-white rounded-lg shadow-xl min-w-[340px] max-w-[calc(100vw-32px)] flex flex-col items-center">
        <div className="w-full p-5 text-center">
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
            확인
          </h3>
          <p className="text-sm text-gray-500 mb-6 overflow-auto">{label}</p>
        </div>
        <div className="w-full flex justify-around items-center p-4 border-t border-gray-200">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
          >
            아니요
          </button>
          <button
            onClick={okButtonClickHandler}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            예
          </button>
        </div>
      </div>
    </div>
  );
}
