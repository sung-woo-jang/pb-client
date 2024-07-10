import { API_URL } from '@/constants/API_URL';

const storedImageUrlGenerator = (storedFileName: string | undefined) => {
  return `${API_URL.BASE_URL}/uploads/${storedFileName === undefined ? 'default_product.jpg' : storedFileName}`;
};

export default storedImageUrlGenerator;
