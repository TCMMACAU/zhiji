/* 預約連結設定（全站只改呢一處）
   待醫院資訊科提供「鏡湖通」深連結後，只改下面 BOOKING_URL 一行，
   「預約掛號」掣就會直達相應版面；其餘內容唔使改。
   預約入口只置於頁底：唔喺頂部／導航加入預約掣，畀訪客先睇內容。 */
window.BOOKING_URL = "https://app.kwh.org.mo/";
(function () {
  function wire() {
    document.querySelectorAll("[data-booking-link]").forEach(function (a) { a.href = window.BOOKING_URL; });
    document.querySelectorAll("[data-booking-nav]").forEach(function (a) { a.remove(); });
  }
  document.addEventListener("DOMContentLoaded", wire);
  setInterval(wire, 1000);
})();
