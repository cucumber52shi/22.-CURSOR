# 정규리 포트폴리오 (Kyuri Portfolio)

Slick 템플릿 스타일을 참고한 단일 페이지 포트폴리오입니다. Next.js App Router + Tailwind CSS로 구성되어 Vercel 배포에 최적화되어 있습니다.

## 로컬 실행

```powershell
cd kyuri-portfolio
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

## Vercel 배포

1. [vercel.com](https://vercel.com) 에서 GitHub 저장소를 연결하거나, Vercel CLI를 사용합니다.
2. **Root Directory**를 `kyuri-portfolio` 로 지정합니다 (모노레포인 경우).
3. Framework Preset: **Next.js** (자동 감지)
4. Build Command: `npm run build` (기본값)
5. Output Directory: `.next` (기본값)

### Vercel CLI 예시

```powershell
cd kyuri-portfolio
npx vercel
```

프로덕션 배포:

```powershell
npx vercel --prod
```

## 콘텐츠 수정

- 이력·스킬·연락처: `src/data/portfolio.ts`
- 원본 마크다운: `../DOCS/snu-kyuri-porfolio.md`

## 프로젝트 구조

```
kyuri-portfolio/
├── src/
│   ├── app/          # 레이아웃, 페이지, 글로벌 스타일
│   ├── components/   # UI 컴포넌트
│   └── data/         # 포트폴리오 데이터
└── public/
```
