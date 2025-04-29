const express = require('express');
const axios = require('axios');
const router = express.Router();

// 기존 /api/data
router.get('/data', (req, res) => {
  res.json({
    message: '이것은 MCP 서버의 응답입니다.',
    timestamp: new Date().toISOString(),
  });
});

// 🆕 새로운 /api/weather 추가
router.get('/weather', async (req, res) => {
  const city = req.query.city || 'Seoul';  // 기본 도시는 서울
  const apiKey = process.env.OPENWEATHER_API_KEY;  // 발급받은 API 키로 교체!

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`;

  try {
    const response = await axios.get(url);
    res.json({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
    });
  } catch (error) {
    if (error.response) {
      console.error('에러 응답 데이터:', error.response.data);
      console.error('에러 상태 코드:', error.response.status);
    } else if (error.request) {
      console.error('에러 요청:', error.request);
    } else {
      console.error('에러 메시지:', error.message);
    }
    res.status(500).json({ error: '날씨 정보를 가져오지 못했습니다.' });
  }
});

module.exports = router;