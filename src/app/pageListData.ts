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
    list: [{ link: '/newsfeed', title: '뉴스피드 리스트(메인) - 🟢' }],
  },
  {
    head: '로그인',
    list: [{ link: '/login', title: '로그인 화면 - 🟢' }],
  },
  {
    head: '타임라인',
    list: [
      {
        link: '/timeline/user/rl09VdoqlP-Bsx-3j38H1G1iHUo-o2-swqMGi2JZhGA',
        title: '특정 유저의 타임라인 - 🟢',
      },
      { link: '/timeline/1', title: '타임라인 상세보기 - 🟢' },
    ],
  },
  {
    head: '장소 검색',
    list: [
      { link: '/place', title: '검색 메인 - 🟢' },
      { link: '/place/search?keyword=스타벅스', title: '검색 결과 - 🟢' },
      { link: '/place/1', title: '검색 결과 상세 - 🟢' },
    ],
  },
  {
    head: '글쓰기',
    list: [{ link: '/review/6', title: '글쓰기 - 🟢' }],
  },
  {
    head: '관리 화면',
    list: [
      { link: '/management/my-page', title: '마이페이지 - 🟡' },
      { link: '/management/follow', title: '팔로워 / 팔로잉 관리 - 🟡' },
    ],
  },
];
