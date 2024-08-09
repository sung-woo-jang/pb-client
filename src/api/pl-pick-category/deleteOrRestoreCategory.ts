import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useMutation } from '@tanstack/react-query';
import { NumberString } from '@/types/commonTypes';

const deleteOrRestoreCategory = async (id: NumberString) => {
  const { data } = await axiosInstance.delete(
    API_URL.PL_PICK_CATEGORY.DELETE_OR_RESTORE_CATEGORY(id)
  );
  return data;
};

const useDeleteOrRestoreCategory = (id: NumberString) =>
  useMutation({ mutationFn: () => deleteOrRestoreCategory(id) });

export default useDeleteOrRestoreCategory;
