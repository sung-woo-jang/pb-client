import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setLabel, setModalState } from '@/store/slice/modal/slice';

export default function useModalController() {
  const dispatch = useAppDispatch();
  const modalState = useAppSelector((state) => state.modal.modalState);
  const label = useAppSelector((state) => state.modal.label);

  const toggleModalState = () => {
    dispatch(setModalState(!modalState));
  };

  const setModalStateHandler = (state: boolean) => {
    dispatch(setModalState(state));
  };

  const setLabelHandler = (label: string) => {
    dispatch(setLabel(label));
  };

  return {
    label,
    modalState,
    setLabelHandler,
    toggleModalState,
    setModalStateHandler,
  };
}
