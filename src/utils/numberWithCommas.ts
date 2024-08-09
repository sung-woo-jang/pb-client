import { NumberString } from '@/types/commonTypes';

function numberWithCommas(x: NumberString) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default numberWithCommas;
