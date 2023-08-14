# Тестовое залание на верстку

## Используемые инструменты:

- vite
- nodejs
- fancybox
- owl.carousel
- jquery
- scss

## Запуск и сборка проекта

- Перейти в папку проекта
- Установить зависимости (pnpm i / npm i)
- Запуск в режиме разработки: pnpm dev
- Запуск сборки: pnpm build

Дополнитель был создан плагин генерации service-worker для vite

## Комментарии

### Шрифты

Ввиду отсутствия шрифта указанного в макете использовал максимально близкий по начертанию шрифт Nunito Sans

### AJAX

Для демонстрации работы запроса использовался сервис тестового API [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

### Поиск

Ввиду того, что не совсем ясно из макета как должен ьыть реализован поиск, сделано слежующим образом: при ширине экрана более 1439px поиск отображеется правее основного контента, менее - в поле меню
