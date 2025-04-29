
## docker 파일 빌드 명령어 
docker build -t mcp-server 

## docker 파일 container 명령어 
docker run -d -p 3000:3000 --name mcp-server-container mcp-server.

	-d → 백그라운드 실행 (detach)
	•	-p 3000:3000 → (호스트포트:컨테이너포트) 매핑
	•	--name mcp-server-container → 컨테이너 이름
	•	mcp-server → 아까 만든 이미지 이름

## 실행중인 docker container  조회
 docker ps

## 실행 중인 docker image 파일 조회
 docker imagesㅊ
