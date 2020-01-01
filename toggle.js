// acquiring elements

const btn = document.getElementById("menu-toggle");
const lines = btn.querySelectorAll(".line"); // 3
const cls = { open: "open", close: "close" }; // classes open and close stored in object cls
let btnClass = cls.open; // initial class added - open

btn.addEventListener('click', () => {
  // check for class open is already there, if there remove it and add close class
  if (btn.classList.contains(cls.open)) {
    btn.classList.remove(btnClass);
    btnClass = cls.close;
  }

  // otherwise remove the close class and add open class
  else if (btn.classList.contains(cls.close)) {
    btn.classList.remove(btnClass);
    btnClass = cls.open;
  }

  // initial class adding
  void btn.offsetWidth;
  btn.classList.add(btnClass);
})