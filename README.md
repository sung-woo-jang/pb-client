<div align="center">

# PlavBuds - Frontend

![PlavBuds 로고](https://github.com/sung-woo-jang/pb-client/blob/master/public/logo.png?raw=true)

## 지도 기반 웹 맛집 정보 공유 서비스 - 프론트엔드

## 프로젝트 배경

PlavBuds는 "지도 위에 맛집 정보를 넣는다면 어떨까?"라는 아이디어에서 시작되었습니다. 사용자들이 자신만의 맛집 지도를 만들고, 친구들과 경험을 공유할 수 있는 서비스를 목표로 합니다.

</div>

## 주요 기능

1. **지도 기반 맛집 표시**
    - Naver Maps API를 활용한 지도 구현
    - 사용자 지정 장소에 picker 아이콘 렌더링

2. **맛집 정보 관리**
    - 장소 정보 조회, 등록, 수정, 삭제
    - 이미지 업로드 및 관리

3. **검색 및 필터링**
    - 하이브리드 검색 시스템 구현:
        - Naver 장소검색 API와 내부 데이터베이스 결과를 통합하여 표시
        - 중복 제거 및 관련성 기반 정렬 로직 적용

4. **플픽(Place Pick) 기능**
    - 사용자별 맛집 카테고리 생성 및 관리
    - 검색 결과에서 원하는 장소를 플픽 리스트에 저장
    - 팔로워들의 리뷰(게시물)에 포함된 장소를 플픽 리스트에 추가
    - 플픽 리스트 조회 및 관리

5. **맛집 리뷰 공유**
    - 사용자들의 맛집 리뷰 게시물 조회
    - 리뷰에 포함된 장소 정보 확인 및 플픽 추가 기능

6. **개인화된 맛집 지도**
    - 사용자의 플픽 리스트를 기반으로 한 개인 맛집 지도 생성
    - 지도상에서 플픽된 장소들을 시각적으로 확인 가능

## 개발 중인 기능

1. **리뷰 및 평가 시스템**
    - 맛집 리뷰 작성 및 조회
    - 별점 평가 기능

2. **소셜 네트워킹 기능**
    - 사용자 프로필 관리
    - 팔로우/언팔로우 기능
    - SNS 공유 기능

3. **사용자 검색**
    - 팔로우/팔로잉 관련 기능 구현
    - 사용자 검색 화면 개발

4. **마이페이지**
    - 사용자 개인 정보 및 활동 내역 표시
    - 설정 및 개인화 옵션 제공

5. **UI/UX 개선**
    - 유효성 검사 실패 시 toast-ui 구현
    - 전반적인 사용자 경험 향상

6. **검색 기능 개선**
    - 검색 기록 저장 및 관리 기능
    - 최근 검색어 및 인기 검색어 제공

7. **성능 최적화**
    - 초기 데이터 로딩 최적화
    - 로그인 상태에 따른 조건부 데이터 fetching
    - 전반적인 애플리케이션 성능 향상

## 기술 스택

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **API Integration**: React Query (TanStack Query)
- **UI Library**: MUI (Material-UI)
- **Styling**: Tailwind CSS
- **Maps API**: Naver Maps
- **Build & Deployment**: Docker

## 프로젝트 구조

```
src/
├── app/                 # 페이지 및 레이아웃 컴포넌트
├── components/          # 재사용 가능한 UI 컴포넌트
├── api/                 # API 호출 관련 로직
├── hooks/               # 커스텀 React 훅
├── store/               # Redux 스토어 및 슬라이스
├── styles/              # 전역 스타일 및 변수
├── types/               # TypeScript 타입 정의
└── utils/               # 유틸리티 함수
```

## 시작하기

1. 저장소 클론:
   ```bash
   git clone https://github.com/sung-woo-jang/pb-client.git
   cd pb-client
   ```

2. 의존성 설치:
   ```bash
   npm install
   ```

3. 개발 서버 실행:
   ```bash
   npm run start:dev
   ```

4. 브라우저에서 `http://localhost:3000` 열기

프로젝트에 대한 더 자세한
정보는 [PlavBuds 프로젝트 위키](https://button-molybdenum-e50.notion.site/PlavBuds-7a648985060e42bc922ff0525b579554)에서 확인할 수
있습니다. 여기에는 프론트엔드와 백엔드 구현 세부사항, 개발 컨벤션, 회고록, 그리고 프로젝트 전반에 걸친 다양한 문서가 포함되어 있습니다.