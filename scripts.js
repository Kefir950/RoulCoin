console.info("Информация: приложение запущено!");
setTimeout(() => { console.warn("Предупреждение: внимание! Настройки базы данных не заданы, используем для хранения текстовой файл..."); }, 5000);
setTimeout(() => { console.error("Ошибка: ошибок нет!"); }, 15000);
var ctId=document.getElementById('ct');
var buttonId=document.getElementById('button');
var counter=0;
buttonId.addEventListener('click',function(){
	counter++;
	ct.textContent='Кликов сделано: '+counter
});
setTimeout(() => { console.log("Лог: приложение успешно работает!"); }, 20000);
