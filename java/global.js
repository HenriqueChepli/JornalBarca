const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const AllLinks = document.querySelectorAll(".sidebar-links a");

AllLinks.forEach((elem) => {
  elem.addEventListener('click', function() {
    const hrefLinkClick  = elem.href;

    AllLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      }
      else {
        link.classList.remove("active")
      }
    });
  });
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
}, 4000)

function nextImage(){
  count ++;
  if(count>4){
    count = 1;
  }
  document.getElementById("radio"+count).checked = true;
}