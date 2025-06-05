# Node.js 연습 환경 설정

이 리포지토리는 Node.js를 학습하기 위한 기본 환경을 제공합니다. 다음 단계에 따라 환경을 설정하세요.

## 요구 사항
- **Node.js** (권장 버전: `20`)
- **pnpm** (패키지 매니저)
- 선택 사항: **nvm** (Node Version Manager)

## 환경 설정
1. **nvm 설치 (선택 사항)**
   - nvm을 사용하면 여러 버전의 Node.js를 쉽게 관리할 수 있습니다.
   - 설치 방법은 [nvm 공식 저장소](https://github.com/nvm-sh/nvm) README를 참고하세요.
2. **Node.js 버전 맞추기**
   - 이 리포지토리의 루트에는 `.nvmrc` 파일이 포함되어 있습니다. 다음 명령어로 버전을 맞출 수 있습니다.
     ```bash
     nvm install
     nvm use
     ```
3. **pnpm 설치**
   - `corepack` 명령을 사용해 pnpm을 활성화할 수 있습니다.
     ```bash
     corepack enable
     corepack prepare pnpm@latest --activate
     ```
4. **의존성 설치**
   - 프로젝트의 의존성이 추가되면 다음 명령어로 설치합니다.
     ```bash
     pnpm install
     ```
5. **샘플 코드 실행**
   - `index.js` 파일을 실행하여 Node.js가 제대로 동작하는지 확인할 수 있습니다.
     ```bash
     node index.js
     ```

## 기타 정보
- 이 프로젝트는 학습용으로 최소한의 설정만 포함되어 있으며, 필요한 패키지나 스크립트는 원하는 대로 추가하여 사용할 수 있습니다.
