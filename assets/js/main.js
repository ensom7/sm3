let a = prompt('Введите стоимость товара');
let b = prompt('Введите количество денег клиента');

if (a == b){
    alert('Покупка совершена')
}else{
    // alert('Сумма не равна')
    if(a > b){
        let x = a-b;
        alert('Для покупки не хватает ' + x + 'p.');
    }else{
        let x = b - a;
        alert('Покупка совершена. Сдача ' + x + 'p.')
    }
}

