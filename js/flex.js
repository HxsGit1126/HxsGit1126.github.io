// 右下角动态菜单
// 要操作的元素
const menu_box=document.querySelector('.menu-box');
const menu_button=document.querySelector('.menu-button');

// 为菜单按钮绑定点击事件
menu_button.addEventListener('click',function(){
    menu_box.classList.toggle('actives');
})

// 顶部导航栏
// 获取汉堡按钮
const burger = document.querySelector(".burger");
// 获取导航菜单
const navMenu = document.querySelector(
  ".nav-menu"
);

//获取菜单项
const navMenuItems = document.querySelectorAll(
  ".nav-menu li"
);

//注册监听
burger.addEventListener("click", () => {
  // 汉堡按钮
  burger.classList.toggle("active");
  // 导航菜单开关
  navMenu.classList.toggle("open");

  // 菜单项动画
  navMenuItems.forEach((item, index) => {
    // 如果已添加animation,先取消
    if (item.style.animation) {
      item.style.animation = "";
    } else {
      item.style.animation = `0.3s ease-in slideIn forwards ${index *
        0.1 +
        0.3}s`;
    }
  });
});

// 立体字时间显示
function myTime(){
  let time=new Date();
  let hh=time.getHours();  //时
  let mm=time.getMinutes();  //分
  let ss=time.getSeconds();  //秒
  // Math.floor() 向下取整
  document.getElementById("1").innerText=Math.floor(hh/10);
  document.getElementById("2").innerText=hh%10;
  document.getElementById("4").innerText=Math.floor(mm/10);
  document.getElementById("5").innerText=mm%10;
  document.getElementById("7").innerText=Math.floor(ss/10);
  document.getElementById("8").innerText=ss%10;
}
// 一秒执行一次
setInterval(myTime,1000);

// 右上角百度搜索功能
var oInp = document.getElementById('inp');
var oBtn = document.getElementById('btn');

oBtn.onclick = function () {
    Search();
}

document.onkeydown = function () {
    if (event.keyCode == 13) {
        Search();
    }
}

function Search() {
    var url = 'https://www.baidu.com/s?wd=' + oInp.value;
    window.open(url);
}


var imgSum = 6                  //图片数量
var index = 0                   //当前播放的图片
var prevIndex = imgSum - 1      //前一张播放的图片

var carouselImgList = document.querySelectorAll(".div-carousel-item")
var carouselSpan = document.querySelectorAll('.div-carousel-focus span')
var autoCarousel

// 函数：显示图片
function showImg(showIndex, hideIndex) {
    // 修改当前显示图片对应的图标
    for (let index = 0; index < carouselSpan.length; index++) {
        carouselSpan[index].classList.remove("active")
    }
    carouselSpan[showIndex].classList.add("active")    
    
    carouselImgList[showIndex].style.opacity = '1'
    carouselImgList[hideIndex].style.opacity = '0'
}

// 函数：开始轮播
function startCarousel() {
    autoCarousel = setInterval(function(){
        prevIndex = index
        index = (imgSum - 1 == index)? 0 : index+1
        showImg(index, prevIndex)
    }, 3000)
}

// 函数：初始化点击事件
function initListener() {
    carouselSpan.forEach(function(el, key) {
        el.addEventListener("click", function(e) {
            clearInterval(autoCarousel)
            showImg(key, index)
            index = key
            startCarousel()
        })
    })
}

// 函数：页面初始化
function init() {
    initListener()
    showImg(index, prevIndex)
    startCarousel()
}
init()