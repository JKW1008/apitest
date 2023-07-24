fetch(
  "https://api.odcloud.kr/api/15052836/v1/uddi:2253111c-b6f3-45ad-9d66-924fd92dabd7?page=1&perPage=1400&serviceKey=%2F8u%2Fpq1M69Ku5DaSfGjicd5scPxmXt6bgQv4uB64DCNv9lk6hjU6K5i6a0H1h6CZEXJldL0xHU9fdWSFNjyUAA%3D%3D"
)
  .then((res) => res.json())
  .then((data) => {
    localStorage.setItem("addresArray", JSON.stringify(data));
    // console.log(data);
  });
