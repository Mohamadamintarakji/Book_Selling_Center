// alert

let addedAlert = document.querySelector(".timer");
let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 1000);
}

function alertFunc() {
  addedAlert.style.display = "none";
}
myFunction();

// alert

//------------- select Size

var btnContainer = document.querySelectorAll(".selectSize button");

const para = document.querySelectorAll(".size");
const paraId = document.querySelectorAll(".sizeId");

btnContainer.forEach((e) => {
  e.addEventListener("click", (e) => {
    btnContainer.forEach((n) => n.classList.remove("active"));
    e.target.classList.add("active");
    para.forEach((el) => {
      el.value = `${e.target.value}`;
    });
    paraId.forEach((el) => {
      el.value = `${e.target.value}`;
    });
  });
});

//------------- select Size

//------------- select Color

var btnColorContainer = document.querySelectorAll(".selectColor button");

const para2 = document.querySelectorAll(".color");
const paraId2 = document.querySelectorAll(".colorId");

btnColorContainer.forEach((e) => {
  e.addEventListener("click", (e) => {
    btnColorContainer.forEach((n) => n.classList.remove("selectedColor"));
    e.target.classList.add("selectedColor");

    para2.forEach((el) => {
      el.value = `${e.target.value}`;
    });
    paraId2.forEach((el) => {
      el.value = `${e.target.value}`;
    });
  });
});

//------------- select Color

document.querySelectorAll(".selectImg2").forEach((el) => {
  el.onclick = (e) => {
    console.log(e.target.src);
    document.querySelector(".selectImg").src = e.target.src;
  };
});

//Select Option
const addToCart = document.querySelectorAll(".add-toCart");
const select_option = document.querySelectorAll(".div-select-option");
const alert_option = document.querySelectorAll(".alert-option");

addToCart.forEach((Element) => {
  Element.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    select_option.forEach((el) => {
      el.classList.remove("mystyle");
      if (!e.target.classList.contains("notUser")) {
        if (el.id === e.target.value) {
          // el.style.display = "flex";
          console.log("fe");

          el.classList.add("mystyle");
        }
      } else {
        document.querySelector(".alert-addFav").style.display = "block";
        // if (el.id === e.target.id) {

        // }
      }
    });
  });
});

document.querySelectorAll(".close-icon").forEach((Element) => {
  Element.addEventListener("click", (e) => {
    e.stopPropagation();

    select_option.forEach((el) => {
      if (el.id === e.target.id) {
        el.classList.remove("mystyle");
      }
    });
  });
});

document.addEventListener("click", (e) => {
  e.stopPropagation();
  select_option.forEach((element) => {
    element.classList.remove("mystyle");
  });
  alert_option.forEach((el) => {
    el.style.display = "none";
  });
  document.querySelector(".alert-addFav").style.display = "none";
});

select_option.forEach((Element) => {
  Element.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

document.querySelectorAll(".addTocart1").forEach((el) => {
  el.addEventListener("click", (e) => {
    if (
      document.querySelector(".color").value === "" ||
      document.querySelector(".size").value === ""
    ) {
      e.preventDefault();

      alert_option.forEach((el) => {
        if (el.id === e.target.id) {
          el.style.display = "block";
        }
      });
    }
    if (
      document.querySelector(".color").value !== "" &&
      document.querySelector(".size").value !== ""
    ) {
      addedAlert.style.display = "grid";
      myFunction();
    }
  });
});

document.querySelectorAll(".alert").forEach((Element) => {
  Element.addEventListener("click", (e) => {
    e.stopPropagation();
    alert_option.forEach((el) => {
      if (el.id === e.target.id) {
        el.style.display = "none";
      }
    });
    document.querySelector(".alert-addFav").style.display = "none";
  });
});

//Select Alert-Option

function isInputNumber(evt) {
  var ch = String.fromCharCode(evt.which);

  if (!/[0-9]/.test(ch)) {
    evt.preventDefault();
  }
}

// scrolling
const scrollBtn = document.querySelector(".scroll-Up");

const btnVisibility = () => {
  if (window.scrollY > 400) {
    scrollBtn.style.visibility = "visible";
  } else {
    scrollBtn.style.visibility = "hidden";
  }
};

document.addEventListener("scroll", () => {
  btnVisibility();
});
