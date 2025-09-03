let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");
const isLoginE = document.querySelector("#isLogin");



let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
  
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
window.onresize = function (event) {
  reloadSlider();
};

// form nạp thẻ
function openForm() {
  const garenaForm = document.getElementById("garenaForm");
  garenaForm.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  // Lấy tham chiếu đến nút "Tắt" và form-garena
  const closeFormButton = document.getElementById("closeForm");
  const garenaForm = document.getElementById("garenaForm");

  // Thêm sự kiện click vào nút "Tắt" để đóng form-garena
  closeFormButton.addEventListener("click", function () {
    garenaForm.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const maTheInput = document.getElementById("maThe");
  const xacNhanButton = document.querySelector(
    ".card_change.flex-1 input[type='button']"
  );

  // Xử lý khi bấm nút "Xác Nhận" trong form
  xacNhanButton.addEventListener("click", function () {
    const maTheValue = maTheInput.value;

    if (/^\d{16}$/.test(maTheValue)) {
      thongBao.textContent = "Đã nạp được tiền!";
      thongBao.style.backgroundColor = "#5cb85c";
      thongBao.style.display = "block";

      maTheInput.value = "";
      setTimeout(function () {
        thongBao.style.display = "none";
      }, 2000);
    } else {
      thongBao.textContent = "Mã thẻ không hợp lệ. Vui lòng kiểm tra lại!";
      thongBao.style.color = "black";
      thongBao.style.backgroundColor = "#d9534f";
      thongBao.style.display = "block";

      maTheInput.value = "";
      setTimeout(function () {
        thongBao.style.display = "none";
      }, 2000);
    }
  });
});


// Xử lí phần đăng nhập                   // Mẫu userInfo.innerHTML = `Xin chào ${users[0].userName} | <a href="#" id="logoutButton"> Đăng xuất</a>`;

document.addEventListener("DOMContentLoaded", () => {
  // Kiểm tra xem người dùng đã đăng nhập hay chưa
  const isLogin = localStorage.getItem("isLogin") || true;
 
  // Nếu đã đăng nhập, hiển thị thông tin người dùng hoặc nút đăng xuất
  if (isLogin) {
    const users= JSON.parse(localStorage.getItem("curent_user"));
    
    let userInfo = document.createElement("span");
    userInfo.classList.add("reponsive_card")
    userInfo.innerHTML = `<span id="text_reponsive"> Xin chào ${users[0].userName} | <a href="#" id="logoutButton"> Đăng xuất</a> </span>`;
    const remove1 = document.getElementById("remove");
    remove1.style.display = "none  ";

  loginForm.appendChild(userInfo);
    userInfo.addEventListener("click", function () {
      
      userInfo.remove(localStorage.clear())
      alert("Bạn đã đăng xuất thành công.");
      // dang nhap
     
       remove1.style.display = "block";
    });
    
  }

});

// document.addEventListener("DOMContentLoaded", () => {
//   // Kiểm tra xem người dùng đã đăng nhập hay chưa
//   let isLogin = JSON.parse(localStorage.getItem("isLogin")) || false;

//   const loginForm = document.getElementById("loginForm");
//   const remove1 = document.getElementById("remove");

//   // Nếu đã đăng nhập, hiển thị thông tin người dùng hoặc nút đăng xuất
//   if (isLogin) {
//     const users = JSON.parse(localStorage.getItem("current_user"));

//     let userInfo = document.createElement("div");
//     userInfo.classList.add("responsive_card");
//     userInfo.innerHTML = `<span id="text_responsive"> Xin chào ${users[0].userName} | <a href="#" id="logoutButton"> Đăng xuất</a> </span>`;
//     remove1.style.display = "none";


//     const logoutButton = userInfo.querySelector("#logoutButton");
//     logoutButton.addEventListener("click", function () {
//       // Đăng xuất người dùng
//       userInfo.innerHTML= `div`
//       alert("Bạn đã đăng xuất thành công.");

//     loginForm.appendChild(userInfo);
//       // Cập nhật giao diện người dùng sau khi đăng xuất
//       userInfo.remove();
//       remove1.style.display = "block";
//     });
//   }
// });

