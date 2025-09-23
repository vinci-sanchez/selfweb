// const config = require('./data.js');//dev启动导入
//import config from './config.json' assert { type: 'json' };//dev启动导入
import config from "./config.js";
console.log("config", config);
//import './node_modules/@mdui/icons/arrow-forward.js';

const Change_mode_button = document.querySelector("#button_mode");
Change_mode_button.addEventListener("click", Change_mode);
function Change_mode_first() {
  const mode = document.documentElement;
  const button = document.querySelector("#button_mode");
  let Originally = mdui.getTheme();
  if (Originally === "light") {
    mode.setAttribute("class", "mdui-theme-light ");
    button.setAttribute("icon", "light-mode");
  } else {
    // 修改 HTML 属性
    mode.setAttribute("class", "mdui-theme-dark ");
    button.setAttribute("icon", "bedtime");
  }
}
Change_mode_first(); //应该跟windows有关的bug
function Change_mode() {
 
  const mode = document.documentElement;
  const button = document.querySelector("#button_mode");
  let Originally = mdui.getTheme();
  if (Originally === "light") {
    mode.setAttribute("class", "mdui-theme-dark ");
    button.setAttribute("icon", "bedtime");
  } else {
    // 修改 HTML 属性
    mode.setAttribute("class", "mdui-theme-light ");
    button.setAttribute("icon", "light-mode");
  }
  let svgs=document.querySelectorAll(".middle img");
  svgs.forEach((img)=>{
    if(Originally === "light"){
      img.style.filter="invert(0%)";
    }else{
      img.style.filter="invert(100%)";
    }
  })
}
const stop_css_botton = document.querySelector("#stop_css");
const hellocard=document.querySelector("#hellocard");
stop_css_botton.addEventListener("click", stopcss);
//暂停css动画
function stopcss(){
  if(hellocard.classList.contains('pause-animation')){
    hellocard.classList.remove('pause-animation'); // 或指定父容器
    stop_css_botton.setAttribute("icon", "pause");
  }else{
    hellocard.classList.add('pause-animation');
    stop_css_botton.setAttribute("icon", "sync");
  }
}
// const snackbartopstart = document.querySelector(
//   ".mdui-snackbar[placement='top-start']"
// );
// const snackbartop = document.querySelector(".mdui-snackbar[placement='top']");
// const snackbartopend = document.querySelector(
//   ".mdui-snackbar[placement='top-end']"
// );
// const snackbarbottomstart = document.querySelector(
//   ".mdui-snackbar[placement='bottom-start']"
// );
// const snackbarbottom = document.querySelector(
//   ".mdui-snackbar[placement='bottom']"
// );
// const snackbarbottomend = document.querySelector(
//   ".mdui-snackbar[placement='bottom-end']"
// );
let cycle = [true, true, true, true, true, true];

show_all_bgdtxt();

function show_all_bgdtxt() {
  for (let groupIndex = 0; groupIndex < 6; groupIndex++) {
    // console.log("i=", i);
    const bgdtxt = document.getElementById("bgdtxt_" + groupIndex);
    bgdtxt.setAttribute("display", "true");
    show_one_bgdtxt(bgdtxt, groupIndex);
  }
}
// function cycle_show_bgdtxt(bgdtxt) {
//   //const bgdtxt = document.querySelector(".blackgroundtxt");
//   try {
//     // setTimeout(() => {
//       //updatabgdtxt(bgdtxt);
//       show_one_bgdtxt(bgdtxt);
//       // cycle_show_bgdtxt(bgdtxt);
//     // }, 3000);
//   } catch (error) {
//     console.error("Error showing background text:", error);
//   }
// }
function updatabgdtxt(bgdtxt) {
  try {
    //获取随机整数
    let rand_txt = getRandomInt(0, config.bgdtxt_world.length - 1);
    bgdtxt.textContent = config.bgdtxt_world[rand_txt];
    bgdtxt.style.top = getRandomInt(3, 99) + "%";
    bgdtxt.style.left = getRandomInt(3, 99) + "%";
    bgdtxt.style.transform = `rotate(${getRandomInt(-90, 90)}deg)`;
  } catch (error) {
    console.error("Error updating background text:", error);
  }
}
// 获取 min（包含）到 max（包含）的随机整数
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function show_one_bgdtxt(bgdtxt, groupIndex) {
  try {
    if (!cycle[groupIndex]) return; // 防止动画未完成
    cycle[groupIndex] = false;
    updatabgdtxt(bgdtxt);
    const text = bgdtxt.textContent.trim(); //获取文本内容并去除首尾空格
    const show_time=200;//ms
    bgdtxt.innerHTML = "";
    bgdtxt.style.display = "block";
    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.className = "char";
      span.style.animation = `showAndHide 3s forwards`; // 动态设置文字显示持续时间
      span.style.animationDelay = `${index * show_time / 1000}s`; // 动态设置延迟（每字符 0.2 秒）
      span.textContent = char;
      bgdtxt.appendChild(span);
    });
    setTimeout(() => {
      updatabgdtxt(bgdtxt);
      cycle[groupIndex] = true;
      show_one_bgdtxt(bgdtxt, groupIndex);
    }, 2000 + text.length * show_time + 200); //200不知道干嘛的
  } catch (error) {
    console.error("Error showing background text:", error);
  }
}
function dont_teach_me() {
  for (let i = 0; i < 70; i++) {
    const dtm = document.createElement("div");
    dtm.textContent = "别碰我！";
    const text = dtm.textContent.trim(); //获取文本内容并去除首尾空格
    dtm.innerHTML = "";
    dtm.className = "blackgroundtxt";
    dtm.style.display = "block";
    dtm.style.fontSize = getRandomInt(12, 32) + "px";
    dtm.style.position = "absolute";
    dtm.style.transformOrigin = "top left";
    dtm.style.top = getRandomInt(0, 99) + "%";
    dtm.style.left = getRandomInt(0, 99) + "%";
    dtm.style.transform = `rotate(${getRandomInt(-60, 60)}deg)`;
    document.body.appendChild(dtm);
    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.className = "char";
      span.style.animation = `showAndHide 2s forwards`; // 动态设置动画持续时间
      span.style.animationDelay = `${index * 0.2}s`; // 动态设置延迟（每字符 0.2 秒）
      span.textContent = char;
      dtm.appendChild(span);
    });
  }
}
let wel_card = 0;
const snackbar = document.querySelector(".example-snackbar");
const openButton = snackbar.nextElementSibling;
function updateSnackbar() {
  switch (wel_card) {
    case 0:
      snackbar.textContent = "欢迎(≧∇≦)/";
      break;
    case 1:
      snackbar.textContent = "欢迎(〜￣▽￣)〜";
      break;
    case 2:
      snackbar.textContent = "点别处呗 （•͈ ₃ •͈）";
      // dont_teach_me();
      break;
    case 3:
      snackbar.textContent = "我点着不好玩(ᗜ𖥦ᗜ)";
      break;
    case 4:
      snackbar.textContent = "真的(๑ᵒᯅᵒ๑)";
      break;
    case 5:
      snackbar.textContent = "别点了૮₍･᷄-･᷅₎ა";
      break;
    case 6:
      snackbar.textContent = "我没话了U(TｪT)U";
      break;
    case 7:
      snackbar.textContent = "真没了 (꒦^꒦)";
      break;
    case 8:
      snackbar.textContent = "大哥，别点了₍ (̨̡ ‾᷄ᗣ‾᷅ )̧̢ ₎";
      break;
    case 9:
      snackbar.textContent = "别点了！！！";
      show_all_snackbar();
      dont_teach_me();
    // setTimeout(() => {
    //   snackbar.textContent = "皮一下真好玩";
    //     snackbar.open = true;
    // }, 1000);
    // break;
    default:
      snackbar.textContent = "别点我了QAQ,不皮了";
  }
  wel_card++;
}
//updateSnackbar();
function show_all_snackbar() {
  // 选中所有六个带 placement 属性的 snackbar
  const snackbars = document.querySelectorAll("mdui-snackbar[placement]");
  snackbars.forEach((snackbar) => {
    snackbar.open = true;
  });
  setTimeout(() => {
    snackbar.textContent = "皮一下真好玩";
    snackbar.open = true;
  }, 2000);
}
//停留一秒
openButton.addEventListener("click", () => {
  updateSnackbar();
  snackbar.open = true;
  if (wel_card === 1) {
  }
  openButton.setAttribute("disabled", "true");
  setTimeout(() => {
    openButton.setAttribute("disabled", "false");
  }, 1200);
});
main_active();
async function main_active() {
  let data;
  data = await get_windows_active();
  console.log("获取的数据1", data);
  show_data(data);
}
async function get_windows_active() {
  try {
    const response = await fetch(
      config.server_url + "/get", //'https://vincisanchez.dpdns.org'+'/get',
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`资源未找到 ${response.status}`);
      } else if (response.status === 500) {
        throw new Error("服务器错误");
      } else {
        throw new Error("error fetching lifelogs", error.message);
      }
    }
    //return response.json();
    const data = await response.json();
    console.log("获取的数据", data);
    return data;
  } catch (error) {
    console.error("error fetching lifelogs", error.message);
    throw error;
  }
}
function show_data(data) {
  if (data) {
    // let active_num=1;
    for (let active_num = 0; active_num <= 9; active_num++) {
      const time_i = document.querySelector("#time_" + active_num);
      //console.log("time_i", time_i);
      if (time_i) {
        time_i.textContent = data[active_num].time;
      }
    }
    for (let active_num = 0; active_num <= 9; active_num++) {
      const active_i = document.querySelector("#active_" + active_num);
      //console.log("active_i", active_i);
      if (active_i) {
        active_i.textContent = data[active_num].app_title;
      }
    }
    for (let active_num = 0; active_num <= 9; active_num++) {
      const memory_i = document.querySelector("#Memory_" + active_num);
      // console.log("memory_i", memory_i);
      if (memory_i) {
        memory_i.textContent = data[active_num].mem;
      }
    }
  } else {
    for (let active_num = 0; active_num <= 9; active_num++) {
      const active_i = document.querySelector("#active_" + active_num);
      active_i.textContent = "这个比很长时间没用了 "; //Data[active_num];
    }
  }
}
//Change_size();
function Change_size(){
   const svg = document.querySelector('svg');
  if (!svg) return;
  const paths = svg.querySelectorAll('path');
  if (paths.length === 0) return;

  // 初始化联合 bbox
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  paths.forEach(path => {
    const bbox = path.getBBox();
    minX = Math.min(minX, bbox.x);
    minY = Math.min(minY, bbox.y);
    maxX = Math.max(maxX, bbox.x + bbox.width);
    maxY = Math.max(maxY, bbox.y + bbox.height);
  });

  const width = maxX - minX;
  const height = maxY - minY;
  svg.setAttribute('viewBox', `${minX} ${minY} ${width} ${height}`);
}
const or_other_bottom = document.querySelector("#or_other");
or_other_bottom.addEventListener("click", or_other());
function or_other(){
 const dialog = document.querySelector(".example-dialog");
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector("mdui-button");

  openButton.addEventListener("click", () => dialog.open = true);
  closeButton.addEventListener("click", () => dialog.open = false);
}
  window.addEventListener('load', function() {
      document.body.classList.remove('loading');
      document.body.classList.add('loaded');
    });
