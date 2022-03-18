$('.Ktext').on('click',function(e){
    $(this).toggleClass('Ktext_Active')
});
let pageSlider = new Swiper('.page',{
    wrapperClass: 'page_wrapper',
    slideClass:'page_screen',
    direction: 'vertical',
    slidesPreView:'auto',
    paralla:true,
    keyboard:{
        enabled: true,
        onlyInViewport:true,
        pageUpDown:true,
    },
    mousewheel:{
        sensitivity:1,
    },
    speed:800,
    observer:true,
    observeParents:true,
    observeSlideChildren:true,
     scrollbar:{
         el:'.page_scroll',
        dragClass:'.page_drag-scroll',
         draggable:true,
     },
});
function send(event, php){
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
            json = JSON.parse(this.response); 
            console.log(json);
            
            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено
                alert("Сообщение отправлено");
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
        // Если не удалось связаться с php файлом
        } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
    
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
}
