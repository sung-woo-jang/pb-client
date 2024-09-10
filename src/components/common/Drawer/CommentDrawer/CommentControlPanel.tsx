import React from 'react';
import useModalController from '@/store/slice/modal/useModalController';
import { getLabelByCode } from '@/store/slice/modal/modalLabelData';

interface CommentControlPanelProps {
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  onSave: () => void;
  onCancel: () => void;
}

const buttonStyle =
  'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200';

export default function CommentControlPanel({
  onSave,
  onCancel,
  setIsEditing,
  isEditing,
}: CommentControlPanelProps) {
  const { setLabelHandler, setModalStateHandler } = useModalController();

  const confirmHandler = () => {
    setLabelHandler(getLabelByCode('MO-CO-DE'));
    setModalStateHandler(true);
  };

  return (
    <div className="space-x-2">
      {isEditing ? (
        <>
          <button
            onClick={onSave}
            className={`${buttonStyle} bg-blue-500 text-white hover:bg-blue-600`}
          >
            저장
          </button>
          <button
            onClick={onCancel}
            className={`${buttonStyle} bg-gray-200 text-gray-700 hover:bg-gray-300`}
          >
            취소
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setIsEditing(true)}
            className={`${buttonStyle} bg-gray-200 text-gray-700 hover:bg-gray-300`}
          >
            수정
          </button>
          <button
            onClick={confirmHandler}
            className={`${buttonStyle} bg-red-500 text-white hover:bg-red-600`}
          >
            삭제
          </button>
        </>
      )}
    </div>
  );
}
