interface ListState {
  link: string;
  title: string;
}

interface PageListState {
  head: string;
  list: ListState[];
}

export const pageList: PageListState[] = [
  {
    head: '임시 페이지',
    list: [{ link: 'temp', title: '임시 페이지' }],
  },
  {
    head: '뉴스피드',
    list: [{ link: '/newsfeed', title: '뉴스피스 리스트(메인) - 🟡' }],
  },
  {
    head: '타임라인',
    list: [
      { link: '/timeline', title: '타임라인 메인 - 🟡' },
      { link: '/timeline/1', title: '타임라인 상세보기 - 🟡' },
    ],
  },
  {
    head: '플픽',
    list: [
      { link: '/place-pick', title: '플픽 카테고리 리스트 - 🟠' },
      { link: '/place-pick/1', title: '플픽 카테고리별 리스트 - 🔴' },
    ],
  },
  {
    head: '장소 검색',
    list: [
      { link: '/place', title: '검색 메인 - 🟠' },
      { link: '/place/results', title: '검색 결과 - 🟡' },
      { link: '/place/results/apple', title: '검색 결과 상세 - 🟡' },
    ],
  },
  {
    head: '글쓰기',
    list: [{ link: '/post', title: '글쓰기 - 🟡' }],
  },
  {
    head: '관리 화면',
    list: [
      { link: '/management/my-page', title: '마이페이지 - 🟡' },
      { link: '/management/follow', title: '팔로워 / 팔로잉 관리 - 🟡' },
    ],
  },
];
