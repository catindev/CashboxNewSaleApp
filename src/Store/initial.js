export default {
    // Данные для запросов
    Token: "",
    IdKkm: "",
    Balance: 0,
    SystemErrors: [],

    // Форма добавления новой позиции
    Sections: [],
    Domains: [],
    PositionForm: {
        "Name": "",
        "Price": 0,
        "Markup": 0,
        "Discount": 0,
        "Qty": 1,
        "Section": 0
    },
    PositionFormErrors: {},

    Domain: 0,
    IdDomain: false,    // Вид деятельности

    /** Предчек */
    Positions: [],      // Список товарных позиций
    Total: 0,           // Сумма к оплате     
    Cash: 0,            // Внесено наличными
    NonCash: 0,         // Внесено безналом   
    PrecheckErrors: {},

    //Чек
    Receipt: false
};