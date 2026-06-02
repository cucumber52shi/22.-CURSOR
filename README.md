# 정규리 포트폴리오 (Kyuri Portfolio)

Slick 템플릿 스타일을 참고한 단일 페이지 포트폴리오입니다. Next.js App Router + Tailwind CSS로 구성되어 Vercel 배포에 최적화되어 있습니다.

## 로컬 실행

```powershell
cd "c:\Users\KYURI\OneDrive\22. CURSOR"
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

## Vercel 배포

저장소 **루트**에 `package.json`이 있으므로 Root Directory는 **비워 두거나 `/`(루트)** 로 설정합니다.

1. Vercel 프로젝트 → **Settings** → **General** → **Root Directory** → 비우기(또는 `.`)
2. Framework Preset: **Next.js** (자동 감지)
3. 저장소 변경 후 **Redeploy**

## 콘텐츠 수정

- 이력·스킬·연락처: `src/data/portfolio.ts`
- 원본 마크다운: `260602. SNU/DOCS/snu-kyuri-porfolio.md`

## 프로젝트 구조

```
├── src/
│   ├── app/
│   ├── components/
│   └── data/
├── public/
└── 260602. SNU/DOCS/
```
