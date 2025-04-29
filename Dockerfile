# 1. Node.js 공식 이미지를 기반으로
FROM node:20

# 2. 작업 디렉토리 만들고
WORKDIR /app

# 3. package.json, package-lock.json 복사 (최소 복사)
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. 나머지 소스 코드 복사
COPY . .

# 6. 사용할 포트 열어주고
EXPOSE 3000

# 7. 앱 실행
CMD ["npm", "start"]
