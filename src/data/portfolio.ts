export const site = {
  name: "정규리",
  nameEn: "Kyuri Jeong",
  tagline: "NATIONAL POLICY RESEARCHER",
  hero: {
    pink: ["We're", "We Research", "Policy"],
    black: ["Kyuri.", "Urban Green", ""],
    subtitle:
      "도시정책과 환경정책을 연결해 도시 내 녹지 불평등 문제를 분석하고, 데이터 기반의 실질적인 정책 대안을 제안하는 국책연구원입니다.",
  },
  profile:
    "도시정책과 환경정책을 연결해 도시 내 녹지 불평등 문제를 분석하고 실질적인 정책 대안을 제안하는 국책연구원입니다. 공간 데이터와 사회경제 지표를 기반으로 취약지역의 녹지 접근성을 진단하며, 누구나 일상에서 공정하게 자연환경을 누릴 수 있는 도시를 만드는 것을 목표로 합니다. 정책은 현장의 삶을 개선해야 한다는 가치관을 바탕으로, 데이터 기반 분석과 이해관계자 협업을 균형 있게 수행합니다.",
  contact: {
    phone: "010-1234-1234",
    email: "gyuri.jeong@example.com",
    website: "www.gyurijeong-policy.com",
    location: "Seoul, South Korea",
  },
} as const;

export const skills = [
  { category: "업무능력", name: "도시공간 분석", level: 5 },
  { category: "업무능력", name: "정책 연구 및 보고서 작성", level: 5 },
  { category: "업무능력", name: "GIS 데이터 분석", level: 5 },
  { category: "컴퓨터기술", name: "ArcGIS", level: 5 },
  { category: "컴퓨터기술", name: "QGIS", level: 5 },
  { category: "컴퓨터기술", name: "Stata", level: 5 },
  { category: "컴퓨터기술", name: "GPT", level: 5 },
  { category: "컴퓨터기술", name: "Python", level: 5 },
] as const;

export const workExperience = [
  {
    org: "국토환경정책연구원",
    period: "2024/03/01 - 2026/06/02",
    role: "도시환경정책 연구원",
    summary:
      "도시 내 공원·녹지 접근성 격차 분석, 생활권 녹지 확충 우선순위 모델 설계, 중앙·지방 도시환경 정책 수립 지원.",
    color: "orange" as const,
  },
  {
    org: "한국도시정책랩",
    period: "2021/09/01 - 2024/02/29",
    role: "도시정책 연구원",
    summary:
      "도시재생·생활SOC·보행환경 정책 효과 평가, 녹지 인프라 부족 지역 공공공간 개선 전략 제안.",
    color: "sky" as const,
  },
  {
    org: "지속가능도시연구센터",
    period: "2019/03/01 - 2021/08/31",
    role: "연구보조원",
    summary:
      "기후위기 대응 도시계획·녹지 네트워크 연구 지원, 공원 접근성·열섬·보행권 관련 데이터 정리.",
    color: "slate" as const,
  },
] as const;

export const educations = [
  {
    degree: "Master of Public Policy",
    university: "고려대학교",
    major: "공공정책학",
    period: "2019/03 - 2021/02",
  },
  {
    degree: "Bachelor of Urban Planning",
    university: "서울시립대학교",
    major: "도시공학",
    period: "2015/03 - 2019/02",
  },
] as const;

export const languages = [
  { language: "Korean", level: 5 },
  { language: "English", level: 4 },
  { language: "Japanese", level: 3 },
] as const;

export const navItems = [
  { id: "profile", label: "Profile" },
  { id: "work", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
