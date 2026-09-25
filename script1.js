(function(){
  "use strict";

  // ---------------- QUESTION BANK ----------------
  // type: "trivia" (обычная эрудиция) или "absurd" (брейнрот-юмор)
  const BANK = [
    {q:"Столица Франции?", opts:["Берлин","Париж","Мадрид","Рим"], a:1, cat:"geo", diff:1, type:"K"},
    {q:"Столица Японии?", opts:["Пекин","Сеул","Токио","Бангкок"], a:2, cat:"geo", diff:1, type:"K"},
    {q:"Столица Италии?", opts:["Рим","Милан","Венеция","Неаполь"], a:0, cat:"geo", diff:1, type:"K"},
    {q:"Столица Германии?", opts:["Мюнхен","Берлин","Гамбург","Кёльн"], a:1, cat:"geo", diff:1, type:"K"},
    {q:"Столица Великобритании?", opts:["Манчестер","Ливерпуль","Лондон","Эдинбург"], a:2, cat:"geo", diff:1, type:"K"},
    {q:"Столица США?", opts:["Нью-Йорк","Вашингтон","Лос-Анджелес","Чикаго"], a:1, cat:"geo", diff:2, type:"T"},
    {q:"Столица Египта?", opts:["Каир","Александрия","Луксор","Гиза"], a:0, cat:"geo", diff:1, type:"K"},
    {q:"Столица Канады?", opts:["Торонто","Ванкувер","Оттава","Монреаль"], a:2, cat:"geo", diff:2, type:"T"},
    {q:"Столица Австралии?", opts:["Сидней","Мельбурн","Канберра","Перт"], a:2, cat:"geo", diff:2, type:"T"},
    {q:"Столица Бразилии?", opts:["Рио-де-Жанейро","Сан-Паулу","Бразилиа","Сальвадор"], a:2, cat:"geo", diff:2, type:"T"},
    {q:"Самая большая пустыня в мире?", opts:["Сахара","Гоби","Антарктида","Каракум"], a:2, cat:"geo", diff:3, type:"T"},
    {q:"Какая река официально считается самой длинной в мире (по данным Книги рекордов Гиннесса)?", opts:["Амазонка","Нил","Волга","Янцзы"], a:1, cat:"geo", diff:3, type:"T"},
    {q:"Самая высокая гора в мире?", opts:["Килиманджаро","К2","Эверест","Эльбрус"], a:2, cat:"geo", diff:1, type:"K"},
    {q:"Самый большой океан?", opts:["Атлантический","Индийский","Северный Ледовитый","Тихий"], a:3, cat:"geo", diff:1, type:"K"},
    {q:"В какой стране находится Эйфелева башня?", opts:["Италия","Франция","Испания","Германия"], a:1, cat:"geo", diff:1, type:"K"},
    {q:"На каком континенте находится Египет?", opts:["Азия","Африка","Европа","Австралия"], a:1, cat:"geo", diff:1, type:"K"},
    {q:"Самая маленькая страна в мире?", opts:["Монако","Ватикан","Сан-Марино","Лихтенштейн"], a:1, cat:"geo", diff:3, type:"T"},
    {q:"Какая страна самая большая по площади в мире?", opts:["Канада","Китай","США","Россия"], a:3, cat:"geo", diff:1, type:"K"},
    {q:"В какой стране придумали суши?", opts:["Китай","Корея","Таиланд","Япония"], a:3, cat:"geo", diff:1, type:"K"},
    {q:"Какая река полноводнее всех остальных в мире (по объёму стока)?", opts:["Амазонка","Нил","Миссисипи","Янцзы"], a:0, cat:"geo", diff:2, type:"T"},
    {q:"Сколько ног у паука?", opts:["6","8","10","4"], a:1, cat:"animals", diff:1, type:"K"},
    {q:"Кот в падении почти всегда приземляется на...", opts:["Спину","Бок","Лапы","Голову"], a:2, cat:"animals", diff:1, type:"U"},
    {q:"Какого цвета кровь у краба?", opts:["Красная","Зелёная","Голубая","Жёлтая"], a:2, cat:"animals", diff:2, type:"T"},
    {q:"Самое большое животное на Земле?", opts:["Слон","Синий кит","Жираф","Белая акула"], a:1, cat:"animals", diff:1, type:"K"},
    {q:"Какое из этих животных спит стоя?", opts:["Кот","Лошадь","Собака","Свинья"], a:1, cat:"animals", diff:2, type:"K"},
    {q:"Самое быстрое сухопутное животное?", opts:["Лев","Гепард","Лошадь","Антилопа"], a:1, cat:"animals", diff:1, type:"K"},
    {q:"Какое животное самое высокое в мире?", opts:["Слон","Верблюд","Жираф","Лось"], a:2, cat:"animals", diff:1, type:"K"},
    {q:"У какого животного самая долгая беременность?", opts:["Кит","Слон","Жираф","Носорог"], a:1, cat:"animals", diff:2, type:"K"},
    {q:"Какая птица не умеет летать, зато быстро бегает?", opts:["Орёл","Страус","Сокол","Попугай"], a:1, cat:"animals", diff:1, type:"K"},
    {q:"Сколько сердец у дождевого червя примерно?", opts:["1","3","5 пар","Нет сердца"], a:2, cat:"animals", diff:3, type:"T"},
    {q:"Какой из этих зверей откладывает яйца вместо того, чтобы рожать детёнышей?", opts:["Утконос","Кит","Дельфин","Ёж"], a:0, cat:"animals", diff:1, type:"K"},
    {q:"Какой хищник самый крупный на суше?", opts:["Лев","Тигр","Белый медведь","Волк"], a:2, cat:"animals", diff:3, type:"T"},
    {q:"Сколько желудков у коровы?", opts:["1","2","3","4"], a:3, cat:"animals", diff:2, type:"K"},
    {q:"Какая рыба может надуваться шаром при опасности?", opts:["Акула","Скат","Рыба-фугу","Тунец"], a:2, cat:"animals", diff:1, type:"K"},
    {q:"У какого животного отпечаток носа уникален, как у человека отпечаток пальца?", opts:["Кот","Собака","Лошадь","Слон"], a:1, cat:"animals", diff:3, type:"T"},
    {q:"Какое животное никогда не спит по-настоящему (полушария мозга спят по очереди)?", opts:["Кот","Дельфин","Слон","Панда"], a:1, cat:"animals", diff:3, type:"T"},
    {q:"Сколько лап у осьминога принято называть 'ногами'?", opts:["6","8","10","4"], a:1, cat:"animals", diff:1, type:"K"},
    {q:"Какой из этих зверей — грызун?", opts:["Ёж","Бобёр","Крот","Летучая мышь"], a:1, cat:"animals", diff:2, type:"T"},
    {q:"Пчела теряет жало после укуса и...", opts:["Ничего не происходит","Погибает","Отращивает новое","Спит сутки"], a:1, cat:"animals", diff:2, type:"K"},
    {q:"Какое животное носит своих детёнышей в сумке?", opts:["Панда","Кенгуру","Тигр","Ёж"], a:1, cat:"animals", diff:1, type:"K"},
    {q:"Бутерброд маслом вниз падает...", opts:["Иногда","Почти всегда","Никогда","Только по вторникам"], a:1, cat:"logic", diff:1, type:"U"},
    {q:"Если два кота одновременно прыгнут и приземлятся на лапы, то...", opts:["Ничья","Вселенная в замешательстве, но справится","Один обязательно упадёт","Оба зависнут в воздухе"], a:1, cat:"logic", diff:2, type:"U"},
    {q:"Три из этих фактов — правда, один придуман. Какой?", opts:["Мёд не портится","У жирафа язык тёмно-синего цвета","Бананы — ягоды с точки зрения ботаники","Голуби умеют считать до 40"], a:3, cat:"logic", diff:3, type:"T"},
    {q:"Бесконечность разделить на 2 — это...", opts:["0","1","Бесконечность","Ошибка вселенной"], a:2, cat:"logic", diff:2, type:"U"},
    {q:"Что из этого НЕ настоящий брейнрот-персонаж?", opts:["Tung Tung Tung Sahur","Bombardiro Crocodilo","Ping Pong Panini","Ballerina Cappuccina"], a:2, cat:"logic", diff:3, type:"U"},
    {q:"Если курица перешла дорогу, то она...", opts:["Опоздала на автобус","Хотела попасть на другую сторону","Испугалась машины","Заблудилась"], a:1, cat:"logic", diff:1, type:"U"},
    {q:"Сколько будет 0 в степени 0 по мнению интернета?", opts:["0","1","Ошибка","Бесконечность"], a:1, cat:"logic", diff:3, type:"T"},
    {q:"Что тяжелее — килограмм пуха или килограмм гвоздей?", opts:["Пух","Гвозди","Одинаково","Смотря какие гвозди"], a:2, cat:"logic", diff:1, type:"T"},
    {q:"Если ты уронил бутерброд на пол за 3 секунды, он...", opts:["Ещё съедобен по правилу 5 секунд","Уже испорчен","Стал невидимым","Обиделся"], a:0, cat:"logic", diff:1, type:"U"},
    {q:"Правильный порядок действий: сначала думать, потом...", opts:["Говорить","Есть","Спать","Всё сразу"], a:0, cat:"logic", diff:2, type:"U"},
    {q:"Что произойдёт, если рыбу вынуть из воды и спросить её мнение?", opts:["Она согласится","Она промолчит","Она поплывёт","Ничего, рыбы не разговаривают"], a:1, cat:"logic", diff:2, type:"U"},
    {q:"Самый эффективный способ разбудить будильником — это...", opts:["Поставить один будильник","Поставить 10 будильников","Не спать вообще","Попросить кота"], a:1, cat:"logic", diff:2, type:"U"},
    {q:"Понедельник придумали, чтобы...", opts:["Все радовались","Проверить силу воли","Начать неделю","Никто не знает"], a:3, cat:"logic", diff:2, type:"U"},
    {q:"Самое частое, что скрывается на дне холодильника?", opts:["Забытая еда непонятного возраста","Пустая банка, которую забыли выбросить","То, что лучше не открывать","Всё вышеперечисленное"], a:3, cat:"vibes", diff:2, type:"U"},
    {q:"2 + 2 × 2 = ?", opts:["8","6","4","10"], a:1, cat:"math", diff:2, type:"T"},
    {q:"9 × 9 = ?", opts:["81","72","99","91"], a:0, cat:"math", diff:1, type:"K"},
    {q:"Сколько будет 100 / 4?", opts:["20","25","30","40"], a:1, cat:"math", diff:1, type:"K"},
    {q:"Сколько дней в високосном году?", opts:["364","365","366","367"], a:2, cat:"math", diff:1, type:"K"},
    {q:"Сколько минут в сутках?", opts:["1000","1200","1440","1500"], a:2, cat:"math", diff:2, type:"K"},
    {q:"Сколько сторон у шестиугольника?", opts:["5","6","7","8"], a:1, cat:"math", diff:1, type:"K"},
    {q:"Сколько нулей в числе миллион?", opts:["4","5","6","7"], a:2, cat:"math", diff:2, type:"K"},
    {q:"7 × 8 = ?", opts:["54","56","58","64"], a:1, cat:"math", diff:1, type:"K"},
    {q:"Половина от половины ста — это...", opts:["25","50","20","10"], a:0, cat:"math", diff:2, type:"T"},
    {q:"Сколько градусов в прямом угле?", opts:["45","90","180","360"], a:1, cat:"math", diff:1, type:"K"},
    {q:"Сколько костей в скелете взрослого человека?", opts:["206","201","215","198"], a:0, cat:"science", diff:3, type:"T"},
    {q:"Какой орган качает кровь по телу?", opts:["Печень","Сердце","Почка","Лёгкое"], a:1, cat:"science", diff:1, type:"K"},
    {q:"Какая планета ближе всего к Солнцу?", opts:["Венера","Меркурий","Земля","Марс"], a:1, cat:"science", diff:1, type:"K"},
    {q:"Сколько планет в Солнечной системе?", opts:["7","8","9","10"], a:1, cat:"science", diff:2, type:"T"},
    {q:"Какой газ нужен человеку для дыхания?", opts:["Углекислый газ","Азот","Кислород","Водород"], a:2, cat:"science", diff:1, type:"K"},
    {q:"Вода закипает при... по Цельсию", opts:["50°","90°","100°","150°"], a:2, cat:"science", diff:1, type:"K"},
    {q:"Сколько цветов принято выделять в радуге?", opts:["5","6","7","9"], a:2, cat:"science", diff:1, type:"K"},
    {q:"Какая часть тела человека растёт всю жизнь?", opts:["Нос и уши","Руки","Ноги","Голова"], a:0, cat:"science", diff:2, type:"T"},
    {q:"Что из этого — не настоящее состояние вещества?", opts:["Твёрдое","Жидкое","Газообразное","Мягкое"], a:3, cat:"science", diff:1, type:"T"},
    {q:"Луна — это...", opts:["Планета","Звезда","Спутник Земли","Комета"], a:2, cat:"science", diff:1, type:"K"},
    {q:"Молния сначала видна, а гром слышен позже, потому что...", opts:["Гром медленнее","Свет быстрее звука","Молния громче","Это иллюзия"], a:1, cat:"science", diff:1, type:"K"},
    {q:"Какой из этих металлов жидкий при комнатной температуре?", opts:["Железо","Ртуть","Золото","Алюминий"], a:1, cat:"science", diff:2, type:"K"},
    {q:"Из чего делают оливковое масло?", opts:["Из оливок","Из подсолнуха","Из орехов","Из авокадо"], a:0, cat:"food", diff:1, type:"K"},
    {q:"Мёд может храниться...", opts:["Неделю","Месяц","Год","Практически вечно"], a:3, cat:"food", diff:2, type:"K"},
    {q:"Какой из этих продуктов технически является ягодой?", opts:["Клубника","Банан","Малина","Ежевика"], a:1, cat:"food", diff:3, type:"T"},
    {q:"Из чего в основном делают шоколад?", opts:["Кофе","Какао-бобы","Ваниль","Орехи"], a:1, cat:"food", diff:1, type:"K"},
    {q:"Сыр получают из...", opts:["Молока","Яиц","Муки","Мёда"], a:0, cat:"food", diff:1, type:"K"},
    {q:"Какой напиток получают из ферментированного винограда?", opts:["Сок","Пиво","Вино","Компот"], a:2, cat:"food", diff:1, type:"K"},
    {q:"Родина пасты и пиццы?", opts:["Испания","Франция","Италия","Греция"], a:2, cat:"food", diff:1, type:"K"},
    {q:"Острота перца измеряется в...", opts:["Градусах","Единицах Сковилла","Литрах","Килограммах"], a:1, cat:"food", diff:2, type:"K"},
    {q:"Сколько букв в русском алфавите?", opts:["30","31","33","35"], a:2, cat:"knowledge", diff:2, type:"K"},
    {q:"Какая буква в русском алфавите идёт последней?", opts:["Э","Ю","Я","Ё"], a:2, cat:"knowledge", diff:1, type:"K"},
    {q:"Слово 'палиндром' означает текст, который...", opts:["Рифмуется","Читается одинаково в обе стороны","Написан задом наперёд","Не имеет смысла"], a:1, cat:"knowledge", diff:1, type:"K"},
    {q:"Сколько падежей в русском языке?", opts:["4","5","6","7"], a:2, cat:"knowledge", diff:1, type:"K"},
    {q:"Кто написал 'Войну и мир'?", opts:["Достоевский","Толстой","Чехов","Пушкин"], a:1, cat:"knowledge", diff:1, type:"K"},
    {q:"В каком веке жил Пётр Первый?", opts:["16-17 век","17-18 век","18-19 век","19-20 век"], a:1, cat:"knowledge", diff:3, type:"K"},
    {q:"Какой предмет, по легенде, упал на голову Ньютону?", opts:["Кокос","Яблоко","Камень","Груша"], a:1, cat:"knowledge", diff:1, type:"K"},
    {q:"Кто первым полетел в космос?", opts:["Нил Армстронг","Юрий Гагарин","Валентина Терешкова","Герман Титов"], a:1, cat:"knowledge", diff:1, type:"K"},
    {q:"Великая Китайская стена находится в...", opts:["Японии","Корее","Китае","Монголии"], a:2, cat:"knowledge", diff:1, type:"K"},
    {q:"Что произойдёт, если бесконечное число обезьян будет печатать бесконечно долго?", opts:["Ничего","В теории — напечатают Шекспира","Сломают клавиатуры","Устанут"], a:1, cat:"logic", diff:2, type:"U"},
    {q:"Самая частая причина спора в семье про пульт от телевизора — это...", opts:["Громкость","Канал","Кто его теряет","Всё сразу"], a:3, cat:"vibes", diff:2, type:"U"},
    {q:"Если кот сидит в коробке, то он...", opts:["Прячется","Считает себя невидимым","Охраняет территорию","Всё сразу"], a:3, cat:"vibes", diff:2, type:"U"},
    {q:"Самый страшный звук для взрослого человека?", opts:["Будильник","Скрип двери ночью","Уведомление о списании денег","Крик ребёнка"], a:2, cat:"logic", diff:2, type:"U"},
    {q:"Wi-Fi пропадает чаще всего...", opts:["Когда он не нужен","В самый нужный момент","Ночью","Никогда"], a:1, cat:"vibes", diff:2, type:"U"},
    {q:"Что происходит с носком в стиральной машине?", opts:["Ничего","Он теряется в другом измерении","Линяет","Растягивается"], a:1, cat:"vibes", diff:2, type:"U"},
    {q:"Идеальное число будильников перед важным утром?", opts:["1","3","7","Столько, что сам не проснёшься от их количества"], a:3, cat:"vibes", diff:2, type:"U"},
    {q:"Самая частая мысль в 3 часа ночи?", opts:["Всё под контролем","А помню ли я тот неловкий момент 10 лет назад","Пора спать","Хочу есть"], a:1, cat:"logic", diff:2, type:"U"},
    {q:"Что будет, если налить газировку в мороженое?", opts:["Ничего","Получится поплавок (float)","Оно растает мгновенно","Взрыв"], a:1, cat:"logic", diff:2, type:"U"},
    {q:"Голубь на площади смотрит на тебя, потому что...", opts:["Хочет еды","Замышляет план","Ему скучно","Никто не знает — это голубь"], a:3, cat:"vibes", diff:2, type:"U"},
    {q:"В какой стране находится Тадж-Махал?", opts:["Пакистан","Индия","Непал","Бангладеш"], a:1, cat:"geo", diff:1, type:"K"},
    {q:"Какая страна известна как Страна восходящего солнца?", opts:["Китай","Корея","Япония","Таиланд"], a:2, cat:"geo", diff:1, type:"K"},
    {q:"В какой стране находится Колизей?", opts:["Греция","Италия","Испания","Турция"], a:1, cat:"geo", diff:1, type:"K"},
    {q:"Какое из этих морей самое солёное?", opts:["Красное море","Мёртвое море","Чёрное море","Каспийское море"], a:1, cat:"geo", diff:2, type:"K"},
    {q:"Какая река протекает через Египет?", opts:["Тигр","Евфрат","Нил","Иордан"], a:2, cat:"geo", diff:1, type:"K"},
    {q:"Какое животное является символом Австралии наряду с кенгуру?", opts:["Панда","Коала","Ленивец","Лев"], a:1, cat:"animals", diff:1, type:"K"},
    {q:"Сколько материков на Земле принято выделять?", opts:["5","6","7","8"], a:2, cat:"geo", diff:1, type:"K"},
    {q:"Самое глубокое место в океане называется...", opts:["Марианская впадина","Бермудский треугольник","Атлантический разлом","Тихая впадина"], a:0, cat:"geo", diff:2, type:"K"},
    {q:"Какой из этих городов находится не в Европе?", opts:["Париж","Токио","Берлин","Рим"], a:1, cat:"geo", diff:1, type:"K"},
    {q:"Панда родом из...", opts:["Индии","Китая","Японии","Таиланда"], a:1, cat:"animals", diff:1, type:"K"},

    // ---- РЕБАЛАНС: юмор/абсурд (type:"U"), добавлено чтобы сдвинуть тон банка ----
    {q:"Самая частая причина того, что телефон разрядился к вечеру?", opts:["Игры","Соцсети","Никто не знает — он просто разряжается","Звонки"], a:2, cat:"vibes", diff:1, type:"U"},
    {q:"Что делает кот, когда роняет предмет со стола?", opts:["Извиняется","Смотрит на тебя, роняет второй","Поднимает обратно","Убегает"], a:1, cat:"animals", diff:1, type:"U"},
    {q:"Что реально происходит с планами на выходные к воскресному вечеру?", opts:["Всё выполнено по расписанию","Половина отложена на 'потом'","Не начинались вообще","И отложены, и не начинались"], a:3, cat:"vibes", diff:1, type:"U"},
    {q:"Что первое делает человек, увидев свою фотографию?", opts:["Хвалит себя","Требует удалить","Ставит на аву","Не замечает"], a:1, cat:"vibes", diff:1, type:"U"},
    {q:"Самое сложное решение в супермаркете?", opts:["Что купить на ужин","В какую кассу встать","Брать пакет или нет","Всё сразу"], a:3, cat:"vibes", diff:1, type:"U"},
    {q:"Пульт от телевизора теряется чаще всего...", opts:["В сумке","Между диванных подушек","На видном месте","В холодильнике"], a:1, cat:"vibes", diff:1, type:"U"},
    {q:"Что происходит, если сказать 'я быстро отвечу' в чате?", opts:["Отвечаешь сразу","Отвечаешь через 3 дня","Забываешь совсем","Отвечаешь голосовым на 10 минут"], a:1, cat:"vibes", diff:1, type:"U"},
    {q:"Самый честный способ узнать, что будильник прозвенел зря?", opts:["Проснуться бодрым","Нажать 'ещё 5 минут' десять раз","Встать сразу","Выключить и уснуть дальше"], a:1, cat:"vibes", diff:1, type:"U"},
    {q:"Что говорит кот, когда ему нечего сказать?", opts:["Мяу","Молчит и смотрит осуждающе","Мурчит","Убегает"], a:1, cat:"animals", diff:1, type:"U"},
    {q:"Самая частая причина не пойти на тренировку?", opts:["Погода","Работа","Просто не хочется","Все причины сразу"], a:3, cat:"vibes", diff:1, type:"U"},
    {q:"Что происходит с планами на 'встать пораньше'?", opts:["Выполняются","Переносятся на завтра, потом ещё раз","Забываются мгновенно","Работают идеально"], a:1, cat:"logic", diff:1, type:"U"},
    {q:"Идеальная реакция на вопрос 'как дела?'", opts:["Подробный рассказ","Нормально","Молчание","Встречный вопрос"], a:1, cat:"logic", diff:1, type:"U"},
    {q:"Что делает человек, когда роняет телефон экраном вниз?", opts:["Спокойно поднимает","Замирает и молится","Смеётся","Не замечает"], a:1, cat:"vibes", diff:1, type:"U"},
    {q:"Самая правдоподобная причина опоздания?", opts:["Пробки","Будильник не прозвенел","Не мог выбрать, что надеть","Всё вышеперечисленное"], a:3, cat:"vibes", diff:1, type:"U"},
    {q:"Что чувствует человек, когда в очереди выбирает не ту кассу?", opts:["Спокойствие","Немедленное сожаление","Радость","Ничего"], a:1, cat:"vibes", diff:1, type:"U"},
    {q:"Самый популярный вид спорта в новогоднюю ночь?", opts:["Бег","Поиск пульта","Сон на диване","Танцы"], a:2, cat:"logic", diff:1, type:"U"},
    {q:"Что происходит с зарядкой от телефона в доме?", opts:["Всегда на месте","Пропадает именно тогда, когда нужна","Их слишком много","Никогда не теряется"], a:1, cat:"vibes", diff:1, type:"U"},
    {q:"Идеальный ответ на 'ты спишь?' в 2 часа ночи?", opts:["Да","Уже нет","Тишина","Звонок в ответ"], a:2, cat:"logic", diff:1, type:"U"},
    {q:"Что делает собака, услышав слово 'гулять'?", opts:["Игнорирует","Мгновенно активируется","Засыпает","Лает один раз"], a:1, cat:"animals", diff:1, type:"U"},
    {q:"Самая частая мысль перед экзаменом/дедлайном?", opts:["Я готов","Зачем я всё оставил на последний день","Мне всё равно","Я выучил всё заранее"], a:1, cat:"vibes", diff:1, type:"U"},
    {q:"Что почти всегда происходит с новогодними обещаниями к февралю?", opts:["Выполняются","Забываются","Перевыполняются","Записываются заново"], a:1, cat:"logic", diff:1, type:"U"},
    {q:"Что делает человек, роняя еду в общественном месте?", opts:["Спокойно поднимает","Быстро оглядывается, видел ли кто","Оставляет как есть","Извиняется перед едой"], a:1, cat:"logic", diff:1, type:"U"},
    {q:"Самая частая реакция на 'нам нужно поговорить'?", opts:["Спокойствие","Мгновенная паника","Радость","Безразличие"], a:1, cat:"logic", diff:1, type:"U"},
    {q:"Что происходит с песней, которую слышишь один раз утром?", opts:["Забывается сразу","Крутится в голове весь день","Не запоминается","Звучит только раз"], a:1, cat:"logic", diff:1, type:"U"},
    {q:"Идеальный момент, чтобы захотеть есть?", opts:["После обеда","Ровно когда лёг спать","Утром","Никогда"], a:1, cat:"food", diff:1, type:"U"},
    {q:"Что говорит кот в 5 утра под дверью спальни?", opts:["Ничего","Всё, что угодно, лишь бы разбудить","Тихо мурчит","Ждёт молча"], a:1, cat:"animals", diff:1, type:"U"},
    {q:"Самая частая причина не ответить на сообщение сразу?", opts:["Занят","Прочитал и забыл ответить","Не видел","Телефон разрядился"], a:1, cat:"vibes", diff:1, type:"U"},
    {q:"Что делает человек, когда видит своё старое фото из школы?", opts:["Гордится","Испытывает лёгкий испанский стыд","Не узнаёт себя","Ничего не чувствует"], a:1, cat:"logic", diff:1, type:"U"},
    {q:"Самый честный ответ на 'сколько ещё будешь собираться?'", opts:["5 минут","5 минут, которые = 30","Уже готов","Час"], a:1, cat:"logic", diff:1, type:"U"},
    {q:"Что происходит с наушниками в кармане за 30 секунд?", opts:["Остаются ровными","Превращаются в узел","Выпадают","Разряжаются"], a:1, cat:"vibes", diff:1, type:"U"},
    {q:"Идеальное количество вкладок в браузере?", opts:["1-2","Столько, что вентилятор ноутбука взлетает","0","10 максимум"], a:1, cat:"logic", diff:1, type:"U"},
    {q:"Что чувствует человек, у которого разрядился телефон на 1%?", opts:["Спокойствие","Лёгкую панику вслепую","Радость","Ничего"], a:1, cat:"vibes", diff:1, type:"U"},
    {q:"Самая частая мысль, стоя перед открытым холодильником?", opts:["Знаю, что хочу","Есть нечего, хотя еда есть","Не голоден","Всё аккуратно разложено"], a:1, cat:"food", diff:1, type:"U"},
    {q:"Что делает человек в лифте, когда заходит незнакомец?", opts:["Продолжает разговор","Смотрит на цифры этажей","Здоровается громко","Заводит беседу"], a:1, cat:"logic", diff:1, type:"U"},
    {q:"Самая частая причина не спать вовремя?", opts:["Работа","'Ещё 5 минут в телефоне'","Шум","Свет"], a:1, cat:"logic", diff:1, type:"U"},
    {q:"Что происходит, когда наконец находишь тихое место, чтобы поговорить по телефону?", opts:["Разговор идёт по плану","Собеседник тут же перестаёт отвечать","Звук пропадает","Шумно и там"], a:1, cat:"vibes", diff:1, type:"U"},
    {q:"Идеальная реакция на 'у меня для тебя сюрприз'?", opts:["Спокойное любопытство","Смесь радости и тревоги","Безразличие","Испуг"], a:1, cat:"logic", diff:1, type:"U"},
    {q:"Что делает собака, увидев, что ты собираешься уходить?", opts:["Игнорирует","Смотрит с максимальным укором","Спит дальше","Провожает молча"], a:1, cat:"animals", diff:1, type:"U"},
    {q:"Самая частая причина проверить телефон без уведомлений?", opts:["Привычка","Кажется, что что-то пропустил","Скука","Нет причины"], a:1, cat:"vibes", diff:1, type:"U"},
    {q:"Что происходит с будильником на выходные, если поставить его 'на всякий случай'?", opts:["Срабатывает как надо","Успешно выключается ещё в полусне и забывается","Не срабатывает","Звонит громче обычного"], a:1, cat:"vibes", diff:1, type:"U"},

    {q:"Если бесконечное число котов сядет в коробки, то...", opts:["Коробки закончатся","Вселенная одобрит", "Коты передерутся","Ничего не изменится"], a:1, cat:"logic", diff:2, type:"U"},
    {q:"Почему автобус приходит сразу, как только ты опоздал на него?", opts:["Совпадение","Закон подлости","Расписание сбилось","Водитель торопится"], a:1, cat:"vibes", diff:2, type:"U"},
    {q:"Что произойдёт, если уронить телефон и он не разбился?", opts:["Ничего особенного","Ты чувствуешь себя избранным","Начинаешь бояться следующего раза","Забываешь через минуту"], a:1, cat:"vibes", diff:2, type:"U"},
    {q:"Самая частая причина спора с навигатором в машине?", opts:["Он всегда прав","Он ведёт короче, но дольше","Он не понимает голос","Он молчит"], a:1, cat:"logic", diff:2, type:"U"},
    {q:"Что происходит с едой на чужой тарелке?", opts:["Выглядит так же","Кажется вкуснее, чем своя","Кажется хуже","Не имеет значения"], a:1, cat:"logic", diff:2, type:"U"},
    {q:"Почему последний кусок пиццы в компании никто не берёт?", opts:["Все наелись","Никто не хочет показаться голодным","Пицца остыла","Её уже нет"], a:1, cat:"logic", diff:2, type:"U"},
    {q:"Что делает человек, когда его засняли на камеру без предупреждения?", opts:["Позирует","Замирает, будто это спасёт","Улыбается","Уходит из кадра заранее"], a:1, cat:"logic", diff:2, type:"U"},
    {q:"Самый частый повод для 'ещё одной серии' в час ночи?", opts:["Интересный сюжет","Просто 'ну ещё одну'","Бессонница","Скука"], a:1, cat:"logic", diff:2, type:"U"},
    {q:"Что происходит, когда набираешь 'ща' в переписке?", opts:["Отвечаешь сразу","Проходит минимум час","Забываешь про диалог","Отправляешь голосовое вместо этого"], a:1, cat:"vibes", diff:2, type:"U"},
    {q:"Почему заряд телефона на 20% ощущается как критический уровень?", opts:["Так и есть технически","Мозг паникует раньше батареи","Экран специально пугает","Это не так"], a:1, cat:"vibes", diff:2, type:"U"},
    {q:"Что общего у всех кабелей от наушников в кармане?", opts:["Ничего","Они запутываются сами по себе","Они всегда ровные","Их там нет"], a:1, cat:"vibes", diff:2, type:"U"},
    {q:"Самая частая причина, почему шутка не смешная в переписке?", opts:["Плохая шутка","Не хватает интонации и '😂'","Собеседник не в настроении","Все причины сразу"], a:3, cat:"vibes", diff:2, type:"U"},
    {q:"Что происходит с планами на диету после первого 'сегодня можно'?", opts:["Соблюдаются","План плавно откладывается","Ужесточаются","Ничего не меняется"], a:1, cat:"vibes", diff:2, type:"U"},
    {q:"Почему открытая вкладка с недосмотренным сериалом вызывает тревогу?", opts:["Не вызывает","Мозг требует завершения гештальта","Занимает память","Просто привычка"], a:1, cat:"vibes", diff:2, type:"U"},
    {q:"Что чувствует человек, набирающий номер и слышащий длинные гудки?", opts:["Спокойствие","Растущее напряжение с каждым гудком","Радость","Ничего особенного"], a:1, cat:"logic", diff:2, type:"U"},

    {q:"Какое из этих утверждений про понедельник ближе к истине?", opts:["Обычный день недели","Единственный день, который переносят силой воли","Лучший день недели","Никто не замечает понедельник"], a:1, cat:"vibes", diff:3, type:"U"},
    {q:"Если у бесконечной очереди в магазине спросить, кто крайний, то...", opts:["Ответит первый","Ответит кто-то, кто сам не уверен","Никто не ответит","Очередь исчезнет"], a:1, cat:"logic", diff:3, type:"U"},
    {q:"Парадокс полного холодильника и фразы 'есть нечего' объясняется тем, что...", opts:["Еда действительно кончилась","Хочется чего-то конкретного, а не 'что угодно'","Холодильник сломан","Это неправда, еда всегда есть"], a:1, cat:"logic", diff:3, type:"U"},
    {q:"Почему время до дедлайна течёт быстрее, чем обычное время?", opts:["Физически так и есть","Это субъективное восприятие под давлением","Часы врут","Дедлайны всегда близко"], a:1, cat:"vibes", diff:3, type:"U"},
    {q:"Закон Мёрфи гласит, что бутерброд с маслом при падении...", opts:["Всегда падает маслом вверх","С большей вероятностью падает маслом вниз","Не падает вообще","Зависит от бутерброда"], a:1, cat:"logic", diff:3, type:"U"},
    {q:"Почему очередь в соседней кассе всегда движется быстрее твоей?", opts:["Так и есть на самом деле всегда","Замечаешь только те случаи, когда это так","Кассиры сговорились","Совпадение каждый раз"], a:1, cat:"vibes", diff:3, type:"U"},
    {q:"Что из этого не является реальным законом/эффектом из психологии внимания?", opts:["Эффект Баадера-Майнхоф","Закон Мёрфи в быту", "Эффект прожектора","Закон трёх кликов до дедлайна"], a:3, cat:"logic", diff:3, type:"U"},
    {q:"Почему после покупки новой вещи её начинаешь видеть у всех вокруг?", opts:["Совпадение каждый раз","Мозг начинает замечать то, на что раньше не обращал внимания","Реклама преследует","Это неправда"], a:1, cat:"logic", diff:3, type:"U"},
    {q:"Правило 'ещё 5 минут' у будильника на практике означает...", opts:["Ровно 5 минут","Столько раз, сколько выдержит терпение","1 минуту","Будильник больше не звонит"], a:1, cat:"vibes", diff:3, type:"U"},
    {q:"Почему собранная своими руками мебель кажется ценнее такой же магазинной?", opts:["Она объективно лучше сделана","Эффект IKEA — своя работа кажется ценнее","Просто дороже обошлась","Разницы на самом деле нет"], a:1, cat:"vibes", diff:2, type:"U"},
    {q:"Почему таблетка-пустышка иногда реально снимает боль?", opts:["Врачи специально обманывают", "Эффект плацебо — мозг верит в лечение", "Это городская легенда", "Боль просто сама проходит всегда"], a:1, cat:"vibes", diff:2, type:"U"},
    {q:"Почему отпуск с одним неудачным последним днём запоминается хуже, даже если остальные дни были отличными?", opts:["Правило 'пика и конца' — концовка сильнее влияет на память","Плохой день просто длиннее","Мозг помнит только плохое","Все дни весят одинаково"], a:0, cat:"vibes", diff:3, type:"U"},
    {q:"Почему люди, которые знают меньше всего, часто говорят увереннее всех?", opts:["Эффект Даннинга-Крюгера","Они специально притворяются","Это редкое исключение","Совпадение каждый раз"], a:0, cat:"vibes", diff:2, type:"U"},
    {q:"Почему песня, которая сначала раздражала, после 10 прослушиваний начинает нравиться?", opts:["Эффект простого воздействия — мозг любит знакомое","Песня на самом деле меняется","Ты просто сдаёшься и смиряешься","Нравиться она не может, это неправда"], a:0, cat:"vibes", diff:2, type:"U"},
    {q:"Почему ты невольно зеваешь, просто увидев зевающего человека?", opts:["Заразительное зевание — отклик эмпатии в мозге","Совпадение по времени суток","Кислорода вокруг стало меньше","Это миф, такого не бывает"], a:0, cat:"vibes", diff:1, type:"U"},
    {q:"Почему список дел, кажущийся коротким утром, к вечеру не выполнен и наполовину?", opts:["Дел стало больше по ходу дня","Утренняя оценка времени всегда слишком оптимистична","Список был неправильно составлен","Так не бывает"], a:1, cat:"logic", diff:3, type:"U"}
  ];

  const TOTAL_Q = 15;
  const TIME_PER_Q = 6000; // ms
  const BASE_POINTS = 100;

  // ---------------- ТУПНЯК-РАУНДЫ (twist rounds) ----------------
  // Every 4th question in solo/daily mode is a rule-twist: game state
  // itself changes for one question, not just visuals.
  const TWIST_TYPES = {
    inverse: { emoji:"🙃", text:"ТУПНЯК-РАУНД", sub:"Жми НЕправильный ответ!", cls:"tw-inverse" },
    chaos:   { emoji:"🌀", text:"ХАОС-РАУНД",   sub:"Ответы сами поменяются местами...", cls:"tw-chaos" },
    speed:   { emoji:"⚡", text:"БЛИЦ-РАУНД",   sub:"Времени вдвое меньше, очков вдвое больше!", cls:"tw-speed" },
    bonus:   { emoji:"💎", text:"БОНУС-РАУНД",  sub:"Очков в 3 раза больше — но и промах стоит дороже!", cls:"tw-bonus" }
  };
  const TWIST_KEYS = Object.keys(TWIST_TYPES);
  // Score multiplier granted by each twist type on a correct answer (and used
  // symmetrically to scale the wager-loss penalty). Twists without an entry
  // here (inverse, chaos) don't change the point math, only the rules.
  const TWIST_SCORE_MULT = { speed:2, bonus:3 };

  // ---------------- НЕПРЕДСКАЗУЕМОСТЬ ТВИСТОВ (audit §5) ----------------
  // Twists no longer land on a fixed "every 4th question" schedule (players
  // learned to predict and pre-brace for that). Instead each question after
  // the first rolls an escalating chance to become a twist: the longer it's
  // been since the last one, the more likely the next one fires, with a hard
  // cap so a twist is guaranteed at least every 6 questions and never two
  // in a row. In Daily mode the whole plan is built from the same per-day
  // seed as the question order, so every player still faces twists on the
  // exact same questions — fairness for the leaderboard is preserved even
  // though the schedule looks random.
  function buildTwistPlan(rnd, total){
    const plan = new Array(total).fill(null).map(()=>({isTwist:false, type:null}));
    let sinceLast = 0;
    for(let i=1;i<total;i++){
      sinceLast += 1;
      if(sinceLast < 2) continue; // never two twists back to back
      const forced = sinceLast >= 6;
      const chance = 0.10 + (sinceLast-2)*0.12;
      if(forced || rnd() < chance){
        plan[i] = { isTwist:true, type: TWIST_KEYS[Math.floor(rnd()*TWIST_KEYS.length)] };
        sinceLast = 0;
      }
    }
    return plan;
  }

  // ---------------- СТАВКИ (риск перед вопросом) ----------------
  const WAGER_TYPES = {
    normal: { mult:1,   timeFactor:1,    penaltyFactor:0,   name:"ОБЫЧНО",  emoji:"😐" },
    risk:   { mult:2,   timeFactor:1,    penaltyFactor:0.5, name:"РИСК",    emoji:"😬" },
    idiot:  { mult:3,   timeFactor:0.75, penaltyFactor:1.5, name:"ТУПНЯК",  emoji:"🥔" }
  };
  // penaltyFactor: штраф за ошибку = penaltyFactor × «сколько дал бы ОБЫЧНЫЙ верный ответ
  // прямо сейчас» (с учётом текущего стрика и скорости). Три точки безубыточности по EV
  // (инвариантны к стрику/твисту/скорости — доказано и проверено):
  //   p>33% — РИСК становится выгоднее ОБЫЧНОГО
  //   p>43% — ТУПНЯК становится выгоднее ОБЫЧНОГО (но ещё проигрывает РИСКУ)
  //   p>50% — ТУПНЯК становится выгоднее и РИСКА тоже
  // Итоговый оптимальный выбор по зонам: <33% ОБЫЧНО, 33–50% РИСК, >50% ТУПНЯК.

  // ---------------- КРИНЖ-МЕТР (run-long accumulator, not streak-tied) ----------------
  // Redesigned per audit: Cringe used to just mirror the current answer
  // streak, so it fully wiped on every single wrong answer and a player could
  // basically never reach the top state. Now it's a persistent 0..100 meter
  // for the whole run: correct answers build it up (more if you're on a
  // streak or took a risky wager), a miss only knocks it back partially, and
  // it only truly zeroes out when a new game starts. Reaching 100 triggers a
  // one-time MAX CRINGE event, then decays (not resets) so it stays rare.
  const CRINGE_MAX = 100;
  const CRINGE_LEVELS = [
    {min:0,   cls:"",     label:"🧊"},
    {min:25,  cls:"lvl1", label:"😬"},
    {min:50,  cls:"lvl2", label:"😵‍💫"},
    {min:75,  cls:"lvl3", label:"🤯"},
    {min:100, cls:"lvl4", label:"💀"}
  ];

  // ---------------- STATE ----------------
  let state = {
    order: [],
    idx: 0,
    qToken: 0,
    score: 0,
    correctCount: 0,
    streak: 0,
    maxStreak: 0,
    timer: null,
    startTs: 0,
    locked: false,
    mode: "solo",
    twistType: null,
    timeLimit: TIME_PER_Q,
    cringeAccum: 0,
    cringeLevel: 0,
    chaosTimeout: null,
    wager: "normal",
    twistPlan: [],
    // per-run progression tracking, reset each startGame() (audit §4/§6)
    consecWrong: 0,
    hadDoubleWrongStreak: false,
    reachedCringeMax: false,
    idiotWagerCorrect: false,
    fastCorrect: false,
    categoryStats: {}
  };

  // ---------------- DOM ----------------
  const $ = (id)=>document.getElementById(id);
  const screens = {
    start: $("screen-start"),
    quiz: $("screen-quiz"),
    results: $("screen-results"),
    duel: $("screen-duel"),
    duelResults: $("screen-duel-results"),
    leaderboard: $("screen-leaderboard"),
    profile: $("screen-profile")
  };
  function showScreen(name){
    Object.values(screens).forEach(s=>s.classList.remove("active"));
    screens[name].classList.add("active");
    // Ambient loop only plays during active rounds (quiz/duel) — silent on
    // menus/results so it doesn't overstay its welcome (audit §13/§14).
    if(name==="quiz" || name==="duel") startMusic(); else stopMusic();
  }

  // ---------------- FULLSCREEN (requirement 1.6.1.1: mobile must launch or
  // play in fullscreen) ----------------
  // Fullscreen can only be requested from inside a direct user-gesture call
  // stack (no await before it), so this is called synchronously at the very
  // top of startGame()/startDuel() — both are themselves synchronous click
  // handlers. Desktop is left alone (req. 1.6.1 fullscreen rule is
  // mobile-only); ysdk.deviceInfo.type is authoritative when the SDK is
  // present, with a UA sniff fallback for local/dev testing without it.
  // Silently no-ops wherever the Fullscreen API isn't available (e.g. iOS
  // Safari on iPhone doesn't support it at all) — that's a platform
  // limitation, not something to surface as an error to the player.
  function isMobileDevice(){
    if(ysdk && ysdk.deviceInfo && ysdk.deviceInfo.type) return ysdk.deviceInfo.type === "mobile";
    return /Android|iPhone|iPod|Mobile/i.test(navigator.userAgent || "");
  }
  function requestFullscreenIfMobile(){
    if(!isMobileDevice()) return;
    // Already fullscreen (or the platform iframe doesn't expose a
    // fullscreenElement at all) — nothing to do. Otherwise retry on every
    // game/duel launch rather than giving up after one failed attempt: a
    // sandboxed iframe without the "fullscreen" permission, or the player
    // hitting Esc mid-round, are both real possibilities, and re-asking on
    // the next explicit "play" tap is a legitimate user gesture, not spam.
    if(document.fullscreenElement || document.webkitFullscreenElement) return;
    const el = document.documentElement;
    const req = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    if(typeof req !== "function") return;
    try{
      const p = req.call(el);
      if(p && typeof p.catch === "function") p.catch(()=>{}); // declined/unsupported — game still plays fine windowed
    }catch(e){ /* Fullscreen API present but call rejected synchronously — ignore */ }
  }

  // ---------------- STORAGE (Yandex cloud save with localStorage fallback) ----------------
  // Requirement 1.9 / 1.11 / 2.6: progress (best score) must persist via
  // player.setData/getData when running on the platform, and survive reload.
  // Falls back to localStorage automatically when the SDK isn't present
  // (e.g. local testing outside Yandex Games), so the prototype keeps working.
  let ysdk = null;
  let yaPlayer = null;
  let cachedBest = 0;
  let storageReady = false;
  let storageInitPromise = null;
  let localStorageKey = "tupnyak_progress";
  let localBestKey = "tupnyak_best";
  let playerUniqueId = null;
  let serverTimeOffsetMs = null;
  let gameReadySent = false;
  let gameStartInProgress = false;
  let duelStartInProgress = false;

  // Waits on the real script-load event (window.__yaSdkLoaded, set by the <script onload>
  // in <head>) instead of assuming the SDK tag already finished — it's async now, so it
  // may still be in flight when this runs. The interval+timeout pair is just a safety net
  // for edge cases (e.g. onload firing before this listener attaches); genuinely running
  // off-platform means /sdk.js 404s, YaGames never appears, and this times out harmlessly.
  function waitForYandexSdk(){
    if(typeof YaGames !== "undefined") return Promise.resolve(true);
    // When the archive is opened directly from disk (file://), there is no
    // Yandex Games host to provide /sdk.js. Do not make local QA wait 6 seconds
    // for a platform SDK that can never arrive: use the localStorage fallback
    // immediately. On Yandex Games itself /sdk.js is available and this branch
    // is never taken.
    if(location && location.protocol === "file:") return Promise.resolve(false);
    return new Promise(resolve=>{
      let done = false;
      const iv = setInterval(()=>{
        if(typeof YaGames !== "undefined"){ done = true; clearInterval(iv); clearTimeout(to); resolve(true); }
      }, 50);
      const to = setTimeout(()=>{ if(!done){ clearInterval(iv); resolve(typeof YaGames !== "undefined"); } }, 6000);
    });
  }

  async function getGameServerTime(){
    try{
      if(ysdk && typeof ysdk.serverTime === "function"){
        const t = await ysdk.serverTime();
        if(typeof t === "number" && Number.isFinite(t)){
          serverTimeOffsetMs = t - Date.now();
          return t;
        }
      }
    }catch(e){ console.warn("Yandex serverTime unavailable:", e); }
    return Date.now() + (serverTimeOffsetMs || 0);
  }

  function getGameNowMs(){
    return Date.now() + (serverTimeOffsetMs || 0);
  }

  // Refresh the Yandex server clock before every Daily-critical operation.
  // The offset is only a short-lived fallback between successful serverTime()
  // calls; it must never be treated as a permanent source of truth.
  async function refreshDailyClock(){
    if(ysdk && typeof ysdk.serverTime === "function") await getGameServerTime();
    return getGameNowMs();
  }

  async function initializeStorage(){
    if(storageInitPromise) return storageInitPromise;
    storageInitPromise = (async ()=>{
      if(yaPlayer){
        try{
          if(typeof yaPlayer.getUniqueID === "function"){
            playerUniqueId = await yaPlayer.getUniqueID();
          } else if(typeof yaPlayer.uniqueID === "string" && yaPlayer.uniqueID){
            playerUniqueId = yaPlayer.uniqueID;
          }
        }catch(e){ playerUniqueId = null; }
        if(playerUniqueId){
          localStorageKey = "tupnyak_progress_" + encodeURIComponent(playerUniqueId);
          localBestKey = "tupnyak_best_" + encodeURIComponent(playerUniqueId);
        }
      }
      // Refresh server-time offset once per app session. All Daily calculations
      // then use the offset-adjusted clock, so changing the device clock after
      // launch cannot silently move the player to another Daily.
      await getGameServerTime();
      await Promise.all([loadBest(), loadProgress()]);
      storageReady = true;
      return true;
    })().catch(e=>{
      console.warn("storage initialization failed:", e);
      // Local-only/offline mode must remain playable.
      try{ cachedBest = parseInt(localStorage.getItem(localBestKey)||"0",10) || 0; }catch(_){ cachedBest = 0; }
      progress = Object.assign(defaultProgress(), progress || {});
      storageReady = true;
      return false;
    });
    return storageInitPromise;
  }

  async function initYandexSDK(){
    const available = await waitForYandexSdk();
    if(!available){
      await initializeStorage();
      return;
    }
    try{
      ysdk = await YaGames.init();
      // Platform focus/ads/purchase pause events. The Yandex debug panel
      // Play button emulates these exact events, so the game timer must stop
      // here as well as on document.visibilitychange.
      if(ysdk && typeof ysdk.on === "function") {
        ysdk.on("game_api_pause", handleAppHidden);
        ysdk.on("game_api_resume", handleAppVisible);
      }
      yaPlayer = await ysdk.getPlayer({ scopes: false });
    }catch(e){
      console.warn("Yandex SDK/player init failed; continuing with SDK where possible and local save fallback:", e);
      // Keep a successfully initialized SDK available for ads/leaderboards,
      // even if getPlayer temporarily failed. Storage will use local fallback.
      yaPlayer = null;
    }

    await initializeStorage();

    // GameReady is sent only after the initial player/storage state is known
    // and the critical UI fonts had a chance to paint.
    try{
      if(document.fonts && document.fonts.ready){
        await Promise.race([document.fonts.ready, new Promise(r=>setTimeout(r, 800))]);
      }
    }catch(e){}
    if(ysdk && !gameReadySent){
      try{
        if(ysdk.features && ysdk.features.LoadingAPI && typeof ysdk.features.LoadingAPI.ready === "function"){
          // Current Yandex Games Game Ready API: call LoadingAPI.ready()
          // exactly when the main menu is ready for interaction.
          ysdk.features.LoadingAPI.ready();
          gameReadySent = true;
        }
      }catch(e){ console.warn("GameReady signal failed:", e); }
    }
  }

  // ---------------- MONETIZATION: interstitial ads (audit §19) ----------------
  // No-op outside Yandex Games (ysdk stays null there). Shown after every
  // 2nd finished round (solo/daily/duel) rather than every single one, so it
  // doesn't punish players for trying the game once. Ads are paused/muted
  // automatically by the existing visibilitychange handler while the ad is
  // fullscreen (see handleAppHidden/handleAppVisible above).
  let roundsSinceAd = 0;
  function maybeShowInterstitial(){
    if(!ysdk || !ysdk.adv || typeof ysdk.adv.showFullscreenAdv !== "function") return;
    roundsSinceAd += 1;
    if(roundsSinceAd < 2) return;
    roundsSinceAd = 0;
    ysdk.adv.showFullscreenAdv({
      callbacks: {
        onOpen: ()=>{ handleAppHidden(); },
        onClose: ()=>{ handleAppVisible(); },
        onError: (e)=>{ console.warn("interstitial ad error:", e); handleAppVisible(); }
      }
    });
  }

  // ---------------- MONETIZATION: optional rewarded ad (audit §11) ----------------
  // Entirely opt-in, entirely non-competitive: watching it grants +50% XP on
  // the very next completed run (Solo/Daily/Duel), never extra score, never
  // an edge over other players on the Daily leaderboard. No forced ad, no
  // pay-to-win — the player only sees this if they tap it themselves.
  let xpBoostActive = false;
  // QA fix (BUG-06): the boost used to live only in this in-memory flag, so
  // a reload between watching the ad and finishing the next game silently
  // wiped it. It's now mirrored into progress.xpBoost (persisted the same
  // way as everything else in `progress`) with an expiry timestamp — so it
  // survives a reload, but can't be a forever-boost either: a stale record
  // past its expiry is treated as inactive and cleared, and syncXpBoostFromProgress()
  // (called once on load, never on a timer) is the only thing that re-derives
  // xpBoostActive from storage — nothing re-grants it on repeated loads.
  const XP_BOOST_DURATION_MS = 24*60*60*1000; // 24h to actually play the "next game" — not forever
  function isXpBoostRecordValid(b){
    return !!b && typeof b.expiresAt === "number" && b.expiresAt > Date.now();
  }
  function syncXpBoostFromProgress(){
    xpBoostActive = isXpBoostRecordValid(progress.xpBoost);
    if(progress.xpBoost && !xpBoostActive) progress.xpBoost = null; // stale — drop it from the save
    updateRewardAdBtn();
  }
  function updateRewardAdBtn(){
    const btn = $("btn-reward-ad");
    btn.classList.toggle("active", xpBoostActive);
    btn.textContent = xpBoostActive ? "✨ +50% XP АКТИВНО НА СЛЕДУЮЩУЮ ИГРУ" : "🎬 РЕКЛАМА → +50% XP НА ИГРУ";
  }
  function showRewardedXpBoost(){
    if(xpBoostActive){ showToast("Буст уже активен — сыграй игру, чтобы получить +50% XP!"); return; }
    if(!ysdk || !ysdk.adv || typeof ysdk.adv.showRewardedVideo !== "function"){
      showToast("Реклама за бонус доступна только в игре на платформе Яндекс Игр.");
      return;
    }
    ysdk.adv.showRewardedVideo({
      callbacks: {
        onOpen: ()=>{ handleAppHidden(); },
        onRewarded: ()=>{
          progress.xpBoost = { expiresAt: Date.now() + XP_BOOST_DURATION_MS };
          xpBoostActive = true;
          persistProgress();
          updateRewardAdBtn();
          showToast("+50% XP активировано на следующую игру! 🎬✨");
        },
        onClose: ()=>{ handleAppVisible(); },
        onError: (e)=>{ console.warn("rewarded ad error:", e); handleAppVisible(); }
      }
    });
  }
  // Consumes the boost (if any) and returns the (possibly boosted) XP amount.
  function applyXpBoost(amount){
    if(!xpBoostActive) return amount;
    xpBoostActive = false;
    progress.xpBoost = null; // persisted by the persistProgress() call that already follows every applyXpBoost() call site
    updateRewardAdBtn();
    return Math.round(amount * 1.5);
  }

  async function loadBest(){
    if(yaPlayer){
      try{
        const data = await yaPlayer.getData(["best"]);
        // Successful cloud read + missing key means a new cloud profile.
        // Do not import another user's/stale browser local value.
        cachedBest = Number.isFinite(Number(data && data.best)) ? Number(data.best) : 0;
        return;
      }catch(e){ console.warn("cloud getData failed, falling back:", e); }
    }
    try{ cachedBest = parseInt(localStorage.getItem(localBestKey)||"0",10) || 0; }catch(e){ cachedBest = 0; }
  }

  let bestSaveQueue = Promise.resolve();
  function persistBest(v){
    cachedBest = Math.max(0, Math.round(Number(v) || 0));
    try{ localStorage.setItem(localBestKey, String(cachedBest)); }catch(e){}
    if(yaPlayer){
      bestSaveQueue = bestSaveQueue.catch(()=>{}).then(async ()=>{
        try{ await yaPlayer.setData({best:cachedBest}, true); }
        catch(e){ console.warn("cloud setData failed:", e); }
      });
    }
  }

  function renderBest(){
    $("bestPill").textContent = cachedBest>0 ? ("Лучший счёт: "+cachedBest) : "Лучший счёт: —";
  }

  // ---------------- PROGRESSION (XP / ranks / achievements / stats) ----------------
  const PROGRESS_KEY = "progress";
  function defaultProgress(){
    return {
      xp: 0,
      totalGames: 0,
      totalDuelWins: 0,
      totalDuels: 0,
      bestStreakEver: 0,
      totalAnswered: 0,
      totalCorrect: 0,
      totalTimedMs: 0,
      totalTimedCount: 0,
      catStats: {},
      achievements: {},
      recentQIdx: [],
      xpBoost: null,
      dailyPlayedKey: null
    };
  }
  async function loadProgress(){
    let raw = null;
    if(yaPlayer){
      try{
        const data = await yaPlayer.getData([PROGRESS_KEY]);
        raw = data && data[PROGRESS_KEY] ? data[PROGRESS_KEY] : null;
        // Successful cloud read + missing key = genuinely new account data.
        // Only use localStorage when the cloud request itself failed.
      }catch(e){
        console.warn("cloud progress load failed, falling back:", e);
        try{ raw = JSON.parse(localStorage.getItem(localStorageKey)||"null"); }catch(_){ raw = null; }
      }
    } else {
      try{ raw = JSON.parse(localStorage.getItem(localStorageKey)||"null"); }catch(e){ raw = null; }
    }
    progress = Object.assign(defaultProgress(), raw||{});
    progress.catStats = progress.catStats || {};
    progress.achievements = progress.achievements || {};
    progress.recentQIdx = Array.isArray(progress.recentQIdx) ? progress.recentQIdx : [];
    progress.dailyPlayedKey = typeof progress.dailyPlayedKey === "string" ? progress.dailyPlayedKey : null;
  }

  let progressSaveQueue = Promise.resolve();
  function persistProgressInternal(snapshot){
    const data = snapshot || progress;
    if(yaPlayer){
      return yaPlayer.setData({[PROGRESS_KEY]: data}, true).catch(e=>{
        console.warn("cloud progress save failed:", e);
      });
    }
    return Promise.resolve();
  }

  function persistProgress(){
    const snapshot = JSON.parse(JSON.stringify(progress));
    try{ localStorage.setItem(localStorageKey, JSON.stringify(snapshot)); }catch(e){}
    if(yaPlayer){
      progressSaveQueue = progressSaveQueue
        .catch(()=>{})
        .then(()=>persistProgressInternal(snapshot));
    }
    return progressSaveQueue;
  }


  // QA fix (BUG-05): category/answer progress used to only reach storage at
  // endGame() — a reload, crash, or the player just backing out mid-round
  // silently lost every answer from that run. trackCategoryAnswer() now
  // schedules a save after every confirmed answer, but debounced (not one
  // save per keystroke) so a fast run doesn't hammer localStorage/cloud
  // save dozens of times. flushProgressSave() lets handleAppHidden() and
  // beforeunload force the pending save through immediately instead of
  // losing it to a cancelled timer when the tab actually closes.
  let progressSaveTimer = null;
  function schedulePersistProgress(){
    if(progressSaveTimer) clearTimeout(progressSaveTimer);
    progressSaveTimer = setTimeout(()=>{
      progressSaveTimer = null;
      persistProgress();
    }, 800);
  }
  function flushProgressSave(){
    if(progressSaveTimer){
      clearTimeout(progressSaveTimer);
      progressSaveTimer = null;
      persistProgress();
    }
  }

  // ---- Ranks ----
  // Reward text is cosmetic-only (title flavor + a profile visual, applied
  // via applyRankCosmetics()) — never a gameplay/pay-to-win effect, per the
  // brief. Cosmetics are the CSS "rank-tier-N" class family below plus the
  // shimmer at the max rank; the same reward line is shown in the rank-up
  // toast so the player knows what they just got, not just that XP went up.
  const RANKS = [
    {min:0,     name:"Картошка",        emoji:"🥔", reward:null},
    {min:400,   name:"Человек",          emoji:"🧍", reward:"Бронзовая рамка профиля"},
    {min:1200,  name:"Мозг",             emoji:"🧠", reward:"Серебряная рамка + значок мыслителя"},
    {min:2800,  name:"Гений",            emoji:"🎓", reward:"Золотая рамка профиля"},
    {min:5500,  name:"Учёный Тупняка",   emoji:"🥼", reward:"Лабораторная рамка + фраза маскота"},
    {min:10000, name:"Космический Мозг", emoji:"👽", reward:"Космическая рамка со свечением"},
    {min:18000, name:"Тупняк-Легенда",   emoji:"🌌", reward:"Легендарная переливающаяся рамка"}
  ];
  function rankForXp(xp){
    let idx = 0;
    for(let i=0;i<RANKS.length;i++){ if(xp>=RANKS[i].min) idx=i; }
    return idx;
  }

  // ---- Achievements (gameplay-tied, checked from actual run/lifetime state) ----
  const ACHIEVEMENTS = {
    fast_finger:  {emoji:"⚡", title:"Быстрый палец",   desc:"Ответь верно, когда времени оставалось больше 80%"},
    cringe_king:  {emoji:"🤯", title:"Король кринжа",   desc:"Дойди до максимального уровня кринжа за один раунд"},
    comeback_kid: {emoji:"🔄", title:"Камбэк",          desc:"Ошибись 2 раза подряд, но всё равно закончи раунд с 60%+ верных"},
    potato_gambler:{emoji:"🥔", title:"Картофельный игрок",desc:"Поставь ТУПНЯК и угадай"},
    daily_grinder:{emoji:"📅", title:"Ежедневный тупняк", desc:"Пройди ежедневный квиз"},
    new_record:   {emoji:"🏆", title:"Новый рекорд",    desc:"Побей свой лучший счёт"},
    duel_champion:{emoji:"👑", title:"Чемпион дуэли",   desc:"Выиграй дуэль вдвоём"},
    perfectionist:{emoji:"💯", title:"Перфекционист",   desc:"Пройди раунд без единой ошибки"},
    night_owl:    {emoji:"🦉", title:"Ночной тупняк",   desc:"Сыграй раунд глубокой ночью (00:00–05:00)"},
    erudite:      {emoji:"📚", title:"Эрудит",          desc:"Дай 100 верных ответов за всё время"}
  };

  // Unlocks (if not already) and queues an XP-toast; returns XP granted.
  const ACHIEVEMENT_XP = 25;
  function unlockAchievement(id, queue){
    if(progress.achievements[id]) return 0;
    progress.achievements[id] = Date.now();
    queue.push({type:"achievement", id});
    return ACHIEVEMENT_XP;
  }

  function addXp(amount, queue, reasonLabel){
    if(amount <= 0) return;
    const before = rankForXp(progress.xp);
    progress.xp += amount;
    const after = rankForXp(progress.xp);
    if(after > before) queue.push({type:"rankup", rank:RANKS[after]});
  }

  // Cosmetic-only rank reward: a progressively fancier border/glow on the
  // rank pill (header) and the profile rank card, tied purely to rank tier.
  // No gameplay effect — just the "I actually achieved something" visual.
  function applyRankCosmetics(el, idx){
    if(!el) return;
    for(let i=0;i<RANKS.length;i++) el.classList.remove("rank-tier-"+i);
    el.classList.add("rank-tier-"+idx);
  }

  function renderRankPill(){
    const idx = rankForXp(progress.xp);
    const rank = RANKS[idx];
    const next = RANKS[idx+1];
    $("rankPillEmoji").textContent = rank.emoji;
    $("rankPillName").textContent = rank.name;
    $("rankPillXp").textContent = progress.xp + " XP";
    const pct = next ? Math.min(100, Math.round((progress.xp-rank.min)/(next.min-rank.min)*100)) : 100;
    $("rankPillBarFill").style.width = pct + "%";
    applyRankCosmetics($("btn-profile"), idx);
  }

  function renderProfile(){
    const idx = rankForXp(progress.xp);
    const rank = RANKS[idx];
    const next = RANKS[idx+1];
    $("profRankEmoji").textContent = rank.emoji;
    $("profRankName").textContent = rank.name;
    const pct = next ? Math.min(100, Math.round((progress.xp-rank.min)/(next.min-rank.min)*100)) : 100;
    $("profRankBarFill").style.width = pct + "%";
    $("profRankSub").textContent = next
      ? (progress.xp-rank.min) + " / " + (next.min-rank.min) + " XP до ранга «" + next.name + "»"
      : "Максимальный ранг достигнут — легенда 🌌";
    applyRankCosmetics(document.querySelector(".profile-rank-card"), idx);

    $("statGames").textContent = progress.totalGames;
    $("statWins").textContent = progress.totalDuelWins + "/" + progress.totalDuels;
    $("statBestScoreP").textContent = cachedBest;
    $("statBestStreakP").textContent = progress.bestStreakEver;
    $("statAccuracy").textContent = progress.totalAnswered>0
      ? Math.round(progress.totalCorrect/progress.totalAnswered*100)+"%" : "—";
    $("statAvgTime").textContent = progress.totalTimedCount>0
      ? (progress.totalTimedMs/progress.totalTimedCount/1000).toFixed(1)+"с" : "—";

    const catList = $("profCatList");
    catList.innerHTML = "";
    Object.keys(CAT_FULL_NAMES).forEach(cat=>{
      const s = progress.catStats[cat] || {correct:0,total:0};
      const pct2 = s.total>0 ? Math.round(s.correct/s.total*100) : 0;
      const row = document.createElement("div");
      row.className = "profile-cat-row";
      row.innerHTML =
        '<span class="profile-cat-name">'+CAT_FULL_NAMES[cat]+'</span>' +
        '<span class="profile-cat-track"><span class="profile-cat-fill" style="width:'+pct2+'%; background:'+(pct2>=70?"var(--green)":pct2>=40?"var(--orange)":"var(--red)")+';"></span></span>' +
        '<span class="profile-cat-pct">'+(s.total>0?pct2+"%":"—")+'</span>';
      catList.appendChild(row);
    });

    const achGrid = $("profAchGrid");
    achGrid.innerHTML = "";
    Object.keys(ACHIEVEMENTS).forEach(id=>{
      const a = ACHIEVEMENTS[id];
      const unlocked = !!progress.achievements[id];
      const card = document.createElement("div");
      card.className = "ach-card card" + (unlocked ? "" : " locked");
      card.innerHTML =
        '<div class="ach-emoji">'+(unlocked?a.emoji:"🔒")+'</div>' +
        '<div class="ach-title">'+a.title+'</div>' +
        '<div class="ach-desc">'+a.desc+'</div>';
      achGrid.appendChild(card);
    });
  }

  // Shows a queue of XP-toast events (achievement unlocks, rank-ups) one
  // after another, each briefly, so a big multi-achievement run doesn't
  // spam them all on screen simultaneously.
  function showXpQueue(queue){
    if(!queue || !queue.length) return;
    const el = $("xpToast");
    let i = 0;
    function step(){
      if(i >= queue.length){ el.classList.remove("show", "big"); return; }
      const ev = queue[i]; i += 1;
      if(ev.type === "achievement"){
        el.classList.remove("big");
        const a = ACHIEVEMENTS[ev.id];
        el.textContent = "🏆 Достижение: " + a.title + " (+"+ACHIEVEMENT_XP+" XP)";
        sfxAchievement();
      } else if(ev.type === "rankup"){
        // Bigger moment than a plain achievement toast: distinct visual
        // treatment, the actual cosmetic reward spelled out, a pulse on the
        // rank pill so the header itself visibly reacts, and (when a quiz
        // mascot is on screen) a matching mascot reaction — audit's "я
        // реально чего-то достиг", not just a number going up.
        el.classList.add("big");
        el.textContent = "✨ НОВЫЙ РАНГ: " + ev.rank.emoji + " " + ev.rank.name + "!" +
          (ev.rank.reward ? ("\nОткрыто: " + ev.rank.reward) : "");
        sfxRankUp();
        const pill = $("btn-profile");
        if(pill){ pill.classList.remove("bump"); void pill.offsetWidth; pill.classList.add("bump"); }
        if(screens.quiz && screens.quiz.classList.contains("active")) reactQuizMascot("rankup");
        else if(screens.duel && screens.duel.classList.contains("active")) reactDuelMascot("rankup");
      }
      el.classList.add("show");
      const dur = ev.type === "rankup" ? 2600 : 2000;
      setTimeout(()=>{ el.classList.remove("show"); setTimeout(step, 220); }, dur);
    }
    step();
  }

  // Reacts to gameplay in real time: correct answer, wrong answer, streak,
  // and cringe-max all change the in-quiz mascot's face using the existing
  // asset set (audit §6/§8: the mascot has to actually respond to what's
  // happening, not just sit idle). Shared by Solo/Daily and Duel — each mode
  // just points it at its own mascot element.
  const MASCOT_REACTION_MAP = {
    idle: "idle", correct: "idle", streak: "champion",
    wrong: "timeout", timeout: "timeout", cringeMax: "shh", risk: "potato",
    tie: "shh", rankup: "champion"
  };
  const MASCOT_FALLBACK_MAP = { idle:"🧠", correct:"🙂", streak:"🤩", wrong:"😬", timeout:"⏰", cringeMax:"🙈", risk:"🥔", tie:"🤝", rankup:"🎉" };
  function reactMascotOn(imgId, fallbackId, wrapId, kind){
    setMascot(imgId, fallbackId, MASCOT_REACTION_MAP[kind]||"idle", MASCOT_FALLBACK_MAP[kind]||"🧠");
    const wrap = $(wrapId);
    wrap.classList.remove("bump");
    void wrap.offsetWidth;
    wrap.classList.add("bump");
  }
  function reactQuizMascot(kind){
    reactMascotOn("quizMascotImg", "quizMascotFallback", "quizMascot", kind);
  }
  function reactDuelMascot(kind){
    reactMascotOn("duelMascotImg", "duelMascotFallback", "duelMascot", kind);
  }

  // ---------------- DAILY: one scored attempt per UTC day ----------------
  // The Daily challenge is a single competitive attempt per UTC day.
  // Replaying after completion is blocked so the leaderboard cannot be farmed.
  // The marker is written only after the full run reaches endGame().
  function hasPlayedDailyToday(){
    const today = todaySeed();
    let lastPlayed = null;
    try{ lastPlayed = localStorage.getItem("tupnyak_lastDailyPlayed"); }catch(e){}
    return lastPlayed === today || progress.dailyPlayedKey === today;
  }
  function refreshDailyDot(){
    const played = hasPlayedDailyToday();
    $("dailyNewDot").classList.toggle("show", !played);
    const btn = $("btn-daily");
    if(btn){
      btn.disabled = played;
      btn.setAttribute("aria-disabled", played ? "true" : "false");
      btn.classList.toggle("daily-played", played);
      const label = $("dailyBtnLabel");
      if(label) label.textContent = played ? "📅 ЕЖЕДНЕВНЫЙ · СЫГРАНО СЕГОДНЯ" : "📅 ЕЖЕДНЕВНЫЙ КВИЗ";
    }
  }
  function markDailyPlayed(){
    const today = todaySeed();
    try{ localStorage.setItem("tupnyak_lastDailyPlayed", today); }catch(e){}
    progress.dailyPlayedKey = today;
    persistProgress();
    refreshDailyDot();
  }

  // ---------------- DAILY LEADERBOARD ----------------
  // Requires a leaderboard named "tupnyakDaily" configured in the Yandex
  // Games developer console (same pattern as edorotBest for Едорот).
  // Gracefully no-ops outside the Yandex platform.
  const LEADERBOARD_NAME = "tupnyakDaily";

  // Yandex Games leaderboards are a single persistent all-time board per
  // name (best score ever) and setLeaderboardScore() only overwrites when
  // the new value is *better* than what's stored — there's no native
  // "reset every day". That used to mean a real bug: if your all-time best
  // was set yesterday and today's run scores lower, the platform silently
  // keeps yesterday's score+stamp, so your today's run never shows up on
  // today's list and an old result effectively blocks the new one.
  //
  // Fix: instead of submitting the raw run score, we submit a composite
  // value = (days since epoch, UTC) × DAY_SCORE_MULT + today's run score.
  // Since the day component only ever increases, day N's composite is
  // guaranteed larger than any score from day N-1 or earlier, so
  // setLeaderboardScore() always accepts today's submission — every day,
  // regardless of how good or bad the run was — and extraData (the day
  // seed) always gets refreshed to today. That eliminates the "stuck on an
  // old best" bug without needing a custom backend. DAY_SCORE_MULT is sized
  // well above any score the scoring math can produce, so the two
  // components never collide.
  const DAY_SCORE_MULT = 1000000;
  // ~15 Q × (BASE_POINTS + max speed bonus) × max combined multiplier
  // (×4 streak/twist/wager cap × ×1.15 cringe bonus), rounded up with slack.
  const MAX_PLAUSIBLE_SCORE = 15000;
  function sanitizeScore(score){
    const n = Number(score);
    if(!Number.isFinite(n)) return 0;
    return Math.max(0, Math.min(Math.round(n), MAX_PLAUSIBLE_SCORE));
  }
  function dayIndexUtc(){
    return Math.floor(getGameNowMs() / 86400000);
  }

  // QA fix (BUG-04): getDescription() confirms the "tupnyakDaily" board
  // actually exists on this app before we try to read/write it, so a missing
  // or misconfigured leaderboard degrades to a friendly message instead of
  // an unhandled rejection surfacing as a raw JS error. Cached per session
  // (the leaderboard's existence can't change mid-session) so we don't burn
  // an extra API call — leaderboards.* is rate-limited — on every open.
  let leaderboardAvailable = null;
  async function checkLeaderboardAvailable(){
    if(!ysdk || !ysdk.leaderboards || typeof ysdk.leaderboards.getDescription !== "function") return false;
    if(leaderboardAvailable !== null) return leaderboardAvailable;
    try{
      await ysdk.leaderboards.getDescription(LEADERBOARD_NAME);
      leaderboardAvailable = true;
    }catch(e){
      console.error("leaderboard getDescription failed for '"+LEADERBOARD_NAME+"':", e);
      leaderboardAvailable = false;
    }
    return leaderboardAvailable;
  }

  // QA fix (BUG-01/02/03): moved off the deprecated getLeaderboards() /
  // setLeaderboardScore() pair onto the current ysdk.leaderboards.setScore()
  // API, made this genuinely async so the caller can tell success from
  // failure instead of assuming success, refreshes Player immediately before
  // the write, and checks method availability before calling it.
  // isAuthorized() gate — Yandex requires an authorized player for setScore().
  //
  //  // anonymous session, which used to look identical to a successful submit.
  // Returns true only once the platform has actually confirmed the write.
  async function submitDailyScore(score){
    if(!ysdk || !ysdk.leaderboards || typeof ysdk.leaderboards.setScore !== "function") return false;

    // Refresh the Player object immediately before a leaderboard write. This
    // matters when the player was already logged into Yandex, but the Player
    // object was created earlier in the session or after an account switch.
    try{
      yaPlayer = await ysdk.getPlayer({ scopes: false });
    }catch(e){
      console.warn("Yandex player refresh before leaderboard submit failed:", e);
      return false;
    }
    if(!yaPlayer || typeof yaPlayer.isAuthorized !== "function" || !yaPlayer.isAuthorized()) return false;

    // Follow the current Yandex Games SDK guidance: verify that the method is
    // available in this environment before making the write request.
    if(typeof ysdk.isAvailableMethod === "function") {
      try{
        const canWrite = await ysdk.isAvailableMethod("leaderboards.setScore");
        if(!canWrite) return false;
      }catch(e){
        console.warn("leaderboards.setScore availability check failed:", e);
        return false;
      }
    }

    const available = await checkLeaderboardAvailable();
    if(!available) return false;

    // Sanity clamp against obviously-spoofed client-side scores (a real
    // anti-cheat guarantee needs server-side validation, which the current
    // client-only architecture doesn't have — this just refuses to forward
    // numbers the real scoring math could never produce).
    const safeScore = sanitizeScore(score);
    // Always refresh server time immediately before binding a score to a day.
    await refreshDailyClock();
    const dailyKey = getCurrentDailyKey();
    const composite = dayIndexUtc() * DAY_SCORE_MULT + safeScore;
    try{
      await ysdk.leaderboards.setScore(LEADERBOARD_NAME, composite, dailyKey);
      return true;
    }catch(e){
      console.error("leaderboard submit failed:", e);
      return false;
    }
  }

  async function loadLeaderboard(){
    const list = $("lbList");
    list.innerHTML = '<div class="lb-empty">Загрузка…</div>';

    if(!ysdk || !ysdk.leaderboards || typeof ysdk.leaderboards.getEntries !== "function"){
      list.innerHTML = '<div class="lb-empty">Рейтинг доступен только в игре на платформе Яндекс Игр.</div>';
      return;
    }

    const available = await checkLeaderboardAvailable();
    if(!available){
      list.innerHTML = '<div class="lb-empty">Рейтинг дня временно недоступен.</div>';
      return;
    }

    try{
      // Refresh before filtering entries so a changed device clock cannot
      // switch the displayed Daily while the leaderboard is open.
      await refreshDailyClock();
      const res = await ysdk.leaderboards.getEntries(LEADERBOARD_NAME, {
        quantityTop: 20, includeUser: true, quantityAround: 1
      });
      renderLeaderboard(res);
    }catch(e){
      console.error("leaderboard load failed:", e);
      list.innerHTML = '<div class="lb-empty">Рейтинг дня временно недоступен.</div>';
    }
  }

  function renderLeaderboard(res){
    const list = $("lbList");
    const seed = todaySeed();
    const allEntries = (res && res.entries) || [];
    // Keep only today's UTC-day submissions, then renumber ranks 1..N so the
    // displayed position reflects today's board, not the all-time one.
    const entries = allEntries.filter(e => e.extraData === seed);
    // The stored score is the composite (dayIndex×DAY_SCORE_MULT + realScore)
    // from submitDailyScore(); everything left after the extraData filter is
    // from today, so the day component is identical across all of them and
    // the remainder is the real run score — safe to decode for display and
    // it preserves the platform's sort order.
    entries.forEach(e=>{
      // Yandex's entry.rank is the platform rank. Do not derive the user's
      // rank from the filtered array index: includeUser can return a user
      // outside the top-N window, where i+1 would be a fake rank.
      const realRank = Number(e.rank);
      e._todayRank = Number.isFinite(realRank) && realRank > 0 ? realRank : null;
      e._realScore = sanitizeScore(e.score % DAY_SCORE_MULT);
    });

    if(entries.length === 0){
      list.innerHTML = '<div class="lb-empty">Сегодня ещё никто не сыграл — стань первым в дне! 🔥</div>';
      return;
    }
    list.innerHTML = "";
    const topEntries = entries.slice(0,10);
    const meEntry = playerUniqueId
      ? entries.find(entry => {
          const entryId = entry.player && (entry.player.uniqueID || entry.player.uniqueId);
          return entryId && entryId === playerUniqueId;
        })
      : null;
    const visibleEntries = meEntry && !topEntries.includes(meEntry)
      ? topEntries.concat([meEntry])
      : topEntries;

    visibleEntries.forEach((entry, visibleIndex) => {
      const row = document.createElement("div");
      const entryId = entry.player && (entry.player.uniqueID || entry.player.uniqueId);
      const isMe = !!(playerUniqueId && entryId && entryId === playerUniqueId);
      row.className = "lb-row" + (isMe ? " me" : "");
      const name = (entry.player && (entry.player.publicName || entry.player.uniqueID)) || "Игрок";
      const displayRank = entry._todayRank || (entries.indexOf(entry) + 1);
      row.innerHTML =
        '<span class="lb-rank">#'+displayRank+'</span>' +
        '<span class="lb-name">'+escapeHtml(name)+'</span>' +
        '<span class="lb-score">'+entry._realScore+'</span>';
      list.appendChild(row);
    });
  }

  // QA fix (BUG-02/BUG-03): the single source of truth for what happened to
  // a Daily submission. Never claims success before the platform confirms
  // it, never calls ysdk.auth.openAuthDialog() on its own (only the
  // player's explicit "Войти и попасть в рейтинг" tap does that — see
  // loginAndSubmitDaily below), and never leaves the game stuck if the
  // player isn't authorized or the API call fails. Runs after the results
  // screen is already showing the run's score/XP/stats, so a slow or failed
  // network call never blocks the player from seeing their result.
  let lastDailyScore = 0;
  async function handleDailyResult(score){
    lastDailyScore = score;
    const subEl = $("resultSub");
    const loginBtn = $("btn-daily-login");
    // Captured once, synchronously, right after this function is invoked —
    // resultSub's base text (endGame() sets it moments later) is fixed by
    // the time this async function's first await yields, so this exact
    // string is what's on screen when we come back to append the outcome.
    const baseSub = $("resultSub").dataset.baseSub || "";

    if(!ysdk || !ysdk.leaderboards || typeof ysdk.leaderboards.setScore !== "function"){
      return; // not running on the Yandex platform — nothing to submit, say nothing false
    }

    // Do not trust the Player object captured at app startup: refresh it here
    // so a player who is already logged into Yandex is recognized even if the
    // initial Player object was created before the platform finished account
    // state initialization.
    try{
      yaPlayer = await ysdk.getPlayer({ scopes: false });
    }catch(e){
      console.warn("Yandex player refresh before daily result failed:", e);
    }

    if(!yaPlayer || typeof yaPlayer.isAuthorized !== "function" || !yaPlayer.isAuthorized()){
      subEl.textContent = baseSub + " · Чтобы попасть в рейтинг дня, необходимо войти в Яндекс ID.";
      if(ysdk.auth && typeof ysdk.auth.openAuthDialog === "function") loginBtn.style.display = "";
      return;
    }

    const ok = await submitDailyScore(score);
    subEl.textContent = baseSub + (ok
      ? " · результат отправлен в рейтинг дня"
      : " · не удалось отправить результат в рейтинг");
    if(ok) sfxDailySubmit();
  }

  // Explicit, player-initiated auth (req. BUG-03: "не вызывай авторизацию
  // автоматически"). Only reachable via a tap on btn-daily-login, which is
  // itself only ever shown from handleDailyResult() above.
  async function loginAndSubmitDaily(){
    const loginBtn = $("btn-daily-login");
    if(!ysdk || !ysdk.auth || typeof ysdk.auth.openAuthDialog !== "function"){
      showToast("Авторизация недоступна в этом окружении.");
      return;
    }
    try{
      await ysdk.auth.openAuthDialog();
      yaPlayer = await ysdk.getPlayer({ scopes: false });
    }catch(e){
      console.warn("Yandex auth dialog failed or was cancelled:", e);
      return;
    }
    if(!yaPlayer || typeof yaPlayer.isAuthorized !== "function" || !yaPlayer.isAuthorized()){
      showToast("Не удалось подтвердить авторизацию.");
      return;
    }
    try{
      if(typeof yaPlayer.getUniqueID === "function") playerUniqueId = await yaPlayer.getUniqueID();
      else if(typeof yaPlayer.uniqueID === "string" && yaPlayer.uniqueID) playerUniqueId = yaPlayer.uniqueID;
      if(playerUniqueId){
        localStorageKey = "tupnyak_progress_" + encodeURIComponent(playerUniqueId);
        localBestKey = "tupnyak_best_" + encodeURIComponent(playerUniqueId);
      }
    }catch(e){ console.warn("Yandex player identity refresh failed:", e); }
    loginBtn.style.display = "none";
    const subEl = $("resultSub");
    const baseSub = subEl.dataset.baseSub || "";
    const ok = await submitDailyScore(lastDailyScore);
    subEl.textContent = baseSub + (ok
      ? " · результат отправлен в рейтинг дня"
      : " · не удалось отправить результат в рейтинг");
    if(ok) sfxDailySubmit();
  }

  // ---------------- LANGUAGE (SDK auto-detect scaffolding, req. 2.14) ----------------
  // NOTE: only Russian content exists right now (UI strings + all 184 questions).
  // This detects the language so the switch is ready to wire up, but does not
  // yet translate anything — that's a separate content task before submission.
  let currentLang = "ru";
  function detectLanguage(){
    if(ysdk && ysdk.environment && ysdk.environment.i18n && ysdk.environment.i18n.lang){
      currentLang = ysdk.environment.i18n.lang;
    } else {
      currentLang = (navigator.language || "ru").slice(0,2);
    }
    return currentLang;
  }

  // ---------------- FOCUS / VISIBILITY (req. 1.3 / 4.7 / 6.2) ----------------
  // Pauses the active timer (solo question or duel turn) when the tab loses
  // focus, and resumes it with the exact remaining time on return — so hidden
  // time never silently eats the player's clock. Also blocks taps while
  // hidden. Audio hooks are stubs, ready for whenever sound is added.
  const focusPause = { soloElapsed: null, duelElapsed: null };

  // ---------------- SOUND (synthesized via Web Audio, no external files) ----------------
  // Split into two independent buses per the follow-up ask: SFX (tap,
  // correct, wrong, timeout, streak, wager, achievements, rank-up — the
  // short informative feedback sounds) and Music (the handful of one-shot
  // musical flourishes at stage transitions: round start, Twist, new
  // record). Both are children of masterGain, so the single volume slider
  // still scales everything, but each bus can also be muted independently
  // and that choice is remembered.
  let audioCtx = null;
  let masterGain = null;
  let musicGain = null;
  let sfxGain = null;
  let volume = 0.7; // 0..1, single source of truth for overall output level
  let musicEnabled = true;
  let sfxEnabled = true;
  try{
    const v = localStorage.getItem("tupnyak_volume");
    if(v !== null) volume = Math.max(0, Math.min(1, parseInt(v,10)/100));
    const m = localStorage.getItem("tupnyak_musicEnabled");
    if(m !== null) musicEnabled = m === "1";
    const s = localStorage.getItem("tupnyak_sfxEnabled");
    if(s !== null) sfxEnabled = s === "1";
  }catch(e){}

  function ensureAudioCtx(){
    if(!audioCtx){
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if(!Ctx) return false;
      audioCtx = new Ctx();
      masterGain = audioCtx.createGain();
      masterGain.gain.value = volume;
      masterGain.connect(audioCtx.destination);
      musicGain = audioCtx.createGain();
      musicGain.gain.value = musicEnabled ? 1 : 0;
      musicGain.connect(masterGain);
      sfxGain = audioCtx.createGain();
      sfxGain.gain.value = sfxEnabled ? 1 : 0;
      sfxGain.connect(masterGain);
    }
    if(audioCtx.state === "suspended") audioCtx.resume();
    return true;
  }

  function setMusicEnabled(v){
    musicEnabled = !!v;
    try{ localStorage.setItem("tupnyak_musicEnabled", musicEnabled ? "1" : "0"); }catch(e){}
    if(musicGain) musicGain.gain.value = musicEnabled ? 1 : 0;
  }
  function setSfxEnabled(v){
    sfxEnabled = !!v;
    try{ localStorage.setItem("tupnyak_sfxEnabled", sfxEnabled ? "1" : "0"); }catch(e){}
    if(sfxGain) sfxGain.gain.value = sfxEnabled ? 1 : 0;
  }

  // `bus`: "sfx" (default) or "music". `humanize`: when true, detunes this
  // particular note by a few random cents — used on frequently-repeated
  // taps (click/correct/wrong) so a 10-minute session doesn't sound like
  // the exact same three notes on a loop (follow-up ask: vary repeats
  // "without adding complexity" — a tiny random detune is the cheapest way).
  function playTone(freq, duration, type, vol, delay, bus, humanize){
    if(volume <= 0) return;
    bus = bus || "sfx";
    if(bus === "sfx" && !sfxEnabled) return;
    if(bus === "music" && !musicEnabled) return;
    if(!ensureAudioCtx()) return;
    if(humanize) freq = freq * (0.985 + Math.random()*0.03); // ±1.5% detune
    const t0 = audioCtx.currentTime + (delay||0);
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type || "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(vol||0.2, t0+0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, t0+duration);
    osc.connect(gain);
    gain.connect(bus === "music" ? musicGain : sfxGain);
    osc.start(t0);
    osc.stop(t0+duration+0.02);
  }

  // `humanize:true` on the two most-repeated sounds in the game (every tap,
  // every correct answer) -- a few percent of random detune per play so a
  // 15-question run doesn't sound like the exact same three notes on
  // repeat (follow-up ask: vary frequent repeats without adding real
  // complexity).
  function sfxClick(){ playTone(700, 0.06, "square", 0.07, 0, "sfx", true); }
  function sfxCorrect(){ playTone(660,0.12,"sine",0.16,0,"sfx",true); playTone(880,0.14,"sine",0.16,0.09,"sfx",true); }
  function sfxWrong(){ playTone(160,0.22,"sawtooth",0.13,0,"sfx",true); }
  function sfxTimeout(){ playTone(140,0.3,"triangle",0.11); }
  function sfxWin(){ playTone(523,0.12,"sine",0.16); playTone(659,0.12,"sine",0.16,0.1); playTone(784,0.18,"sine",0.18,0.2); }
  function sfxTie(){ playTone(440,0.14,"triangle",0.13); playTone(440,0.14,"triangle",0.13,0.16); }
  function sfxLose(){ playTone(300,0.16,"sawtooth",0.1); playTone(220,0.24,"sawtooth",0.11,0.12); }
  // Rising 3-note run, pitch scales with streak length — makes a x5 streak
  // audibly bigger than a x2 one instead of an identical blip each time.
  function sfxStreak(n){
    const base = 520 + Math.min(n,8)*24;
    playTone(base, 0.09, "square", 0.13);
    playTone(base*1.26, 0.11, "square", 0.13, 0.07);
  }
  function sfxWagerHigh(){ playTone(200,0.1,"sawtooth",0.12); playTone(150,0.16,"sawtooth",0.12,0.08); }
  // Distinct-but-milder version for the RISK wager tier (was previously just
  // a generic click, indistinguishable from the safe "normal" choice — the
  // brief specifically calls for a wager sound, not only for the max tier).
  function sfxWagerRisk(){ playTone(320,0.09,"sawtooth",0.1); playTone(260,0.12,"sawtooth",0.1,0.06); }
  // Daily-specific confirmation chime, distinct timbre from the regular
  // win/lose stingers — acknowledges "your run was submitted to today's
  // board" as its own small moment (brief's explicit "Daily result" sound).
  function sfxDailySubmit(){ playTone(587.33,0.08,"sine",0.11); playTone(880,0.11,"sine",0.12,0.08); }
  // Soft tick used once per second in the final seconds of the timer, so
  // the clock is felt, not just seen (audit §7/§9's "почти успел" beat).
  // Timer tension ticks (follow-up ask): previously ticked every whole
  // second for the last 3 seconds AND the terminal 0, which stacked with
  // onTimeout()'s own end-of-time sound right after -- exactly the kind of
  // "пиликанье" that gets tiring over a session. New schedule: a single
  // quiet tick at 5s, silence at 4s, two normal ticks at 3s/2s, one louder
  // final tick at 1s, and nothing at 0 -- onTimeout()'s existing sfxTimeout()
  // already IS the distinct "time's up" sound, so 0 isn't duplicated here.
  const TIMER_TICK_SECONDS = { 5:"quiet", 3:"normal", 2:"normal", 1:"final" };
  function sfxTick(level){
    // Deliberately quieter than every other gameplay SFX (0.035-0.09 here
    // vs 0.07-0.18 elsewhere) so the last-seconds clock is felt without
    // becoming the loudest thing in the room.
    if(level === "quiet") playTone(650, 0.04, "square", 0.035);
    else if(level === "final") playTone(950, 0.07, "square", 0.09);
    else playTone(750, 0.05, "square", 0.055);
  }
  function sfxAchievement(){ playTone(784,0.1,"sine",0.15); playTone(988,0.12,"sine",0.16,0.08); playTone(1175,0.16,"sine",0.17,0.17); }
  function sfxRankUp(){ playTone(523,0.1,"triangle",0.15); playTone(659,0.1,"triangle",0.15,0.09); playTone(784,0.1,"triangle",0.15,0.18); playTone(1047,0.2,"triangle",0.18,0.27); }
  function sfxCringeMax(){ playTone(880,0.06,"sawtooth",0.14); playTone(660,0.06,"sawtooth",0.13,0.05); playTone(440,0.06,"sawtooth",0.12,0.1); playTone(220,0.18,"sawtooth",0.15,0.15); }

  // ---------------- MUSIC/SOUND: short musical stingers, no continuous loop ----------------
  // A previous pass had a continuously-looping procedural arpeggio playing
  // on every question of every game. Feedback (rightly) called that out:
  // after 3-5 minutes any loop this simple starts to grate, no matter how
  // it's dressed up -- there just aren't enough notes in a tiny Web Audio
  // synth pattern to stay interesting for a 10-15 minute session. Per the
  // explicit ask, the fix is to cut the loop rather than try to make it
  // less repetitive: normal question time is now silent apart from the
  // existing SFX (tap/correct/wrong/tick), and "music" is reduced to a
  // handful of one-shot stingers at real stage transitions -- round start,
  // Twist, new record -- plus the existing rank-up/achievement/win/lose
  // fanfares, which were already one-shots, not loops, and stay as-is.
  // All route through the `music` bus so they can be muted independently
  // of core gameplay SFX (see setMusicEnabled/setSfxEnabled above).
  function musicStingerStart(){ playTone(392,0.1,"triangle",0.07,0,"music"); playTone(523.25,0.14,"triangle",0.08,0.08,"music"); }
  function musicStingerRecord(){ playTone(659.25,0.1,"triangle",0.11,0,"music"); playTone(880,0.12,"triangle",0.11,0.07,"music"); playTone(1174.66,0.2,"triangle",0.12,0.15,"music"); }
  function musicStingerTwist(){ playTone(233.08,0.12,"sawtooth",0.09,0,"music"); playTone(277.18,0.14,"sawtooth",0.09,0.06,"music"); }
  // Kept as functions (not deleted outright) since showScreen() still calls
  // these on entering/leaving quiz/duel -- leaving that call site alone is
  // the smaller, safer diff. startMusic now only fires the one-shot "round
  // start" stinger instead of kicking off a loop; stopMusic has nothing
  // left to stop.
  function startMusic(){ musicStingerStart(); }
  function stopMusic(){}

  function setVolume(v){
    volume = Math.max(0, Math.min(1, v));
    try{ localStorage.setItem("tupnyak_volume", String(Math.round(volume*100))); }catch(e){}
    if(ensureAudioCtx()) masterGain.gain.value = volume;
  }


  // Requirement 1.3 / 4.7: mute on hidden tab / during fullscreen ads.
  function muteAudio(){ if(audioCtx && masterGain) masterGain.gain.value = 0; }
  function unmuteAudio(){ if(audioCtx && masterGain) masterGain.gain.value = volume; }

  function handleAppHidden(){
    muteAudio();
    flushProgressSave(); // QA fix (BUG-05): don't lose a debounced save to a tab close/backgrounding
    if(state.timer){
      focusPause.soloElapsed = performance.now() - state.startTs;
      clearInterval(state.timer);
      state.timer = null;
    }
    if(duel.timer){
      focusPause.duelElapsed = performance.now() - duel.turnStartTs;
      clearInterval(duel.timer);
      duel.timer = null;
    }
    document.body.classList.add("app-hidden-pause");
  }

  function handleAppVisible(){
    unmuteAudio();
    document.body.classList.remove("app-hidden-pause");
    if(focusPause.soloElapsed !== null && screens.quiz.classList.contains("active") && !state.locked){
      startTimer(focusPause.soloElapsed);
    }
    focusPause.soloElapsed = null;
    if(focusPause.duelElapsed !== null && screens.duel.classList.contains("active")){
      startDuelTurnTimer(focusPause.duelElapsed);
    }
    focusPause.duelElapsed = null;
  }

  document.addEventListener("visibilitychange", ()=>{
    if(document.hidden) handleAppHidden();
    else handleAppVisible();
  });

  // ---------------- SHUFFLE / SETUP ----------------
  function shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  }

  // Seeded PRNG (mulberry32) + seeded shuffle, so the "daily" set of
  // questions is identical for every player on a given calendar day.
  function mulberry32(seed){
    return function(){
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function seededShuffle(arr, seedStr){
    let seed = 0;
    for(let i=0;i<seedStr.length;i++){ seed = (seed*31 + seedStr.charCodeAt(i)) | 0; }
    const rnd = mulberry32(seed);
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){
      const j = Math.floor(rnd()*(i+1));
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  }
  // Uses UTC, not local time (fix per audit §1): with local dates, players in
  // different timezones would get different daily sets and their runs would
  // land under different leaderboard "days" — breaking the "one Daily per
  // calendar day, same for everyone" guarantee. UTC gives every player on
  // Earth the identical day-boundary and identical question set.
  function getCurrentDailyKey(){
    const d = new Date(getGameNowMs());
    return d.getUTCFullYear()+"-"+(d.getUTCMonth()+1)+"-"+d.getUTCDate();
  }
  function todaySeed(){
    return getCurrentDailyKey();
  }

  // ---------------- КРИВАЯ СЛОЖНОСТИ (вместо чистого рандома) ----------------
  // diff: 1=лёгкий, 2=средний, 3=твёрдый/TRICK. Старт легче, твист-раунды на
  // среднем, к финалу — самые твёрдые вопросы (климакс), 15-й гарантированно diff:3.
  const DIFFICULTY_CURVE = [1,1,2,2,2,3,2,2,1,2,2,2,3,3,3];

  function pickCuratedOrder(rnd, avoidIdx){
    const avoid = avoidIdx || new Set();
    const byDiff = {1:[], 2:[], 3:[]};
    BANK.forEach((item,i)=>{ (byDiff[item.diff] || byDiff[2]).push(i); });
    // тасуем каждую корзину отдельным сидом/рандомом
    Object.keys(byDiff).forEach(k=>{
      const arr = byDiff[k];
      for(let i=arr.length-1;i>0;i--){
        const j = Math.floor(rnd()*(i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]];
      }
    });
    const used = new Set();
    const order = [];
    DIFFICULTY_CURVE.forEach(target=>{
      const tryOrder = target===1 ? [1,2,3] : target===2 ? [2,1,3] : [3,2,1];
      let picked = null;
      // First pass: prefer a question that isn't in `avoid` (recently played)
      // and isn't already used earlier this same game.
      for(const d of tryOrder){
        const bucket = byDiff[d];
        for(let i=bucket.length-1; i>=0; i--){
          const cand = bucket[i];
          if(!used.has(cand) && !avoid.has(cand)){ picked = cand; bucket.splice(i,1); break; }
        }
        if(picked !== null) break;
      }
      // Fallback: this difficulty bucket has no fresh candidates left (small
      // pool, e.g. diff:3), so allow a recently-played one rather than
      // breaking the difficulty curve or repeating within the same game.
      if(picked === null){
        for(const d of tryOrder){
          const bucket = byDiff[d];
          while(bucket.length){
            const cand = bucket.pop();
            if(!used.has(cand)){ picked = cand; break; }
          }
          if(picked !== null) break;
        }
      }
      if(picked !== null){ used.add(picked); order.push(BANK[picked]); }
    });
    return {order, usedIdx: used};
  }

  // Anti-repeat memory (fixes "мне попадаются одни вопросы"): Solo/Duel
  // steer new picks away from BANK indices used in roughly the last several
  // games before falling back to a repeat. The smallest difficulty bucket
  // (diff:3, hard/trick questions) was getting
  // resampled every 1-2 games under pure random picks, which is exactly
  // what made repeats so noticeable. Cap is sized so the whole bank cycles
  // through before anything repeats. Daily is untouched on purpose — its
  // set has to be identical for every player, so it can't depend on one
  // player's local play history.
  const RECENT_Q_CAP = Math.max(TOTAL_Q * 4, Math.floor(BANK.length * 0.75));
  function recentQSet(){
    return new Set(progress.recentQIdx || []);
  }
  function rememberPlayedQuestions(usedIdxSet){
    const list = (progress.recentQIdx || []).concat(Array.from(usedIdxSet));
    progress.recentQIdx = list.slice(Math.max(0, list.length - RECENT_Q_CAP));
    persistProgress();
  }

  function buildOrder(){
    if(BANK.length >= TOTAL_Q){
      const {order, usedIdx} = pickCuratedOrder(Math.random, recentQSet());
      rememberPlayedQuestions(usedIdx);
      return order;
    }
    return shuffle(BANK).slice(0, Math.min(TOTAL_Q, BANK.length));
  }
  function buildDailyOrder(){
    if(BANK.length >= TOTAL_Q){
      let seed = 0;
      const seedStr = todaySeed();
      for(let i=0;i<seedStr.length;i++){ seed = (seed*31 + seedStr.charCodeAt(i)) | 0; }
      const rnd = mulberry32(seed);
      // No avoid-set here on purpose — Daily must be the same question set
      // for every player on Earth, so it can't be steered by one player's
      // local recent-question history.
      return pickCuratedOrder(rnd).order;
    }
    return seededShuffle(BANK, todaySeed()).slice(0, Math.min(TOTAL_Q, BANK.length));
  }

  // Seeded per-day RNG for twist placement (Daily), separate seed string
  // from the question-order shuffle so the two don't correlate.
  function dailyTwistRnd(){
    let seed = 0;
    const seedStr = todaySeed() + "|twist";
    for(let i=0;i<seedStr.length;i++){ seed = (seed*31 + seedStr.charCodeAt(i)) | 0; }
    return mulberry32(seed);
  }

  // ---------------- GAME FLOW ----------------
  async function ensureStorageReady(){
    if(storageReady) return true;
    try{
      if(storageInitPromise) await storageInitPromise;
      else await initializeStorage();
    }catch(e){
      console.warn("storage wait failed:", e);
    }
    if(!storageReady){
      showToast("Не удалось загрузить сохранение. Попробуйте ещё раз.");
      return false;
    }
    return true;
  }

  async function startGame(daily){
    // The click handler requests fullscreen before this await so mobile
    // fullscreen still has a genuine user-gesture call stack.
    requestFullscreenIfMobile();
    if(gameStartInProgress) return;
    gameStartInProgress = true;
    const playBtn = $("btn-play");
    const dailyBtn = $("btn-daily");
    const oldPlayText = playBtn.textContent;
    const oldDailyText = dailyBtn.textContent;
    if(daily){ dailyBtn.textContent = "ЗАПУСКАЕМ…"; dailyBtn.disabled = true; }
    else { playBtn.textContent = "ЗАПУСКАЕМ…"; playBtn.disabled = true; }
    try{
      if(daily){
        await refreshDailyClock();
        refreshDailyDot();
        if(hasPlayedDailyToday()){
          showToast("📅 Ежедневный уже сыгран сегодня. Возвращайся после смены UTC-дня!");
          return;
        }
      }
      if(!(await ensureStorageReady())) return;
      if(daily){
        await refreshDailyClock();
        if(hasPlayedDailyToday()){
          refreshDailyDot();
          showToast("📅 Ежедневный уже сыгран сегодня. Возвращайся после смены UTC-дня!");
          return;
        }
      }
      state.order = daily ? buildDailyOrder() : buildOrder();
      state.mode = daily ? "daily" : "solo";
      state.idx = 0;
    state.score = 0;
    state.correctCount = 0;
    state.streak = 0;
    state.maxStreak = 0;
    state.twistPlan = buildTwistPlan(daily ? dailyTwistRnd() : Math.random, state.order.length);
    state.categoryStats = {}; // per-run tally, folded into lifetime progression at endGame
    state.consecWrong = 0;
    state.hadDoubleWrongStreak = false;
    state.reachedCringeMax = false;
    state.idiotWagerCorrect = false;
      state.fastCorrect = false;
      resetCringeMeter();
      showScreen("quiz");
      renderQuestion();
    } finally {
      gameStartInProgress = false;
      playBtn.disabled = false;
      dailyBtn.disabled = hasPlayedDailyToday();
      playBtn.textContent = oldPlayText;
      const dailyPlayed = hasPlayedDailyToday();
      const dailyLabel = $("dailyBtnLabel");
      if(dailyLabel) dailyLabel.textContent = dailyPlayed ? "📅 ЕЖЕДНЕВНЫЙ · СЫГРАНО СЕГОДНЯ" : "📅 ЕЖЕДНЕВНЫЙ КВИЗ";
      dailyBtn.textContent = dailyLabel ? "" : oldDailyText;
      if(dailyLabel) dailyBtn.appendChild(dailyLabel);
      const dailyDot = $("dailyNewDot");
      if(dailyDot) dailyBtn.appendChild(dailyDot);
    }
  }

  function renderQuestion(){
    state.locked = false;
    state.qToken += 1;
    const myToken = state.qToken;
    clearTimeout(state.chaosTimeout);
    state.chaosTimeout = null;
    state.wager = "normal";
    updateWagerBadge();
    setMascot("quizMascotImg", "quizMascotFallback", "idle", "🧠"); // reset face for the new question, no bump

    const item = state.order[state.idx];
    $("qCounter").textContent = (state.idx+1) + "/" + state.order.length;
    $("scorePill").textContent = state.score;

    const qcard = $("qCard");
    qcard.innerHTML = buildCatBadge(item.cat) + escapeHtml(item.q);
    triggerPop(qcard);

    // is this a твист-раунд? decided by the escalating-chance plan built at
    // game start (buildTwistPlan) — never the first question, never fully
    // predictable (audit §5).
    const planned = state.twistPlan[state.idx] || {isTwist:false, type:null};
    const isTwist = planned.isTwist;
    state.twistType = isTwist ? planned.type : null;
    const baseTimeLimit = state.twistType === "speed" ? Math.round(TIME_PER_Q*0.5) : TIME_PER_Q;

    // build options in shuffled order, tracking correct index
    const letters = ["А","Б","В","Г"];
    const idxArr = [0,1,2,3];
    let shuffledIdx = shuffle(idxArr);
    let correctPos = shuffledIdx.indexOf(item.a);
    // Inverse round bug fix: this used to remap correctPos to ONE randomly
    // chosen wrong position, so only that single position counted as a
    // successful "wrong answer" -- the other two genuinely-wrong options
    // (which the "Жми НЕправильный ответ!" instruction implies should also
    // count) silently failed. correctPos now always stays the item's real
    // answer; a dedicated inverseMode flag tells the click handler and the
    // reveal logic to accept ANY of the other three positions instead.
    const isInverseRound = state.twistType === "inverse";

    const optsWrap = $("options");
    optsWrap.innerHTML = "";
    shuffledIdx.forEach((origIdx, pos)=>{
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "opt";
      btn.setAttribute("aria-label", "Вариант " + letters[pos] + ": " + item.opts[origIdx]);
      btn.innerHTML = '<span class="letter" aria-hidden="true">'+letters[pos]+'</span><span class="opt-text">'+escapeHtml(item.opts[origIdx])+'</span>';
      btn.addEventListener("click", ()=>{
        const cp = parseInt(optsWrap.dataset.correctPos,10);
        const inverse = optsWrap.dataset.inverseMode === "1";
        onAnswer(inverse ? (pos!==cp) : (pos===cp), btn);
      });
      optsWrap.appendChild(btn);
    });
    wireOptionKeyboardNav(optsWrap);

    // stash for reveal-all-on-timeout / chaos reshuffle
    optsWrap.dataset.correctPos = correctPos;
    optsWrap.dataset.inverseMode = isInverseRound ? "1" : "0";

    const quizBody = $("quizBody");
    quizBody.classList.add("hide-content");

    // Onboarding (audit §2): the very first question of a player's very
    // first round must go straight to "question → answer → result" with no
    // wager screen in front of it — that's how the timer, correct-answer
    // feedback and scoring get demonstrated before anything else is asked of
    // a brand-new player. Wager is introduced starting from question 2.
    const isVeryFirstQuestion = state.idx === 0;
    if(isVeryFirstQuestion){
      state.wager = "normal";
      updateWagerBadge();
      state.timeLimit = baseTimeLimit; // isTwist is always false on Q1 (see above), so no twist banner either
      quizBody.classList.remove("hide-content");
      startTimer();
      maybeShowFirstQuestionHint();
      return;
    }

    showWagerOverlay((chosenWager)=>{
      if(myToken !== state.qToken) return; // question changed while wager screen was up
      state.wager = chosenWager;
      updateWagerBadge();
      state.timeLimit = Math.max(1200, Math.round(baseTimeLimit * WAGER_TYPES[chosenWager].timeFactor));

      if(isTwist){
        showTwistBanner(state.twistType, ()=>{
          if(myToken !== state.qToken) return; // question changed while banner was up
          quizBody.classList.remove("hide-content");
          startTimer();
          if(state.twistType === "chaos") scheduleChaosSwap(myToken, item, letters);
        });
      } else {
        quizBody.classList.remove("hide-content");
        startTimer();
      }
    });
  }

  // Shown once, ever, right on top of question 1 — explains the four things
  // a brand-new player needs before anything else: what to do, how the
  // timer works, what counts as correct, and that points are on the line.
  // Never shown again after the first time (own localStorage flag, separate
  // from the wager hint which now only appears from question 2 onward).
  function maybeShowFirstQuestionHint(){
    let seen = true;
    try{ seen = localStorage.getItem("tupnyak_seenFirstQHint") === "1"; }catch(e){}
    if(seen) return;
    try{ localStorage.setItem("tupnyak_seenFirstQHint", "1"); }catch(e){}
    showToast("Жми верный ответ, пока идёт время ⏱", {top:true});
  }

  let _wagerCleanup = null;
  function showWagerOverlay(onChosen){
    const overlay = $("wagerOverlay");
    if(_wagerCleanup) _wagerCleanup();
    overlay.classList.add("show");
    const isFinal = state.idx === state.order.length - 1;
    const titleEl = overlay.querySelector(".wager-title");
    titleEl.textContent = isFinal ? "🔥 ФИНАЛЬНЫЙ ВОПРОС — куда до конца?" : "🥔 ТУПИ ИЛИ РИСКНИ?";
    overlay.classList.toggle("final", isFinal);

    // Onboarding: show the "what is this screen" hint only the very first
    // time a player ever sees the wager overlay, across all sessions.
    const hintEl = $("wagerFirstHint");
    let seenWagerHint = true;
    try{ seenWagerHint = localStorage.getItem("tupnyak_seenWagerHint") === "1"; }catch(e){}
    hintEl.classList.toggle("show", !seenWagerHint);
    if(!seenWagerHint){
      try{ localStorage.setItem("tupnyak_seenWagerHint", "1"); }catch(e){}
    }

    const buttons = overlay.querySelectorAll(".wager-btn");
    function cleanup(){
      buttons.forEach(b=>b.removeEventListener("click", handler));
      overlay.classList.remove("show");
      _wagerCleanup = null;
    }
    function handler(e){
      const wager = e.currentTarget.dataset.wager;
      cleanup();
      if(wager === "idiot"){ sfxWagerHigh(); reactQuizMascot("risk"); }
      else if(wager === "risk"){ sfxWagerRisk(); }
      else sfxClick();
      onChosen(wager);
    }
    buttons.forEach(b=>b.addEventListener("click", handler));
    _wagerCleanup = cleanup;
  }

  function updateWagerBadge(){
    const badge = $("wagerActiveBadge");
    if(state.wager === "normal"){
      badge.classList.remove("show", "wg-risk", "wg-idiot");
      return;
    }
    const cfg = WAGER_TYPES[state.wager];
    badge.textContent = cfg.emoji + " " + cfg.name + " ×" + cfg.mult;
    badge.className = "wager-active-badge show wg-" + state.wager;
  }

  function showTwistBanner(type, onDone){
    const cfg = TWIST_TYPES[type];
    const overlay = $("twistOverlay");
    const banner = $("twistBanner");
    $("twistBannerEmoji").textContent = cfg.emoji;
    $("twistBannerText").textContent = cfg.text;
    $("twistBannerSub").textContent = cfg.sub;
    banner.className = "twist-banner " + cfg.cls;
    overlay.classList.add("show");
    sfxTimeout();
    musicStingerTwist();
    setTimeout(()=>{
      overlay.classList.remove("show");
      onDone();
    }, 2000);
  }

  function scheduleChaosSwap(myToken, item, letters){
    state.chaosTimeout = setTimeout(()=>{
      if(myToken !== state.qToken || state.locked) return;
      const optsWrap = $("options");
      const idxArr = [0,1,2,3];
      const newShuffled = shuffle(idxArr);
      const newCorrectPos = newShuffled.indexOf(item.a);
      [...optsWrap.children].forEach((btn, pos)=>{
        const origIdx = newShuffled[pos];
        btn.querySelector(".opt-text").textContent = item.opts[origIdx];
        btn.classList.remove("swap");
        void btn.offsetWidth; // restart animation
        btn.classList.add("swap");
      });
      optsWrap.dataset.correctPos = newCorrectPos;
      sfxClick();
    }, Math.round(state.timeLimit*0.5));
  }

  function startTimer(resumeElapsedMs){
    resumeElapsedMs = resumeElapsedMs || 0;
    clearInterval(state.timer);
    state.timer = null;
    const limit = state.timeLimit || TIME_PER_Q;
    state.startTs = performance.now() - resumeElapsedMs;
    const fill = $("timerFill");
    const initialPct = Math.max(0, 1 - resumeElapsedMs/limit);
    fill.style.background = initialPct < 0.35 ? "var(--red)" : initialPct < 0.6 ? "var(--orange)" : "var(--green)";
    fill.style.transform = "scaleX("+initialPct+")";

    let lastTickSecond = Math.ceil((limit-resumeElapsedMs)/1000);
    state.timer = setInterval(()=>{
      const elapsed = performance.now() - state.startTs;
      const pct = Math.max(0, 1 - elapsed/limit);
      fill.style.transform = "scaleX("+pct+")";
      if(pct < 0.35) fill.style.background = "var(--red)";
      else if(pct < 0.6) fill.style.background = "var(--orange)";
      // Tension tick only on the specific seconds configured above (5/3/2/1)
      // -- not every whole second -- and never at 0 (onTimeout's own sound
      // covers that boundary).
      const secondsLeft = Math.ceil((limit-elapsed)/1000);
      if(secondsLeft < lastTickSecond){
        lastTickSecond = secondsLeft;
        const tickLevel = TIMER_TICK_SECONDS[secondsLeft];
        if(tickLevel) sfxTick(tickLevel);
      }
      if(elapsed >= limit){
        clearInterval(state.timer);
        state.timer = null;
        onTimeout();
      }
    }, 60);
  }

  // Штраф при ошибке = penaltyFactor × «сколько дал бы ОБЫЧНЫЙ верный ответ прямо
  // сейчас» — то есть пропорционален текущему стрику/скорости, а не фиксирован.
  function computeWagerPenalty(timeLeftPct){
    const speedBonus = Math.round(timeLeftPct * 60);
    const streakMultAtLoss = 1 + Math.min(state.streak, 4) * 0.15; // streak, будь ответ верным
    const twistMult = TWIST_SCORE_MULT[state.twistType] || 1;
    const cappedMultAtLoss = Math.min(streakMultAtLoss * twistMult, 4); // same cap as the gain side, kept consistent
    const normalGainAtLoss = Math.round((BASE_POINTS + speedBonus) * cappedMultAtLoss);
    const rawPenalty = Math.round(normalGainAtLoss * WAGER_TYPES[state.wager].penaltyFactor);
    // Balance fix (found via EV audit): penaltyFactor is applied AFTER the
    // ×4 combined-multiplier cap on the gain side, so it wasn't itself
    // capped — a BONUS-twist + ТУПНЯК wager miss on a long streak could cost
    // up to ×6 (penaltyFactor 1.5 × capped 4), while the best-case correct
    // answer in the same scenario tops out at ×4.6 (cap 4 × cringe-tier
    // 1.15). That asymmetry let one unlucky combo erase more than the best
    // possible combo could ever earn. Capping the final penalty at the same
    // absolute ceiling as the max possible gain fixes it without touching
    // the normal (non-extreme) case, where this cap never engages.
    const maxPenalty = Math.round((BASE_POINTS + speedBonus) * 4 * 1.15);
    return Math.min(rawPenalty, maxPenalty);
  }

  function onTimeout(){
    if(state.locked) return;
    state.locked = true;
    clearTimeout(state.chaosTimeout);
    sfxTimeout();
    reactQuizMascot("timeout");
    revealCorrect();
    const item = state.order[state.idx];
    trackCategoryAnswer(item, false);
    state.consecWrong += 1;
    if(state.consecWrong >= 2) state.hadDoubleWrongStreak = true;
    const penalty = computeWagerPenalty(0);
    state.streak = 0;
    hideStreakBadge();
    addCringe(-15);
    if(penalty > 0 && state.score > 0){
      state.score = Math.max(0, state.score - penalty);
      animateNumber($("scorePill"), state.score, 420);
      bumpScorePill(true);
    }
    setTimeout(nextQuestion, 1100);
  }

  // Folds one answered question into both the per-run tally (used for the
  // "improved this run" summary) and the lifetime progress used by the
  // Category Mastery screen. `elapsedMs` is omitted (null) for timeouts —
  // those don't count toward average response time.
  function trackCategoryAnswer(item, isCorrect, elapsedMs){
    if(!item) return;
    const runCs = state.categoryStats[item.cat] || {correct:0,total:0};
    runCs.total += 1; if(isCorrect) runCs.correct += 1;
    state.categoryStats[item.cat] = runCs;

    const cs = progress.catStats[item.cat] || {correct:0,total:0};
    cs.total += 1; if(isCorrect) cs.correct += 1;
    progress.catStats[item.cat] = cs;

    progress.totalAnswered += 1;
    if(isCorrect) progress.totalCorrect += 1;
    if(elapsedMs != null){
      progress.totalTimedMs += elapsedMs;
      progress.totalTimedCount += 1;
    }
    schedulePersistProgress(); // QA fix (BUG-05): debounced save per answer, not just at endGame()
  }

  function revealCorrect(){
    const optsWrap = $("options");
    const correctPos = parseInt(optsWrap.dataset.correctPos,10);
    const isInverse = optsWrap.dataset.inverseMode === "1";
    [...optsWrap.children].forEach((el,i)=>{
      el.classList.add("locked");
      if(isInverse){
        // Any of the other three would have scored -- show all of them as
        // correct, and the one real answer as the one to avoid.
        if(i===correctPos) el.classList.add("wrong");
        else el.classList.add("correct");
      } else {
        if(i===correctPos) el.classList.add("correct");
        else el.classList.add("dim");
      }
    });
  }

  function onAnswer(isCorrect, el){
    if(state.locked || document.hidden) return;
    state.locked = true;
    clearInterval(state.timer);
    state.timer = null;
    clearTimeout(state.chaosTimeout);

    const elapsed = performance.now() - state.startTs;
    const limit = state.timeLimit || TIME_PER_Q;
    const timeLeftPct = Math.max(0, 1 - elapsed/limit);

    const optsWrap = $("options");
    const correctPos = parseInt(optsWrap.dataset.correctPos,10);
    [...optsWrap.children].forEach(o=>o.classList.add("locked"));

    const item = state.order[state.idx];
    trackCategoryAnswer(item, isCorrect, elapsed);

    if(isCorrect){
      sfxCorrect();
      el.classList.add("correct");
      state.streak += 1;
      state.maxStreak = Math.max(state.maxStreak, state.streak);
      state.correctCount += 1;
      state.consecWrong = 0;
      if(timeLeftPct > 0.8) state.fastCorrect = true;
      if(state.wager === "idiot") state.idiotWagerCorrect = true;

      const speedBonus = Math.round(timeLeftPct * 60); // up to +60
      const streakMult = 1 + Math.min(state.streak-1, 4) * 0.15; // up to x1.6
      const twistMult = TWIST_SCORE_MULT[state.twistType] || 1; // speed/bonus rounds pay more
      const wagerMult = WAGER_TYPES[state.wager].mult;
      // Balance cap (audit §7): streak×twist×wager can compound up to x9.6 uncapped,
      // making the daily leaderboard swing on 1-2 lucky combo rounds rather than
      // overall accuracy. Capping the combined multiplier at x4 keeps the ставка
      // choice meaningful (still up to x4 vs baseline) without letting one question
      // dominate the whole 15-question score.
      let combinedMult = Math.min(streakMult * twistMult * wagerMult, 4);
      // Cringe-max bonus (audit §6): the cringe meter isn't just decorative
      // anymore — riding a streak all the way to max cringe pays an extra
      // +15% on top of the normal streak/twist/wager math while riding a
      // high cringe tier (top two tiers of the run-long meter, not just the
      // single instant it hits 100 — that instant is over almost immediately).
      if(state.cringeLevel >= CRINGE_LEVELS.length-2) combinedMult *= 1.15;
      const gained = Math.round((BASE_POINTS + speedBonus) * combinedMult);
      state.score += gained;
      animateNumber($("scorePill"), state.score, 420);
      bumpScorePill(false);

      if(state.streak >= 2){ showStreakBadge(state.streak); sfxStreak(state.streak); reactQuizMascot("streak"); }
      else reactQuizMascot("correct");
      addCringe(cringeGainForCorrect());
    } else {
      sfxWrong();
      reactQuizMascot("wrong");
      el.classList.add("wrong");
      // Inverse rounds: reaching this branch means the player pressed the
      // one ACTUAL correct answer (anything else would have scored) -- el
      // IS correctPos here, so re-marking it "correct" too would slap both
      // classes on the same button. Show the other three as correct
      // instead, i.e. what they should have pressed.
      if(optsWrap.dataset.inverseMode === "1"){
        [...optsWrap.children].forEach((o,i)=>{ if(i!==correctPos) o.classList.add("correct"); });
      } else {
        [...optsWrap.children][correctPos].classList.add("correct");
      }
      const penalty = computeWagerPenalty(timeLeftPct);
      state.streak = 0;
      state.consecWrong += 1;
      if(state.consecWrong >= 2) state.hadDoubleWrongStreak = true;
      hideStreakBadge();
      addCringe(-15);

      if(penalty > 0 && state.score > 0){
        state.score = Math.max(0, state.score - penalty);
        animateNumber($("scorePill"), state.score, 420);
        bumpScorePill(true);
      }
    }

    // Near-miss feedback (audit §9): a correct answer that only just beat
    // the clock feels different from a comfortable one — call it out so
    // "почти успел" is something the player is told, not just something
    // they infer from the timer bar.
    if(isCorrect && timeLeftPct > 0 && timeLeftPct < 0.12){
      showToast("🔥 На волоске — но успел!");
    }

    setTimeout(nextQuestion, 900);
  }

  // Hard reset — only ever called when a fresh run starts (startGame()).
  // Nothing mid-run should call this; use addCringe() for everything else.
  function resetCringeMeter(){
    state.cringeAccum = 0;
    state.cringeLevel = 0;
    const fill = $("cringeFill");
    fill.className = "cringe-fill";
    fill.style.transform = "scaleX(0)";
    $("cringeLabel").textContent = CRINGE_LEVELS[0].label;
    $("qCard").classList.remove("cringe-max");
  }

  // Redraws the meter from state.cringeAccum and fires the level-up pop /
  // MAX CRINGE event when a threshold is freshly crossed upward. Crossing
  // downward (after a miss, or after the post-MAX decay) never animates —
  // only escalation is an "event".
  function renderCringeMeter(){
    const fill = $("cringeFill");
    const label = $("cringeLabel");
    const row = $("cringeRow");
    const track = row.querySelector(".cringe-track");
    const qcard = $("qCard");

    const pct = Math.max(0, Math.min(1, state.cringeAccum / CRINGE_MAX));
    fill.style.transform = "scaleX("+pct+")";

    let level = 0;
    for(let i=CRINGE_LEVELS.length-1; i>=0; i--){
      if(state.cringeAccum >= CRINGE_LEVELS[i].min){ level = i; break; }
    }
    fill.className = "cringe-fill " + CRINGE_LEVELS[level].cls;
    label.textContent = CRINGE_LEVELS[level].label;
    qcard.classList.toggle("cringe-max", level === CRINGE_LEVELS.length-1);

    if(level > state.cringeLevel){
      row.classList.remove("pop");
      void row.offsetWidth;
      row.classList.add("pop");
      if(level === CRINGE_LEVELS.length-1){
        track.classList.remove("pop-max");
        void track.offsetWidth;
        track.classList.add("pop-max");
        state.reachedCringeMax = true;
        reactQuizMascot("cringeMax");
        sfxCringeMax();
        showToast("💀 МАКС КРИНЖ!");
        // Partial decay so MAX CRINGE stays a rare, memorable spike instead
        // of a state the player just sits in for the rest of the run — but
        // it's a drop, not a wipe, per audit ("не полный reset").
        state.cringeAccum = Math.max(0, CRINGE_MAX - 40);
        setTimeout(renderCringeMeter, 550);
      }
    }
    state.cringeLevel = level;
  }

  // Every correct/wrong/timeout event routes its cringe delta through here.
  // Positive on correct answers (bigger on longer streaks and riskier
  // wagers — going for it is the "cringe" bit), negative and partial on a
  // miss. Clamped 0..100; never auto-resets to 0 outside resetCringeMeter().
  function addCringe(delta){
    state.cringeAccum = Math.max(0, Math.min(CRINGE_MAX, state.cringeAccum + delta));
    renderCringeMeter();
  }
  function cringeGainForCorrect(){
    const streakBonus = Math.min(state.streak, 4) * 2; // longer streak = more cringe built
    const wagerBonus = state.wager === "idiot" ? 6 : state.wager === "risk" ? 3 : 0;
    return 5 + streakBonus + wagerBonus;
  }

  function showStreakBadge(n){
    const b = $("streakBadge");
    b.textContent = "🔥 x"+n;
    b.classList.add("show");
  }
  function hideStreakBadge(){
    $("streakBadge").classList.remove("show");
  }

  function nextQuestion(){
    state.idx += 1;
    if(state.idx >= state.order.length){
      endGame();
    } else {
      renderQuestion();
    }
  }

  function endGame(){
    clearInterval(state.timer);
    state.timer = null;
    hideStreakBadge();

    const isNewBest = state.score > cachedBest;
    if(isNewBest) persistBest(state.score);

    $("statCorrect").textContent = state.correctCount + "/" + state.order.length;
    $("statScore").textContent = "0";
    animateNumber($("statScore"), state.score, 700);
    $("statStreak").textContent = state.maxStreak;

    const ratio = state.correctCount / state.order.length;
    let emoji, title, sub, mascotState;
    if(ratio >= 0.87){ emoji="🧠✨"; title="ГАЛАКТИЧЕСКИЙ МОЗГ"; sub="серьёзно, ты в топе"; mascotState="champion"; }
    else if(ratio >= 0.6){ emoji="🧠"; title="НЕПЛОХО!"; sub="мозг работает на "+Math.round(ratio*100)+"%"; mascotState="idle"; }
    else if(ratio >= 0.35){ emoji="🤔"; title="СРЕДНЕНЬКО"; sub="бывало и хуже, но не сильно"; mascotState="timeout"; }
    else { emoji="🥔"; title="ПОЛНЫЙ ТУПНЯК"; sub="картофель гордился бы тобой"; mascotState="potato"; }

    if(isNewBest && state.score>0){ sub = "НОВЫЙ РЕКОРД! · " + sub; }

    // ---- Progression (audit §4): fold this run into lifetime stats, award
    // XP, check achievements, then show what changed so the player leaves
    // knowing exactly what to chase next time. ----
    const xpQueue = [];
    progress.totalGames += 1;
    progress.bestStreakEver = Math.max(progress.bestStreakEver, state.maxStreak);

    let xpGained = state.correctCount * 10;       // per correct answer
    xpGained += 20;                                 // completing a run
    if(state.mode === "daily") xpGained += 30;       // daily bonus
    if(isNewBest && state.score > 0) xpGained += 50;  // new personal best

    if(ratio === 1) xpGained += unlockAchievement("perfectionist", xpQueue);
    if(state.fastCorrect) xpGained += unlockAchievement("fast_finger", xpQueue);
    if(state.reachedCringeMax) xpGained += unlockAchievement("cringe_king", xpQueue);
    if(state.hadDoubleWrongStreak && ratio >= 0.6) xpGained += unlockAchievement("comeback_kid", xpQueue);
    if(state.idiotWagerCorrect) xpGained += unlockAchievement("potato_gambler", xpQueue);
    if(state.mode === "daily") xpGained += unlockAchievement("daily_grinder", xpQueue);
    if(isNewBest && state.score > 0) xpGained += unlockAchievement("new_record", xpQueue);
    const nowHour = new Date().getHours();
    if(nowHour >= 0 && nowHour < 5) xpGained += unlockAchievement("night_owl", xpQueue);
    if(progress.totalCorrect >= 100) xpGained += unlockAchievement("erudite", xpQueue);

    xpGained = applyXpBoost(xpGained);
    addXp(xpGained, xpQueue, "game");
    persistProgress();
    renderRankPill();

    setMascot("resultMascotImg", "resultMascotFallback", mascotState, emoji);
    $("resultTitle").textContent = title;
    const resultSubEl = $("resultSub");
    resultSubEl.textContent = sub;
    resultSubEl.dataset.baseSub = sub; // read back by handleDailyResult() once the async submit resolves
    $("btn-daily-login").style.display = "none";
    $("challengeText").textContent = "Набери больше "+state.score+" очков, слабо?";
    renderResultProgress(xpGained, xpQueue);

    renderBest();
    const resultsScreenEl = $("screen-results");
    resultsScreenEl.classList.remove("celebrate","slump");
    if(ratio >= 0.6 || isNewBest) resultsScreenEl.classList.add("celebrate");
    else if(ratio < 0.35) resultsScreenEl.classList.add("slump");
    showScreen("results");
    // Daily is consumed only after all questions are completed. Mark it before
    // the asynchronous leaderboard call so network problems cannot enable a
    // second competitive attempt.
    if(state.mode === "daily") markDailyPlayed();
    if(ratio >= 0.6) sfxWin(); // extra "victory feels bigger than a correct answer" beat (audit §7/§9)
    else if(ratio < 0.35) sfxLose();
    if(isNewBest && state.score > 0) musicStingerRecord();
    // QA fix (BUG-02/BUG-03): resultSub (with dataset.baseSub) is on screen
    // now, so it's safe to kick off the real, asynchronous Daily submit —
    // handleDailyResult() only appends the true outcome (sent / not sent /
    // needs login) once the platform actually confirms it, instead of the
    // old unconditional "результат отправлен" claimed before the call even
    // ran.
    if(state.mode === "daily"){
      handleDailyResult(state.score);
    }
    setTimeout(()=>showXpQueue(xpQueue), 500);
    maybeShowInterstitial();
  }

  // Fills in the "what did I improve, what's next" line under the results
  // screen — the whole point of progression per the brief is that a player
  // never just sees "функциональнее", they see concretely what grew.
  function renderResultProgress(xpGained, xpQueue){
    const idx = rankForXp(progress.xp);
    const rank = RANKS[idx];
    const next = RANKS[idx+1];
    const toNext = next ? (next.min - progress.xp) : 0;
    let line = "+" + xpGained + " XP · " + rank.emoji + " " + rank.name;
    line += next ? (" · ещё " + toNext + " XP до «" + next.name + "»") : " · максимальный ранг!";
    if(xpQueue.some(e=>e.type==="achievement")) line += " · новое достижение открыто 🏆";
    $("resultProgressLine").textContent = line;
  }

  // ---------------- SHARE / CHALLENGE ----------------
  function shareChallenge(){
    const text = "Я набрал "+state.score+" очков в ТУПНЯК ("+state.correctCount+"/"+state.order.length+" верно). Слабо повторить?";
    if(navigator.share){
      navigator.share({title:"ТУПНЯК", text: text}).catch(()=>{});
    } else if(navigator.clipboard){
      navigator.clipboard.writeText(text).then(()=>showToast("Скопировано! Кидай другу")).catch(()=>showToast("Не вышло скопировать"));
    } else {
      showToast("Скопируй и отправь другу свой результат!");
    }
  }

  function showToast(msg, opts){
    const t = $("toast");
    t.textContent = msg;
    // QA fix: explicit toggle (not just add) so position always resets for
    // every call — a later plain showToast() can never inherit "pos-top"
    // left over from an earlier {top:true} call.
    t.classList.toggle("pos-top", !!(opts && opts.top));
    t.classList.add("show");
    clearTimeout(t._hideTimer);
    const duration = Math.max(1800, Math.min(4500, msg.length * 55));
    t._hideTimer = setTimeout(()=>t.classList.remove("show"), duration);
  }

  // ---------------- UTIL ----------------
  function escapeHtml(str){
    return String(str).replace(/[&<>"']/g, s=>({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
    }[s]));
  }

  // Restarts a CSS entrance animation on an element (forces reflow).
  // Category badge instead of a literal emoji: an emoji tied to the exact
  // question (e.g. 🐴 next to "which animal sleeps standing") gives the
  // answer away before the player thinks. A category label doesn't.
  const CAT_LABELS = {
    geo:"ГЕО", animals:"ЖИВ", logic:"ЛОГ", math:"МАТ",
    science:"НАУ", food:"ЕДА", knowledge:"ЗНАЙ", vibes:"ЖИЗНЬ"
  };
  // Full names used in the category-mastery screen (progression system).
  const CAT_FULL_NAMES = {
    geo:"География", animals:"Животные", logic:"Логика", math:"Математика",
    science:"Наука", food:"Еда", knowledge:"Общие знания", vibes:"Жизненное"
  };
  // Player avatar (image with graceful emoji fallback), used anywhere a
  // player needs a visual tag: turn banner, score boxes, results, pickmarks.
  function playerAvatarHtml(n, size){
    size = size || 18;
    const fallback = n===1 ? "🩷" : "💜";
    return '<span class="player-avatar-wrap">' +
      '<img src="assets/player-p'+n+'.png" alt="" style="width:'+size+'px;height:'+size+'px;" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'inline\';">' +
      '<span style="display:none;">'+fallback+'</span>' +
    '</span>';
  }

  // Adds a player's mark to an option, grouping multiple marks on
  // the same option (both players picked the same answer) into one
  // right-aligned cluster instead of two independently-margined spans
  // fighting for the same edge.
  function addPickMark(el, playerNum){
    let wrap = el.querySelector(".pickmarks");
    if(!wrap){
      wrap = document.createElement("span");
      wrap.className = "pickmarks";
      el.appendChild(wrap);
    }
    const s = document.createElement("span");
    s.innerHTML = playerAvatarHtml(playerNum, 18);
    wrap.appendChild(s);
  }

  function buildCatBadge(cat){
    const label = CAT_LABELS[cat] || "?";
    return '<div class="cat-badge cat-'+cat+'">' +
      '<img src="assets/cat-'+cat+'.png" alt="" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'inline-block\';">' +
      '<span style="display:none;">'+label+'</span>' +
    '</div>';
  }

  function triggerPop(el){
    el.classList.remove("pop");
    void el.offsetWidth;
    el.classList.add("pop");
  }

  // Animates a number counting up inside el, from its current text to `to`.
  function animateNumber(el, to, duration){
    duration = duration || 450;
    const from = parseInt(el.textContent, 10) || 0;
    if(from === to){ el.textContent = to; return; }
    const start = performance.now();
    function step(now){
      const p = Math.min(1, (now-start)/duration);
      const eased = 1 - Math.pow(1-p, 3);
      el.textContent = Math.round(from + (to-from)*eased);
      if(p < 1) requestAnimationFrame(step);
      else el.textContent = to;
    }
    requestAnimationFrame(step);
  }

  // Game-feel "juice" (audit §9): a quick scale-bump on the score pill every
  // time it changes, colored green for a gain and red for a wager-loss
  // penalty, so a score change is felt in the moment it happens instead of
  // only being noticed via the slowly-counting number.
  function bumpScorePill(isPenalty){
    const el = $("scorePill");
    el.classList.remove("bump","penalty");
    void el.offsetWidth;
    el.classList.add("bump");
    if(isPenalty) el.classList.add("penalty");
    setTimeout(()=>el.classList.remove("bump","penalty"), 380);
  }
  // Same bump, generalized to any card element — used for the Duel score
  // boxes on each reveal, cleared after the animation so the tinted
  // background doesn't stick around outside the reaction beat.
  function bumpScorePillEl(el, wasCorrect){
    if(!el) return;
    el.classList.remove("bump","penalty");
    void el.offsetWidth;
    el.classList.add("bump");
    if(!wasCorrect) el.classList.add("penalty");
    setTimeout(()=>el.classList.remove("bump","penalty"), 320);
  }

  // Sets a mascot illustration by state (assets/mascot-<state>.png).
  // Falls back to an emoji if the asset isn't present yet.
  function setMascot(imgId, fallbackId, mascotState, fallbackEmoji){
    const img = $(imgId);
    const fb = $(fallbackId);
    img.style.display = "block";
    fb.style.display = "none";
    fb.textContent = fallbackEmoji;
    img.src = "assets/mascot-" + mascotState + ".png";
  }

  // Accessibility (audit §10): arrow-key roving focus across the option
  // buttons, on top of the native Tab/Enter/Space that real <button>
  // elements already give for free once .opt stopped being a <div>.
  function wireOptionKeyboardNav(wrap){
    const opts = [...wrap.children];
    opts.forEach((btn, i)=>{
      btn.addEventListener("keydown", (e)=>{
        if(e.key === "ArrowDown" || e.key === "ArrowRight"){
          e.preventDefault();
          (opts[i+1] || opts[0]).focus();
        } else if(e.key === "ArrowUp" || e.key === "ArrowLeft"){
          e.preventDefault();
          (opts[i-1] || opts[opts.length-1]).focus();
        }
      });
    });
  }
  const DUEL_TURN_TIME = 5000; // ms per player's turn to pick
  let duel = {
    order: [],
    idx: 0,
    turn: 1,           // whose turn it currently is: 1 or 2
    turnStartTs: 0,
    timer: null,
    correctPos: null,
    p1Choice: null,     // position picked, or -1 if timed out
    p2Choice: null,
    p1: {score:0, streak:0, correct:0},
    p2: {score:0, streak:0, correct:0}
  };

  // Explicit reset of PER-TURN visual/transient state (audit §9): kept
  // separate from score/streak/correct-count (duel.p1 / duel.p2), which
  // persist across the whole duel. Clears the answer timer and strips any
  // trace an option could carry from a previous turn -- outcome classes,
  // player pick-marks -- so nothing about what Player 1 chose can leak
  // through to Player 2's turn. Single place both the handoff and a fresh
  // question route through, rather than each clearing an ad-hoc subset.
  function resetDuelTurnState(){
    clearInterval(duel.timer);
    duel.timer = null;
    const wrap = $("duelOptionsList");
    [...wrap.children].forEach(el=>{
      el.classList.remove("correct","wrong","locked","dim");
      const marks = el.querySelector(".pickmarks");
      if(marks) marks.remove();
    });
  }

  async function startDuel(){
    // Request fullscreen before awaiting storage so the browser still sees
    // the call as part of the player's tap.
    requestFullscreenIfMobile();
    if(duelStartInProgress) return;
    duelStartInProgress = true;
    const duelBtn = $("btn-duel");
    const duelAgainBtn = $("btn-duel-again");
    const oldDuelText = duelBtn.textContent;
    const oldDuelAgainText = duelAgainBtn.textContent;
    duelBtn.textContent = "ЗАПУСКАЕМ…"; duelBtn.disabled = true;
    duelAgainBtn.disabled = true;
    try{
      if(!(await ensureStorageReady())) return;
      duel.order = buildOrder();
    duel.idx = 0;
    duel.p1 = {score:0, streak:0, correct:0};
    duel.p2 = {score:0, streak:0, correct:0};
      showScreen("duel");
      renderDuelQuestion();
    } finally {
      duelStartInProgress = false;
      duelBtn.disabled = false;
      duelAgainBtn.disabled = false;
      duelBtn.textContent = oldDuelText;
      duelAgainBtn.textContent = oldDuelAgainText;
    }
  }

  function renderDuelQuestion(){
    resetDuelTurnState();
    const item = duel.order[duel.idx];
    duel.turn = 1;
    duel.p1Choice = null;
    duel.p2Choice = null;

    $("duelQCounter").textContent = (duel.idx+1) + "/" + duel.order.length;
    $("duelP1Score").textContent = duel.p1.score;
    $("duelP2Score").textContent = duel.p2.score;
    setMascot("duelMascotImg", "duelMascotFallback", "idle", "🧠"); // reset face for the new question, no bump

    $("duelQCard").innerHTML = buildCatBadge(item.cat) + escapeHtml(item.q);
    triggerPop($("duelQCard"));

    const letters = ["А","Б","В","Г"];
    const idxArr = [0,1,2,3];
    const shuffledIdx = shuffle(idxArr);
    duel.correctPos = shuffledIdx.indexOf(item.a);

    const wrap = $("duelOptionsList");
    wrap.innerHTML = "";
    shuffledIdx.forEach((origIdx, pos)=>{
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "opt";
      btn.setAttribute("aria-label", "Вариант " + letters[pos] + ": " + item.opts[origIdx]);
      btn.innerHTML = '<span class="letter" aria-hidden="true">'+letters[pos]+'</span><span>'+escapeHtml(item.opts[origIdx])+'</span>';
      btn.addEventListener("click", ()=>onDuelPick(pos, btn));
      wrap.appendChild(btn);
    });
    wireOptionKeyboardNav(wrap);

    setDuelTurnBanner(1);
    startDuelTurnTimer();
  }

  function setDuelTurnBanner(turn){
    const b = $("duelTurnBanner");
    if(turn===1){ b.innerHTML = playerAvatarHtml(1,18) + " Ход: Игрок 1"; b.className="duel-turn-banner p1"; }
    else{ b.innerHTML = playerAvatarHtml(2,18) + " Ход: Игрок 2"; b.className="duel-turn-banner p2"; }
  }

  function startDuelTurnTimer(resumeElapsedMs){
    resumeElapsedMs = resumeElapsedMs || 0;
    clearInterval(duel.timer);
    duel.timer = null;
    duel.turnStartTs = performance.now() - resumeElapsedMs;
    const fill = $("duelTimerFill");
    const initialPct = Math.max(0, 1 - resumeElapsedMs/DUEL_TURN_TIME);
    fill.style.background = initialPct < 0.35 ? "var(--red)" : initialPct < 0.6 ? "var(--orange)" : "var(--green)";
    fill.style.transform = "scaleX("+initialPct+")";
    duel.timer = setInterval(()=>{
      const elapsed = performance.now() - duel.turnStartTs;
      const pct = Math.max(0, 1 - elapsed/DUEL_TURN_TIME);
      fill.style.transform = "scaleX("+pct+")";
      if(pct < 0.35) fill.style.background = "var(--red)";
      else if(pct < 0.6) fill.style.background = "var(--orange)";
      if(elapsed >= DUEL_TURN_TIME){
        clearInterval(duel.timer);
        duel.timer = null;
        onDuelTurnTimeout();
      }
    }, 60);
  }

  function onDuelTurnTimeout(){
    if(duel.turn===1){
      if(duel.p1Choice!==null) return;
      duel.p1Choice = -1;
      showHandoff(1, true);
    } else {
      if(duel.p2Choice!==null) return;
      duel.p2Choice = -1;
      revealDuelAnswer();
    }
  }

  function onDuelPick(pos, el){
    if(document.hidden) return;
    sfxClick();
    if(duel.turn===1){
      if(duel.p1Choice!==null) return;
      duel.p1Choice = pos;
      clearInterval(duel.timer);
      duel.timer = null;
      showHandoff(1, false);
    } else {
      if(duel.p2Choice!==null) return;
      duel.p2Choice = pos;
      clearInterval(duel.timer);
      duel.timer = null;
      revealDuelAnswer();
    }
  }

  // Covers the board so the next player can't see what was picked,
  // and forces a deliberate "pass the device" beat.
  function showHandoff(afterTurn, timedOut){
    const overlay = $("duelHandoff");
    setMascot("duelHandoffImg", "duelHandoffFallback", timedOut ? "timeout" : "shh", timedOut ? "⏰" : "🙈");
    // Neutral "pass-and-play pause" copy (follow-up ask): doesn't hint at
    // right/wrong, reads as a break between turns rather than part of a
    // timed answer. Two-line sub-text via <br> to keep this a single
    // existing element rather than adding new DOM structure.
    $("duelHandoffText").textContent = timedOut ? "Игрок 1 не успел!" : "🤫 ОТВЕТ ПРИНЯТ";
    $("duelHandoffSub").innerHTML = "Передай устройство Игроку 2<br>Не подглядывай 👀";
    overlay.classList.add("show");

    $("duelHandoffBtn").onclick = ()=>{
      overlay.classList.remove("show");
      duel.turn = 2;
      setDuelTurnBanner(2);
      resetDuelTurnState();
      startDuelTurnTimer();
    };
  }

  function revealDuelAnswer(){
    clearInterval(duel.timer);
    duel.timer = null;
    const wrap = $("duelOptionsList");
    const opts = [...wrap.children];
    opts.forEach((el,i)=>{
      el.classList.add("locked");
      if(i===duel.correctPos) el.classList.add("correct");
    });

    if(duel.p1Choice!==-1) addPickMark(opts[duel.p1Choice], 1);
    if(duel.p2Choice!==-1) addPickMark(opts[duel.p2Choice], 2);

    // Explicit text summary of the reveal (follow-up ask §3): the colored
    // options + small avatar pick-marks were already correct, but relied on
    // the player visually parsing which option has which mark. Reuses the
    // existing turn-banner element rather than adding new DOM -- it gets
    // naturally overwritten back to "Ход: Игрок 1" by setDuelTurnBanner(1)
    // the next time renderDuelQuestion() runs, so nothing extra to clean up.
    const revealLetters = ["А","Б","В","Г"];
    const p1LetterTxt = duel.p1Choice===-1 ? "—" : revealLetters[duel.p1Choice];
    const p2LetterTxt = duel.p2Choice===-1 ? "—" : revealLetters[duel.p2Choice];
    const banner = $("duelTurnBanner");
    banner.innerHTML = playerAvatarHtml(1,16) + " " + p1LetterTxt + "  ·  " +
      playerAvatarHtml(2,16) + " " + p2LetterTxt + "  ·  ✅ " + revealLetters[duel.correctPos];
    banner.className = "duel-turn-banner reveal";

    const anyoneCorrect = (duel.p1Choice===duel.correctPos) || (duel.p2Choice===duel.correctPos);
    const bothCorrect = (duel.p1Choice===duel.correctPos) && (duel.p2Choice===duel.correctPos);
    if(anyoneCorrect) sfxCorrect(); else sfxWrong();

    const item = duel.order[duel.idx];
    trackCategoryAnswer(item, duel.p1Choice === duel.correctPos);
    trackCategoryAnswer(item, duel.p2Choice === duel.correctPos);

    if(duel.p1Choice === duel.correctPos){
      duel.p1.streak += 1;
      duel.p1.correct += 1;
      const mult = 1 + Math.min(duel.p1.streak-1, 4) * 0.15;
      duel.p1.score += Math.round(BASE_POINTS * mult);
    } else {
      duel.p1.streak = 0;
      if(duel.p1Choice!==-1 && duel.p1Choice!==duel.correctPos) opts[duel.p1Choice].classList.add("wrong");
    }

    if(duel.p2Choice === duel.correctPos){
      duel.p2.streak += 1;
      duel.p2.correct += 1;
      const mult = 1 + Math.min(duel.p2.streak-1, 4) * 0.15;
      duel.p2.score += Math.round(BASE_POINTS * mult);
    } else {
      duel.p2.streak = 0;
      if(duel.p2Choice!==-1 && duel.p2Choice!==duel.correctPos && duel.p2Choice!==duel.p1Choice) opts[duel.p2Choice].classList.add("wrong");
    }

    // Mascot/juice reactions (audit §8/§9): the shared mascot reacts to the
    // shared reveal — best streak between the two players drives both the
    // face and the streak chime, since the board is shown to both at once.
    const bestStreak = Math.max(duel.p1.streak, duel.p2.streak);
    if(bestStreak >= 2){ sfxStreak(bestStreak); reactDuelMascot("streak"); }
    else if(bothCorrect || anyoneCorrect) reactDuelMascot("correct");
    else reactDuelMascot("wrong");

    animateNumber($("duelP1Score"), duel.p1.score, 400);
    animateNumber($("duelP2Score"), duel.p2.score, 400);
    bumpScorePillEl($("duelScoreBoxP1"), duel.p1Choice===duel.correctPos);
    bumpScorePillEl($("duelScoreBoxP2"), duel.p2Choice===duel.correctPos);

    setTimeout(nextDuelQuestion, 1400);
  }

  function nextDuelQuestion(){
    duel.idx += 1;
    if(duel.idx >= duel.order.length){
      endDuel();
    } else {
      renderDuelQuestion();
    }
  }

  function endDuel(){
    clearInterval(duel.timer);
    duel.timer = null;
    const s1 = duel.p1.score, s2 = duel.p2.score;
    // Victory should feel bigger than a tie (audit §7/§9): a decisive result
    // gets the full fanfare, a tie gets a softer, distinct "handshake" chime.
    if(s1 === s2) sfxTie(); else sfxWin();
    $("duelScore1").textContent = "0";
    $("duelScore2").textContent = "0";
    animateNumber($("duelScore1"), s1, 700);
    animateNumber($("duelScore2"), s2, 700);
    $("duelCorrect1").textContent = duel.p1.correct + "/" + duel.order.length + " верно";
    $("duelCorrect2").textContent = duel.p2.correct + "/" + duel.order.length + " верно";

    $("duelBox1").classList.remove("winner");
    $("duelBox2").classList.remove("winner");

    if(s1 === s2){
      $("duelWinnerEmoji").textContent = "🤝";
      $("duelWinnerTitle").textContent = "НИЧЬЯ!";
    } else if(s1 > s2){
      $("duelWinnerEmoji").textContent = "🏆";
      $("duelWinnerTitle").textContent = "ИГРОК 1 ПОБЕДИЛ";
      $("duelBox1").classList.add("winner");
    } else {
      $("duelWinnerEmoji").textContent = "🏆";
      $("duelWinnerTitle").textContent = "ИГРОК 2 ПОБЕДИЛ";
      $("duelBox2").classList.add("winner");
    }

    // Progression (audit §4): a duel round is still a "game" for the shared
    // device profile — both players' correct answers count toward category
    // mastery/lifetime accuracy, and a decisive (non-tie) result unlocks the
    // Duel Champion achievement so Duel mode feeds the same progress arc as
    // Solo/Daily instead of being a dead end for XP.
    const xpQueue = [];
    progress.totalGames += 1;
    progress.totalDuels += 1;
    let xpGained = Math.round((duel.p1.correct + duel.p2.correct) * 5) + 15;
    if(s1 !== s2){
      progress.totalDuelWins += 1;
      xpGained += 25;
      xpGained += unlockAchievement("duel_champion", xpQueue);
    }
    addXp(applyXpBoost(xpGained), xpQueue, "duel");
    persistProgress();
    renderRankPill();

    $("screen-duel-results").classList.toggle("celebrate", s1 !== s2);
    showScreen("duelResults");
    setTimeout(()=>showXpQueue(xpQueue), 500);
    maybeShowInterstitial();
  }

  // ---------------- INIT ----------------
  $("btn-play").addEventListener("click", ()=>startGame(false));
  $("btn-daily").addEventListener("click", ()=>startGame(true));
  $("btn-again").addEventListener("click", ()=>startGame(state.mode==="daily"));
  $("btn-share").addEventListener("click", shareChallenge);
  $("btn-daily-login").addEventListener("click", loginAndSubmitDaily);
  $("btn-duel").addEventListener("click", ()=>startDuel());
  $("btn-duel-again").addEventListener("click", ()=>startDuel());
  $("btn-duel-home").addEventListener("click", ()=>showScreen("start"));
  $("btn-quiz-exit").addEventListener("click", ()=>{
    clearInterval(state.timer); state.timer = null;
    clearTimeout(state.chaosTimeout); state.chaosTimeout = null;
    state.qToken += 1;
    $("twistOverlay").classList.remove("show");
    if(_wagerCleanup) _wagerCleanup();
    showScreen("start");
  });
  $("btn-duel-exit").addEventListener("click", ()=>{
    clearInterval(duel.timer); duel.timer = null;
    $("duelHandoff").classList.remove("show");
    showScreen("start");
  });
  const volSlider = $("volumeSlider");
  volSlider.value = Math.round(volume*100);
  volSlider.style.setProperty("--val", volSlider.value + "%");
  volSlider.addEventListener("input", (e)=>{
    setVolume(parseInt(e.target.value,10)/100);
    e.target.style.setProperty("--val", e.target.value + "%");
  });

  // Independent Music/SFX mute toggles (follow-up ask §3) — persisted via
  // setMusicEnabled/setSfxEnabled, which already write localStorage.
  function renderSoundToggleBtn(btn, enabled, label){
    btn.classList.toggle("off", !enabled);
    btn.setAttribute("aria-pressed", enabled ? "true" : "false");
    btn.textContent = label + (enabled ? "" : " ВЫКЛ");
  }
  const btnToggleMusic = $("btn-toggle-music");
  const btnToggleSfx = $("btn-toggle-sfx");
  renderSoundToggleBtn(btnToggleMusic, musicEnabled, "🔊 Звук");
  renderSoundToggleBtn(btnToggleSfx, sfxEnabled, "🔔 Звуки");
  btnToggleMusic.addEventListener("click", ()=>{
    setMusicEnabled(!musicEnabled);
    renderSoundToggleBtn(btnToggleMusic, musicEnabled, "🔊 Звук");
  });
  btnToggleSfx.addEventListener("click", ()=>{
    const turningOn = !sfxEnabled;
    setSfxEnabled(turningOn);
    renderSoundToggleBtn(btnToggleSfx, sfxEnabled, "🔔 Звуки");
    if(turningOn) sfxClick(); // immediate confirmation that SFX are back on
  });

  // "Ниже есть Дуэль" discoverability hint. Shown specifically when
  // .duel-section isn't fully visible within .start-scroll's viewport yet
  // -- not just "is there any overflow" (the reward-ad button below it can
  // still be clipped on a tall screen even once Duel itself is fully in
  // view, and that shouldn't trigger the hint). Disappears once the player
  // has scrolled far enough to see Duel for themselves.
  const scrollMoreHint = $("scrollMoreHint");
  const startScrollEl = document.querySelector(".start-scroll");
  const duelSectionEl = document.querySelector(".duel-section");
  function updateScrollMoreHint(){
    const scrollRect = startScrollEl.getBoundingClientRect();
    const duelRect = duelSectionEl.getBoundingClientRect();
    const duelFullyVisible = duelRect.top >= scrollRect.top - 1 && duelRect.bottom <= scrollRect.bottom + 1;
    scrollMoreHint.classList.toggle("show", !duelFullyVisible);
  }
  startScrollEl.addEventListener("scroll", updateScrollMoreHint, { passive: true });
  window.addEventListener("resize", updateScrollMoreHint);
  window.addEventListener("orientationchange", ()=>setTimeout(updateScrollMoreHint, 250));
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(updateScrollMoreHint);
  updateScrollMoreHint();

  $("btn-leaderboard").addEventListener("click", ()=>{
    showScreen("leaderboard");
    loadLeaderboard();
  });
  $("btn-lb-back").addEventListener("click", ()=>showScreen("start"));

  $("btn-profile").addEventListener("click", ()=>{
    if(!storageReady){
      showToast("Сохранение ещё загружается…");
      return;
    }
    renderProfile();
    showScreen("profile");
  });
  $("btn-profile-back").addEventListener("click", ()=>showScreen("start"));

  $("btn-reward-ad").addEventListener("click", showRewardedXpBoost);
  updateRewardAdBtn();

  $("btn-rules").addEventListener("click", ()=>{
    showToast("15 вопросов · выбери РИСК или ТУПНЯК перед вопросом ради множителя очков · серия ответов тоже даёт множитель");
  });

  // Light click feedback on any button (also lazily initializes AudioContext
  // on this first genuine user gesture, satisfying browser autoplay policy).
  document.addEventListener("click", (e)=>{
    if(e.target.closest(".btn")) sfxClick();
  }, true);

  renderBest(); // shows "—" until the async load below resolves
  renderRankPill(); // shows rank 1 / 0 XP until the async load below resolves
  refreshDailyDot();

  // Yandex SDK → player identity → cloud/local storage → server-time offset →
  // GameReady → UI. Gameplay launches immediately on the player's tap when
  // storage is still initializing: startGame()/startDuel() await the same
  // initialization promise instead of rejecting the tap, preventing both the
  // original save race and the confusing "storage still loading" dead-end.
  initYandexSDK()
    .then(()=>{ detectLanguage(); renderBest(); renderRankPill(); syncXpBoostFromProgress(); refreshDailyDot(); })
    .catch(e=>console.warn("init chain error:", e));

  // block context menu (Yandex Games requirement, carried over from Едорот)
  document.addEventListener("contextmenu", e=>e.preventDefault());

  // QA fix (BUG-05): extra safety net alongside handleAppHidden() above —
  // covers a straight reload/close that a given browser might not route
  // through visibilitychange first.
  window.addEventListener("beforeunload", flushProgressSave);

})();