
var dropdown = document.querySelector(".nav .dropdown");
var button = document.querySelector(".nav .menu");


var nav = document.querySelector(".nav");


function menu() {
  if (dropdown.style.display === "grid") {
    dropdown.style.display = "none";
    button.innerHTML = "menu";
  } else {
    dropdown.style.display = "grid";
    button.innerHTML = "close";
  }
}



window.addEventListener("resize", function() {
  if (window.innerWidth > 768) {
    dropdown.style.display = "none";
    button.innerHTML = "menu";
  }
});


document.addEventListener("click", function(event) {
  var isClickInside = nav.contains(event.target);
  if (!isClickInside) {
    if (dropdown.style.display === "grid") {
      dropdown.style.display = "none";
      button.innerHTML = "menu";
    }
  }
});








document.addEventListener('DOMContentLoaded', function() {
const days = [
{date: '24/06/2024',
  content: `
    <p>TP. HCM </p>
    <p>Hướng dẫn viên đón Quý khách tại Ga trong nước để làm thủ tục đáp chuyến bay đi Hà Nội...</p>
  `
},
{date: '25/06/2024',
  content: `
    <p>TP.HCM -Đà Lạt </p>
    <p> Di chuyển đến Đà Lạt bằng xe hoặc máy bay. Ghé thăm Thung lũng Tình Yêu, hồ Than Thở, vườn dâu, vườn hoa.</p>
  `
},
{date: '26/06/2024',
  content:`
  <p> Đà Lạt</p>
  <p>Tham quan các điểm du lịch nổi tiếng như Thác Datanla, Thiền viện Trúc Lâm, Thung lũng Vàng, Chợ đêm Đà Lạt.</p> 
  `
},
{date:'27/06/2024',
  content:`
  <p>Đà Lạt - Nha Trang</p>
  <p>  Di chuyển đến Nha Trang bằng xe hoặc xe máy.Thư giãn trên bãi biển Nha Trang, tắm nắng và thưởng thức hải sản tươi ngon.</p>
  `
},
{date:'28/06/2024',
  content:`
  <p>Nha Trang - Hà Nội</p>
  <p> Bay đến Hà Nội.Thăm Quảng Bá, phố cổ Hà Nội, hồ Gươm, chùa Một Cột.</p>
  `
},
{date:'29/06/2024',
  content:`
  <p> Hà Nội </p>
  <p>Dành thời gian để thăm quan Hoàng thành Thăng Long, tham quan Hồ Tây, thưởng thức phở Hà Nội và các món ăn đặc sản khác.</p>
  <p> Sau đó hoàn thành thủ tục trả phòng và bay về TP-HCM.</p>
  `
},
];
const rightPanel = document.querySelector('.right-panel');

days.forEach((day, index) => {
const dayElement = document.createElement('div');
dayElement.classList.add('day-content');
dayElement.innerHTML = `
  <h2>Ngày ${index + 1} - ${day.date}</h2>
  ${day.content}
`;
rightPanel.appendChild(dayElement);

const leftPanelDays = document.querySelectorAll('.day-section');
leftPanelDays[index].addEventListener('click', function() {
  
  leftPanelDays.forEach(day => {
    day.classList.remove('active');
  });
 
  this.classList.add('active');
  dayElement.scrollIntoView({ behavior: 'smooth' });
});
});
});
