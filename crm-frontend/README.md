Приложение написано только на JS, без использования библиотек.
Чтобы успеть продемострировать прелоадер и спиннеры на кнопках (сохранение, удаление, изменение) был добавлен setTimout.

Из улучшений были выполнены следующие пункты:
1. Анимация выхода модального окна - выход из прозрачности.
2. Валидация формы перед отправкой на сервер - созданы две функции: валидация формы ввода имени, фамилии, отчества (файл validateForm.js); валидация вводимых контактов (файл valideContact.js), сообщения об ошибках выходят под формой и исчезают как только пользователь начинает изменять данные в инпуте.
3. Индикация загрузки (файл preloader.js, preloader.css).
4. Поиск с автодополнением - почти получилось, под инпутом появляется список элементов с одинаковыми символами.