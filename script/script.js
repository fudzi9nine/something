let slider = document.getElementsByTagName('iframe');  //изменение размера видео в зависимости от размера экрана
let sliderContainer = document.getElementById('reviews-slider');
let sliderRight = document.getElementById('button-right');
let sliderLeft = document.getElementById('button-left');
let sliderItem = document.getElementsByClassName('slider-item');
for(let i=0; i<slider.length; i++){
    if(window.getComputedStyle(sliderItem[i]).getPropertyValue('display') != 'none'){
        slider[i].style.height = parseInt(window.getComputedStyle(slider[i]).getPropertyValue('width'))/7*4 + 'px';
        sliderContainer.style.height = parseInt(window.getComputedStyle(slider[i]).getPropertyValue('width'))/7*4 + 'px';
    }
    window.addEventListener("resize", function(){
        if(window.getComputedStyle(sliderItem[i]).getPropertyValue('display') != 'none'){
            slider[i].style.height = parseInt(window.getComputedStyle(slider[i]).getPropertyValue('width'))/7*4 + 'px';
            sliderContainer.style.height = parseInt(window.getComputedStyle(slider[i]).getPropertyValue('width'))/7*4 + 'px';
        }
    })
}

let slideNumber = 0;
sliderRight.addEventListener('click', function(){               //Слайдер вперёд
    document.documentElement.style.setProperty('--slider-width', window.getComputedStyle(slider[slideNumber]).getPropertyValue('width'));
    slideNumber++;
    sliderItem[slideNumber].style.display = 'block';
    for(let i=0; i<slider.length; i++){
        if(window.getComputedStyle(sliderItem[i]).getPropertyValue('display') != 'none'){
            slider[i].style.height = parseInt(window.getComputedStyle(slider[i]).getPropertyValue('width'))/7*4 + 'px';
            sliderContainer.style.height = parseInt(window.getComputedStyle(slider[i]).getPropertyValue('width'))/7*4 + 'px';
        }
    }
    sliderItem[slideNumber].setAttribute('class', "slider-item right2");
    sliderItem[slideNumber-1].setAttribute('class', "slider-item right");
    if(slideNumber==sliderItem.length-1){
        sliderRight.style.display = 'none';
        sliderLeft.style.display = 'block';
    } else {
        sliderRight.style.display = 'block';
        sliderLeft.style.display = 'block';
    }
    setTimeout(function(){
        sliderItem[slideNumber].setAttribute('class', 'slider-item');
        sliderItem[slideNumber-1].style.display = 'none';
        sliderItem[slideNumber-1].setAttribute('class', 'slider-item');

    }, 600);
})

sliderLeft.addEventListener('click', function(){               //Слайдер Назад
    document.documentElement.style.setProperty('--slider-width', window.getComputedStyle(slider[slideNumber]).getPropertyValue('width'));
    slideNumber--;
    sliderItem[slideNumber].style.display = 'block';
    for(let i=0; i<slider.length; i++){
        if(window.getComputedStyle(sliderItem[i]).getPropertyValue('display') != 'none'){
            slider[i].style.height = parseInt(window.getComputedStyle(slider[i]).getPropertyValue('width'))/7*4 + 'px';
            sliderContainer.style.height = parseInt(window.getComputedStyle(slider[i]).getPropertyValue('width'))/7*4 + 'px';
        }
    }
    sliderItem[slideNumber].setAttribute('class', "slider-item left2");
    sliderItem[slideNumber+1].setAttribute('class', "slider-item left");
    if(slideNumber==0){
        sliderLeft.style.display = 'none';
        sliderRight.style.display = 'block';
    } else {
        sliderLeft.style.display = 'block';
        sliderRight.style.display = 'block';
    }
    setTimeout(function(){
        sliderItem[slideNumber].setAttribute('class', 'slider-item');
        sliderItem[slideNumber+1].style.display = 'none';
        sliderItem[slideNumber+1].setAttribute('class', 'slider-item');

    }, 600);
})



let mobileMenuButton = document.getElementById('mobile-menu');  // Мобильное меню
let mobileMenu = document.getElementById('mobile-menu-onclick');
let header = document.getElementById('header-outer');
mobileMenuButton.addEventListener('click', function(){
    if (window.getComputedStyle(mobileMenu).getPropertyValue('display') == "none"){
        mobileMenu.style.display = "block";
        header.style.background = "#F9F8FD";
        mobileMenuButton.style.backgroundColor = "#FFFFFF";
        mobileMenuButton.innerHTML = '<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="16" width="22.0001" height="2.11765" rx="1.05882" transform="rotate(-45 1 16)" fill="#787878"/><rect width="22.0001" height="2.11765" rx="1.05882" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 18 16)" fill="#787878"/></svg>';
    } else{
        mobileMenu.style.display = "none";
        header.style.background = "#FFFFFF";
        mobileMenuButton.style.backgroundColor = "#F9F8FD";
        mobileMenuButton.innerHTML = '<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.53857" width="16.9232" height="2.11765" rx="1.05882" fill="#787878"/><rect y="5.29413" width="22.0001" height="2.11765" rx="1.05882" fill="#787878"/><rect y="10.5882" width="22.0001" height="2.11765" rx="1.05882" fill="#787878"/><rect x="1.69238" y="15.8824" width="18.6155" height="2.11765" rx="1.05882" fill="#787878"/></svg> ';
    }
})


let options= document.getElementsByClassName('menu-option');        //Смена опций поиска
for(let i=0; i<options.length; i++){
    options[i].addEventListener('click', function(){
        if (options[i].getAttribute('id')=='menu-option-active') {
        } else{
            let active = document.getElementById('menu-option-active');
            active.removeAttribute('id');
            options[i].setAttribute('id','menu-option-active');
        }
    })
}

let openMobileOptions = document.getElementById('mobile-options');  //Мобильные опции поиска
let mobileOptionsAll = document.getElementById('mobile-options-all');
let closeMobileOptions = document.getElementById('mobile-options-close');
let mobileOptions = document.getElementById('mobile-options-onclick');
openMobileOptions.addEventListener('click', function(){         // Открытие мобильных опций
    mobileOptions.style.display = 'flex';
})
closeMobileOptions.addEventListener('click', function(){         // Закрытие мобильных опций
    mobileOptions.style.display = 'none';
})

let mobilePickOptions = document.getElementsByClassName('mobileLabel');     //Выбор мобильной опции
let mopbilePickedImg = document.getElementsByClassName('picked');
for(let i=0;i<mobilePickOptions.length; i++){
    mobilePickOptions[i].addEventListener('click', function(){
        if (mopbilePickedImg[i].getAttribute('src') == 'styles/img/mobile-options-choose.png') {
            mopbilePickedImg[i].setAttribute('src', 'styles/img/mobile-options-choosed.png')
        } else {
            mopbilePickedImg[i].setAttribute('src', 'styles/img/mobile-options-choose.png')
        }
    })
}



let mobileSubmit = document.getElementById('mobile-options-submit');    //Отправка мобильных опций
mobileSubmit.addEventListener('click', function(event){
    mobileOptions.style.display = 'none';
    event.preventDefault();
    if(mopbilePickedImg[0].getAttribute('src') == 'styles/img/mobile-options-choose.png'){
        mobileOptionsAll.style.display = 'none';
    } else {
        mobileOptionsAll.style.display = 'block';
    }
    return false;
})

let links = document.getElementsByTagName('a');  //Остановка ссылок
for(let i=0; i<links.length; i++){
    links[i].addEventListener('click', function(event){
        event.preventDefault();
        return false;
    })
}

function orderCounter(){
    let countDown = document.getElementsByClassName('meal-count-down');
    let countUp = document.getElementsByClassName('meal-count-up');
    let countNumber = document.getElementsByClassName('meal-count-number');
    for(let i=0; i<countUp.length; i++){                //Прибавление к счётчику заказов
        countUp[i].addEventListener('click', function(){
            let realNumber = parseInt(countNumber[i].innerHTML);
            if(0<realNumber && realNumber<9){
                countNumber[i].innerHTML = realNumber+1;
            }
        })
    }
    for(let i=0; i<countDown.length; i++){               //Вычитание из счётчика заказов
        countDown[i].addEventListener('click', function(){
            let realNumber = parseInt(countNumber[i].innerHTML);
            if(1<realNumber && realNumber<10){
                countNumber[i].innerHTML = realNumber-1;
            }
        })
    }

    let orderSubmit = document.getElementsByClassName('meal-buy-button');   //Обновление счётчика заказов
    for(let i=0; i<orderSubmit.length; i++){
        orderSubmit[i].addEventListener('click', function(event){
            countNumber[i].innerHTML = '1';
            event.preventDefault();
            return false;
        })
    }
}
orderCounter();

let mealName = ['Фиджи салат','Буряк отварной салат','Греческий салат','Капуста свежая с зеленью'];
let mealGram = ['150 г','150 г','200 г','100 г'];
let mealRecipe = ['Листья салата, помидоры черри, огурцы, перепелиные яйца, растительное масло, мёд, лимон','Отварная свекла, соль, растительное масло','Помидоры, болгарский перец, огурцы, красный лук, маслины, сыр фета, оливковое масло','Свежая капуста, морковь, укроп, зеленый лук, растительное масло'];
let mealPrice = ['38','18','32','18'];
let mealImg = ['styles/img/menu1.png','styles/img/menu2.png','styles/img/menu3.png','styles/img/menu4.png']

let mealFarm = document.getElementById('more-meal');        // Изменение количества добавляемых блюд
let testInner = document.getElementsByClassName('last4');
let mainMenu = document.getElementById('main-menu');
function mealInnerChange(){
    if (window.getComputedStyle(testInner[1]).getPropertyValue('display') == 'none' && mealFarm.innerHTML != "Ещё 4 блюда") {
        mealFarm.innerHTML = "Ещё 4 блюда";
    } else if(window.getComputedStyle(testInner[1]).getPropertyValue('display') != 'none' && mealFarm.innerHTML != "Ещё 8 блюд"){
        mealFarm.innerHTML = "Ещё 8 блюд";
    }
}
mealInnerChange();
window.addEventListener('resize', mealInnerChange);

mealFarm.addEventListener('click', function(){  //Ферма по производству еды
    let mealAmount;
    if (mealFarm.innerHTML == "Ещё 4 блюда") {
        mealAmount=4;
    } else {
        mealAmount =8;
    }
    for(let i=0; i<mealAmount; i++){
        let rand = Math.floor(Math.random()*4);
        oldMainMenu = mainMenu.innerHTML;
        mainMenu.innerHTML = oldMainMenu + '<div class="main-menu-meal"><img class="meal-img" src="'+mealImg[rand]+'" alt="'+mealName[rand]+'"><h3 class="meal-header">'+mealName[rand]+'</h3><form class="main-menu-info"><div class="meal-count"><button type="button" class="meal-count-button meal-count-down">&ndash;</button><span class="meal-count-number">1</span><button type="button" class="meal-count-button meal-count-up">+</button></div><p class="meal-gram">'+mealGram[rand]+'</p><p class="meal-recipe">'+mealRecipe[rand]+'</p><div class="meal-price-and-buy"><img class="meal-price-img" src="styles/img/price.png" alt="Ценник"><span class="meal-price-number">'+mealPrice[rand]+'</span><span class="meal-price-valute">грн</span><button type="submit" class="meal-buy-button">Купить</button></div></form></div>';
    }
    orderCounter();

})

