/* 預約連結設定（全站只改呢一處）
   待醫院資訊科提供「鏡湖通」深連結後，只改下面 BOOKING_URL 一行，
   「預約掛號」掣就會直達相應版面；其餘內容唔使改。 */
window.BOOKING_URL = "https://reg.kwh.org.mo";
(function () {
  function wire() {
    document.querySelectorAll("[data-booking-link]").forEach(function (a) { a.href = window.BOOKING_URL; });
    if (!document.querySelector("[data-booking-nav]")) {
      var nav = document.querySelector("header nav");
      var a = document.createElement("a");
      a.href = "#booking"; a.textContent = "預約掛號"; a.setAttribute("data-booking-nav", "1");
      if (nav) {
        var sib = nav.querySelector("a");
        if (sib) a.className = sib.className;
        nav.appendChild(a);
      } else {
        var h = document.querySelector("header");
        if (h) { a.style.cssText = "display:inline-flex;min-height:44px;align-items:center;border:1px solid currentColor;border-radius:999px;padding:.5rem 1.1rem;text-decoration:none;margin-top:1rem;"; h.appendChild(a); }
      }
    }
  }
  document.addEventListener("DOMContentLoaded", wire);
  setInterval(wire, 1000);
})();
