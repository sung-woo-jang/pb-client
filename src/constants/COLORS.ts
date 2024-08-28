export enum CircleColors {
  RED = '#FF596D',
  ORANGE = '#FE8803',
  YELLOW = '#FEC802',
  GREEN = '#8EC049',
  TEAL = '#41A37C',
  CYAN = '#00C6D8',
  PINK = '#E255A9',
  LIGHT_PINK = '#FF98A0',
  LAVENDER = '#8A94BE',
  BLUE = '#4496E2',
  NAVY = '#005188',
  GRAY = '#767676',
  LIGHT_GRAY = '#BBC3CF',
}

const COLORS = {
  // TODO: 코드 테이블 구현 시 거기서 가져오기
  CIRCLE: [
    { id: 1, color: CircleColors.RED },
    { id: 2, color: CircleColors.ORANGE },
    { id: 3, color: CircleColors.YELLOW },
    { id: 4, color: CircleColors.GREEN },
    { id: 5, color: CircleColors.TEAL },
    { id: 6, color: CircleColors.CYAN },
    { id: 7, color: CircleColors.PINK },
    { id: 8, color: CircleColors.LIGHT_PINK },
    { id: 9, color: CircleColors.LAVENDER },
    { id: 10, color: CircleColors.BLUE },
    { id: 11, color: CircleColors.NAVY },
    { id: 12, color: CircleColors.GRAY },
    { id: 13, color: CircleColors.LIGHT_GRAY },
  ],
  CHECK_CIRCLE: {
    UN_SELECTED: '#1FFF11',
    SELECTED: '#BBC3CF',
  },
};
export default COLORS;
