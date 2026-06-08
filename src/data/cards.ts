// ─────────────────────────────────────────────────────────────
//  TRUST / CONTROL — 워크숍 아카이브 데이터
//
//  ⚠️ 상황 텍스트(situation)는 이 파일 한 곳에서만 수정하면 됩니다.
//  FigJam 원본 해상도 한계로 본문은 그룹 테마에 맞춘 "대표 문안"으로
//  채워져 있습니다. 실제 워크숍 카드 문구로 교체해 주세요.
// ─────────────────────────────────────────────────────────────

export const PERSONA = {
  name: "이진서",
  birth: "2003. 05. 20.",
  address: "서울특별시 마포구 와우산로 102",
  email: "j.****@****.com",
  family: "부모님과 함께 거주, 형제 1명",
  hobby: "음악 감상 · 글쓰기",
  interest: "효율적인 일상 · 새로운 표현 방식",
};

// 카드를 뒤집으면 가장 먼저 보이는 공통 질문
export const PROMPT =
  "진서의 입장에서, 이 상황을 AI에게 어느 정도까지 맡기고 싶은지 0–5로 분류해주세요.";

export type Group = {
  id: string;
  numeral: string; // I · II · III
  title: string;
  subtitle: string;
  color: string; // 카드 뒷면 배경색
  text: string; // 뒷면 위 글자색
};

export const GROUPS: Group[] = [
  {
    id: "efficiency",
    numeral: "I",
    title: "효율과 정보 탐색",
    subtitle: "EFFICIENCY · INFORMATION SEEKING",
    color: "#0F00B5",
    text: "#ffffff",
  },
  {
    id: "emotion",
    numeral: "II",
    title: "감정과 관계",
    subtitle: "EMOTION · RELATIONSHIPS",
    color: "#ffffff",
    text: "#0a0a0a",
  },
  {
    id: "creativity",
    numeral: "III",
    title: "창의와 자기표현",
    subtitle: "CREATIVITY · SELF-EXPRESSION",
    color: "#FF1899",
    text: "#ffffff",
  },
];

export type Card = {
  id: number; // 1 … 21
  group: string; // GROUPS[].id
  situation: string;
};

export const CARDS: Card[] = [
  // ── I. 효율과 정보 탐색 (01–07) ───────────────────────────────
  {
    id: 1,
    group: "efficiency",
    situation:
      "진서는 흩어진 일정과 약속을 캘린더 하나로 정리하는 일을 자주 미룬다. AI가 메일과 메시지를 읽고 자동으로 일정을 잡아준다면 편하겠지만, 누군가와의 약속 시간을 내 확인 없이 정하는 것이 마음에 걸린다.",
  },
  {
    id: 2,
    group: "efficiency",
    situation:
      "모르는 주제를 빠르게 파악해야 할 때 진서는 긴 글을 끝까지 읽기보다 핵심만 알고 싶어 한다. AI 요약은 빠르지만, 중요한 뉘앙스나 출처가 빠질까 걱정된다.",
  },
  {
    id: 3,
    group: "efficiency",
    situation:
      "비슷한 제품 여러 개를 두고 고민할 때, 가격·후기·스펙을 대신 비교해 추천해주면 시간을 아낄 수 있다. 다만 마지막 ‘구매’ 버튼은 직접 누르고 싶다.",
  },
  {
    id: 4,
    group: "efficiency",
    situation:
      "반복적인 업무 메일은 형식이 정해져 있어 초안을 대신 써주면 좋겠다. 그래도 보내기 전에 문장을 한 번은 직접 다듬는다.",
  },
  {
    id: 5,
    group: "efficiency",
    situation:
      "영수증이나 가계부처럼 숫자를 분류하고 합산하는 일은 AI에게 맡기고 싶다. 분류 기준이 내 의도와 다를 수 있어 결과는 한 번 확인한다.",
  },
  {
    id: 6,
    group: "efficiency",
    situation:
      "처음 가는 곳의 동선과 예약을 알아서 잡아주면 편하다. 그러나 취향에 맞지 않는 곳을 고를까 봐 후보만 받아 직접 고르고 싶기도 하다.",
  },
  {
    id: 7,
    group: "efficiency",
    situation:
      "시험이나 자격증 공부의 진도표를 짜는 일은 객관적인 도움이 된다. 다만 내 컨디션과 속도는 내가 더 잘 안다고 느낀다.",
  },

  // ── II. 감정과 관계 (08–14) ──────────────────────────────────
  {
    id: 8,
    group: "emotion",
    situation:
      "힘든 일을 겪은 친구에게 보낼 위로의 말을 고를 때, 적절한 표현을 추천받으면 덜 막막하다. 그러나 내 진심이 아닌 말처럼 느껴질까 망설인다.",
  },
  {
    id: 9,
    group: "emotion",
    situation:
      "친구 사이의 오해를 풀어야 할 때, 상황을 정리하고 중립적인 말을 골라주면 도움이 된다. 그래도 감정의 결은 결국 내가 책임져야 한다고 느낀다.",
  },
  {
    id: 10,
    group: "emotion",
    situation:
      "상대의 취향을 잘 모를 때 선물 후보를 추천받으면 편하다. 하지만 마음이 담긴 최종 선택은 직접 하고 싶다.",
  },
  {
    id: 11,
    group: "emotion",
    situation:
      "잘못을 사과해야 하는 순간, 어떤 말로 시작할지 막막할 때 초안이 있으면 용기가 난다. 다만 사과의 무게는 대신 질 수 없다.",
  },
  {
    id: 12,
    group: "emotion",
    situation:
      "한동안 연락이 끊긴 사람에게 다시 말을 걸 때, 자연스러운 첫 문장을 추천받고 싶다. 그래도 관계의 거리는 내가 정한다.",
  },
  {
    id: 13,
    group: "emotion",
    situation:
      "복잡한 감정을 글로 정리하고 싶을 때, 질문을 던져주며 생각을 돕는 역할은 반갑다. 결론까지 대신 내려주길 바라지는 않는다.",
  },
  {
    id: 14,
    group: "emotion",
    situation:
      "부모님과의 민감한 대화를 앞두고, 상대가 상처받지 않을 표현을 함께 골라주면 좋다. 그래도 말은 결국 내 목소리로 전한다.",
  },

  // ── III. 창의와 자기표현 (15–21) ─────────────────────────────
  {
    id: 15,
    group: "creativity",
    situation:
      "진서는 블로그나 일기를 쓸 때 첫 문장이 가장 어렵다. 시작점을 던져주는 정도는 반갑지만, 글의 색깔까지 대신 정하는 건 원치 않는다.",
  },
  {
    id: 16,
    group: "creativity",
    situation:
      "막힌 기획에 다양한 방향을 펼쳐 보여주는 브레인스토밍은 큰 도움이 된다. 최종 선택과 편집은 내 몫이라 생각한다.",
  },
  {
    id: 17,
    group: "creativity",
    situation:
      "머릿속 이미지를 빠르게 시안으로 만들어주면 표현이 쉬워진다. 다만 ‘내 작품’이라 부를 수 있는 선은 어디일지 고민된다.",
  },
  {
    id: 18,
    group: "creativity",
    situation:
      "분위기에 맞는 곡을 모아 플레이리스트를 만들어주는 일은 즐겁고 편하다. 그래도 나를 설명하는 취향만큼은 직접 고르고 싶다.",
  },
  {
    id: 19,
    group: "creativity",
    situation:
      "나를 소개하는 문구나 포트폴리오 문장을 다듬어주면 든든하다. 그래도 과장 없이 ‘나다운’ 표현인지 직접 점검한다.",
  },
  {
    id: 20,
    group: "creativity",
    situation:
      "프로젝트나 작업물의 이름 후보를 잔뜩 받아보는 건 즐겁다. 그래도 최종 결정의 책임은 내가 진다.",
  },
  {
    id: 21,
    group: "creativity",
    situation:
      "옷차림이나 말투 같은 표현 스타일을 제안받는 건 참고가 된다. 결국 ‘어떤 사람으로 보일지’는 내가 정한다.",
  },
];

export const cardsByGroup = (groupId: string) =>
  CARDS.filter((c) => c.group === groupId).sort((a, b) => a.id - b.id);

export const pad2 = (n: number) => String(n).padStart(2, "0");
