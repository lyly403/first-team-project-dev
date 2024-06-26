 글쓰기 완료 버튼 클릭 시 데이터 이동
document.getElementById('writeForm').addEventListener('submit', function(event) {
  event.preventDefault(); //

   글쓰기 페이지에서 작성한 데이터 가져오기
  var title = document.getElementById('title').value;
  var date = document.getElementById('date').value;
  var location = document.getElementById('location').value;
  var price = document.getElementById('price').value;
  var count = document.getElementById('count').value;
  var category = document.getElementById('category').value;
  var textArea = document.getElementById('text-area').value;

   데이터 유효성 검사 (예시)
  if (!title || !date || !location || !price || !count || !category || !textArea) {
    alert("모든 필드를 채워주세요.");
    return;
  }

   상세 페이지 URL에 데이터 추가하여 이동
  window.location.href = `/sportLink/pages/ticket/ticket_inner.html?title=${encodeURIComponent(title)}&date=${encodeURIComponent(date)}&location=${encodeURIComponent(location)}&price=${encodeURIComponent(price)}&count=${encodeURIComponent(count)}&category=${encodeURIComponent(category)}&textArea=${encodeURIComponent(textArea)}`;
});

    // 지도 생성
    var container = document.getElementById('map'); // 지도를 표시할 div
    var options = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도 중심 좌표 (서울)
        level: 3 // 지도 확대 레벨
    };
    var map = new kakao.maps.Map(container, options); // 지도 객체 생성
