// Дэлгэцний модуль контроллер
var uiController = (function(){

})();

// Санхүүгийн модуль контроллер
var financeController = (function(){

})();

// Программын холбогч контроллер
var appController = (function(uiController, financeController){
    var ctrlAddItem = function() {
         // Оруулах өгөгдлийг дэлгэцээс олж авна
         console.log("Дэлгэцээс өгөгдлөө авах хэсэг");
         // Олж авсан өгөгдлөө санхүүгийн контроллерт дамжуулж тэнд хадгална
 
         // Олж авсан өгөдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана
 
         // Төсвийг тооцоолно
 
         // Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана
    }

    document.querySelector('.add__btn').addEventListener('click', function(){
       ctrlAddItem();
    })
    document.addEventListener("keypress", function(event){
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(uiController, financeController);