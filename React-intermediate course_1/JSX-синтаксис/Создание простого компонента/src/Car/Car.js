import React from 'react';

//Первый способ создания компонента (редко встречается)
// function Car() {
//     return (
//         <h2>This is car component</h2>
//     )
// }


//Второй способ создания компонента (лучше)!
// const Car = () => {
//     return (
//         <h2>This is car component</h2>
//     )
// }


//Третий способ создания компонента (самый короткий)
//Если нет фигурных скобок у стрелочной функции, то это означает, что автоматически мы что-то возвращаем
// const Car = () => (
//     <div>
//         <h2>This is car component</h2>
//         <strong>Test</strong>
//     </div>
// );


//Последний способ создания компонентов
export default () => (
    <div>
        <h2>This is car component</h2>
        <strong>Test</strong>
    </div>
);