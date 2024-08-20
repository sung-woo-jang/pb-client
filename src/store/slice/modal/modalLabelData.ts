import * as _ from 'lodash';

type Code = 'MO-WP-DE' | 'MO-PC-DE' | 'MO-CO-DE' | 'MO-LO-ED';

interface LabelData {
  code: Code;
  label: string;
}

export const label_data: LabelData[] = [
  {
    code: 'MO-WP-DE',
    label: `등록하지 않고 화면을 나가면 작성중인 내용이 삭제됩니다.\n나가시겠습니까?`,
  },
  {
    code: 'MO-PC-DE',
    label: `카테고리를 삭제하면 카테고리에 저장된 플픽도 함께 삭제됩니다.`,
  },
  {
    code: 'MO-CO-DE',
    label: `해당 댓글을 삭제하시겠습니까?`,
  },
  {
    code: 'MO-LO-ED',
    label: '최근 검색 기록이 없습니다.',
  },
];

export const getLabelByCode = (code: Code): string => {
  return _.find(label_data, { code })?.label as string;
};
