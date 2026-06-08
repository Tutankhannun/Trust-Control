# TRUST / CONTROL

참여자가 AI를 신뢰하는 방식과 **위임의 경계**를 스스로 인식하게 만드는 참여형 워크숍의 아카이브 웹사이트입니다.

- **프레임워크**: Next.js 14 (App Router) · React 18 · TypeScript
- **무드**: 미니멀 · 흑백 단색 · 시소 라인 모티프, 인터랙션 중심
- **스타일링**: CSS Modules (외부 UI 라이브러리 없음)
- **폰트**: Archivo + Space Mono (Google Fonts, `<link>` 로드)

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
# 배포 빌드
npm run build && npm run start
```

> Node.js 18.17 이상 권장.

## 화면 구성 / 라우팅

| 경로 | 화면 | 설명 |
| --- | --- | --- |
| `/` | 시소 | TRUST(좌상단) · CONTROL(우하단), 중앙의 막대 한 개가 시소처럼 위아래로 움직입니다. 마우스를 좌우로 움직이면 그 방향으로 기울고, 가만히 두면 천천히 자동으로 흔들립니다. |
| `/cards` | 카드 아카이브 | 뒤집힌(face-down) 카드 21장이 3개 테마 그룹으로 정렬되어 있고, **클릭하면 뒤집혀 상황 텍스트**가 나타납니다. |

상단 내비게이션으로 두 화면을 오갑니다.

## 상황 텍스트 수정 — `src/data/cards.ts`

21개 카드의 본문, 그룹, 페르소나(이진서), 공통 질문 문구는 모두
**`src/data/cards.ts` 한 파일**에서 관리됩니다.

```ts
{ id: 1, group: "efficiency", situation: "여기에 실제 워크숍 상황 문구를 넣으세요." }
```

> ⚠️ 현재 본문은 FigJam 원본 해상도 한계로, 세 그룹
> (효율·정보탐색 / 감정·관계 / 창의·자기표현) 테마에 맞춘 **대표 문안**으로
> 채워져 있습니다. 실제 워크숍 카드 문구로 교체해 주세요.

## 디자인 토큰 — `src/app/globals.css`

색(`--ink`, `--paper`), 폰트, 여백 변수를 한곳에서 조정합니다.
그룹별 색(파랑/마젠타)을 쓰고 싶다면 여기에 변수를 추가해 카드/그룹에 적용하면 됩니다.

## 폴더 구조

```
src/
├─ app/
│  ├─ layout.tsx          # 폰트·메타·내비
│  ├─ globals.css         # 디자인 토큰
│  ├─ page.tsx            # 시소 랜딩
│  └─ cards/page.tsx      # 카드 아카이브
├─ components/
│  ├─ Nav.tsx
│  ├─ Seesaw.tsx          # 시소 인터랙션
│  └─ FlipCard.tsx        # 카드 뒤집기
└─ data/cards.ts          # ← 콘텐츠는 여기서 수정
```
