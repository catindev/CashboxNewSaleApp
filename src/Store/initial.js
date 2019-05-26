export default {
    // Данные для запросов
    Token: "",
    IdKkm: "",
    Balance: 0,
    SystemErrors: [],

    // Секции
    Sections: [],
    SectionsFetching: false,

    // Вид деятельности
    Domains: [],
    DomainsFetching: false,
    Domain: 0,
    IdDomain: false,

    // Форма добавления новой позиции
    PositionForm: {
        "Name": "",
        "Price": 0,
        "Markup": 0,
        "Discount": 0,
        "Qty": 1,
        "Section": 0
    },
    PositionFormErrors: {},

    /** Предчек */
    Positions: [],      // Список товарных позиций
    Total: 0,           // Сумма к оплате     
    Cash: 0,            // Внесено наличными
    NonCash: 0,         // Внесено безналом   
    PrecheckErrors: [],
    PrecheckSaving: false,
    PrecheckSaved: false,

    //Чек
    Receipt: '#'
};