/* 預約連結設定（全站只改呢一處）
   資訊科表示暫時無法以超連結直接喚起手機「鏡湖通」App，
   站內「預約掛號」維持連網頁版（v3）。深連結暫不可用；其餘內容唔使改。
   預約入口只置於頁底：唔喺頂部／導航加入預約掣，畀訪客先睇內容。 */
window.BOOKING_URL = "https://app.kwh.org.mo/v3/#/";
(function () {
  function wire() {
    document.querySelectorAll("[data-booking-link]").forEach(function (a) { a.href = window.BOOKING_URL; });
    document.querySelectorAll("[data-booking-nav]").forEach(function (a) { a.remove(); });
  }
  document.addEventListener("DOMContentLoaded", wire);
  setInterval(wire, 1000);
})();
