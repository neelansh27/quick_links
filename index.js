function display(l) {
  for (i of l) {
    list.innerHTML += `<li><a href="${i}" target="_blank">${i}</a><button class="up">Up</button><button class="down">down</button><button  class="rb">del</button></li>`;
  }
}
function move(position, index) {
  let poped = mybookmarks.splice(index, 1);
  mybookmarks.splice(index + position, 0, poped[0]);
  localStorage.setItem("links", JSON.stringify(mybookmarks));
  location.reload();
}
function delete_row(child) {
  let parent = child.parentNode;
  let text = parent.childNodes[0].textContent;
  parent.parentNode.removeChild(parent);
  mybookmarks.splice(mybookmarks.indexOf(text), 1);
  localStorage.setItem("links", JSON.stringify(mybookmarks));
}
let mybookmarks = [];
const temp = localStorage.getItem("links");
if (temp) {
  mybookmarks = JSON.parse(temp);
}

const link = document.querySelector("#save");
const delall = document.querySelector("#delall");
const input = document.querySelector("#input");
const list = document.querySelector("#link_list");
const tabsave = document.querySelector("#save-tab");
display(mybookmarks);
link.addEventListener("click", function () {
  val = input.value;
  if (!mybookmarks.includes(val) && val) {
    list.innerHTML += `<li><a href="${val}" target="_blank">${val}</a><button class="up">Up</button><button class="down">down</button><button  class="rb">del</button></li>`;
    input.value = "";
    mybookmarks.push(val);
    localStorage.setItem("links", JSON.stringify(mybookmarks));
    find_child = document.getElementsByClassName("rb");
    console.log(find_child);
    location.reload();
  }
});

tabsave.addEventListener("click", function () {
  browser.tabs.query({ currentWindow: true, active: true }, function (tab) {
    const taburl = tab[0].url;
    if (!mybookmarks.includes(taburl)) {
      list.innerHTML += `<li><a href="${taburl}" target="_blank">${taburl}</a><button class="up">Up</button><button class="down">down</button><button class="rb">del</button></li>`;
      mybookmarks.push(taburl);
      localStorage.setItem("links", JSON.stringify(mybookmarks));
      location.reload();
    }
  });
});
const children = document.getElementsByClassName("rb");
for (let i = 0; i < children.length; i++) {
  let current_child = children[i];
  current_child.addEventListener("click", () => {
    delete_row(current_child);
  });
}

const move_up = document.getElementsByClassName("up");
for (let i = 0; i < move_up.length; i++) {
  let childup = move_up[i];
  childup.addEventListener("click", () => {
    move(-1, i);
  });
}
const move_dowm = document.getElementsByClassName("down");
for (let i = 0; i < move_dowm.length; i++) {
  let childdown = move_dowm[i];
  childdown.addEventListener("click", () => {
    move(1, i);
  });
}

delall.addEventListener("dblclick", function () {
  localStorage.clear();
  mybookmarks = [];
  list.innerHTML = "";
});
