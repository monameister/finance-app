// Дэлгэцтэй ажиллах контроллер
var uiController = (function(){
    var DOMstrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDesc).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDomStrings: function(){
            return DOMstrings;
        }
    }
})();


// Санхүүтэй ажиллах контроллер
var financeController = (function(){
    var Income = function(id, desc, value) {
        this.id = id;
        this.desc = desc;
        this.value = value;
      };
      
      var Expense = function(id, desc, value) {
        this.id = id;
        this.desc = desc;
        this.value = value;
      };

      var data = {
        allItems: {
          inc: [],
          exp: []
        },

        totals: {
          inc: 0,
          exp: 0
        }
      }
})();

// Программын холбогч контроллер
var appController = (function(uiController, financeController){
    var ctrlAddItem = function() {
         // Оруулах өгөгдлийг дэлгэцээс олж авна.
         console.log(uiController.getInput());
         // Олж авсан өгөгдлөө санхүүгийн контроллерт дамжуулж тэнд хадгална
 
         // Олж авсан өгөдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана
 
         // Төсвийг тооцоолно
 
         // Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана
    }

    var setupEventListeners = function(){
        var DOM = uiController.getDomStrings();

        document.querySelector(DOM.addBtn).addEventListener('click', function(){
            ctrlAddItem();
         });
         document.addEventListener("keypress", function(event){
             if(event.keyCode === 13 || event.which === 13) {
                 ctrlAddItem();
             }
         });
    }

    return {
        init: function(){
            console.log("App started...");
            setupEventListeners();
        }
    }

})(uiController, financeController);

appController.init();