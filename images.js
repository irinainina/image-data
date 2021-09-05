const images = [
  {
    author: 'Исаак Левитан',
    name: 'Март',
    year: '1895',
    imageNum: '0'
  },
  {
    author: 'Иван Айвазовский',
    name: 'Девятый вал',
    year: '1850',
    imageNum: '1'
  },
  {
    author: 'Илья Репин',
    name: 'Бурлаки на Волге',
    year: '1873',
    imageNum: '2'
  },
  {
    author: 'Тициан',
    name: 'Кающаяся Марина Магдалина',
    year: '1565',
    imageNum: '3'
  },
  {
    author: 'Леонардо да Винчи',
    name: 'Дама с горностаем',
    year: '1490',
    imageNum: '4'
  },
  {
    author: 'Рембрандт',
    name: 'Христос и грешница',
    year: '1644',
    imageNum: '5'
  },
  {
    author: 'Рафаэль',
    name: 'Мадонна Бельведерская',
    year: '1506',
    imageNum: '6'
  },
  {
    author: 'Веронезе',
    name: 'Пир в доме Левия',
    year: '1563',
    imageNum: '7'
  },
  {
    author: 'Илья Репин',
    name: 'Садко',
    year: '1876',
    imageNum: '8'
  },
  {
    author: 'Иван Богданов',
    name: 'Новичок',
    year: '1893',
    imageNum: '9'
  },
  {
    author: 'Винсент ван Гог',
    name: 'Звёздная ночь',
    year: '1889',
    imageNum: '10'
  },
  {
    author: 'Рембрандт',
    name: 'Пир Вальтасара',
    year: '1635',
    imageNum: '11'
  },
  {
    author: 'Иван Крамской',
    name: 'Неизвестная',
    year: '1883',
    imageNum: '12'
  },
  {
    author: 'Сандро Боттичелли',
    name: 'Рождение Венеры',
    year: '1486',
    imageNum: '13'
  },
  {
    author: 'Иван Шишкин',
    name: 'Утро в сосновом лесу',
    year: '1889',
    imageNum: '14'
  },
  {
    author: 'Рембрандт',
    name: 'Ночной дозор',
    year: '1642',
    imageNum: '15'
  },
  {
    author: 'Леонардо да Винчи',
    name: 'Тайная вечеря',
    year: '1498',
    imageNum: '16'
  },
  {
    author: 'Сальвадор Дали',
    name: 'Постоянство памяти',
    year: '1931',
    imageNum: '17'
  },
  {
    author: 'Поль Гоген',
    name: 'Откуда мы пришли? Кто мы? Куда мы идём?',
    year: '1898',
    imageNum: '18'
  },
  {
    author: 'Эжен Делакруа',
    name: 'Свобода, ведущая народ',
    year: '1830',
    imageNum: '19'
  },
  {
    author: 'Михаил Врубель',
    name: 'Демон сидящий',
    year: '1890',
    imageNum: '20'
  },
  {
    author: 'Эдуар Мане',
    name: 'Бар в «Фоли-Бержер»',
    year: '1882',
    imageNum: '21'
  },
  {
    author: 'Тициан',
    name: 'Любовь земная и Любовь небесная',
    year: '1516',
    imageNum: '22'
  },
  {
    author: 'Михаил Нестеров',
    name: 'Видение отроку Варфоломею',
    year: '1890',
    imageNum: '23'
  },
  {
    author: 'Питер Брейгель',
    name: 'Притча о слепых',
    year: '1568',
    imageNum: '24'
  },
  {
    author: 'Виктор Васнецов',
    name: 'Аленушка',
    year: '1881',
    imageNum: '25'
  },
  {
    author: 'Карл Брюллов',
    name: 'Последний день Помпеи',
    year: '1833',
    imageNum: '26'
  },
  {
    author: 'Пабло Пикассо',
    name: 'Девочка на шаре',
    year: '1905',
    imageNum: '27'
  },
  {
    author: 'Эдгар Дега',
    name: 'Голубые танцовщицы',
    year: '1897',
    imageNum: '28'
  },
  {
    author: 'Леонардо да Винчи',
    name: 'Мона Лиза',
    year: '1505',
    imageNum: '29'
  },
  {
    author: 'Микеланджело',
    name: 'Сотворение Адама',
    year: '1511',
    imageNum: '30'
  },
  {
    author: 'Ян Вермеер',
    name: 'Девушка с жемчужной серёжкой',
    year: '1665',
    imageNum: '31'
  },
  {
    author: 'Василий Суриков',
    name: 'Боярыня Морозова',
    year: '1887',
    imageNum: '32'
  },
  {
    author: 'Виктор Васнецов',
    name: 'Богатыри',
    year: '1898',
    imageNum: '33'
  },
  {
    author: 'Андрей Рублев',
    name: 'Троица',
    year: '1411',
    imageNum: '34'
  },
  {
    author: 'Пабло Пикассо',
    name: 'Герника',
    year: '1937',
    imageNum: '35'
  },
  {
    author: 'Иероним Босх',
    name: 'Сад земных наслаждений',
    year: '1510',
    imageNum: '36'
  },
  {
    author: 'Эдвард Мунк',
    name: 'Крик',
    year: '1893',
    imageNum: '37'
  },
  {
    author: 'Марк Шагал',
    name: 'Прогулка',
    year: '1918',
    imageNum: '38'
  },
  {
    author: 'Александр Иванов',
    name: 'Явление Христа народу',
    year: '1857',
    imageNum: '39'
  },
  {
    author: 'Павел Федотов',
    name: 'Сватовство майора',
    year: '1852',
    imageNum: '40'
  },
  {
    author: 'Василий Верещагин',
    name: 'Апофеоз войны',
    year: '1817',
    imageNum: '41'
  },
  {
    author: 'Франсуа Буше',
    name: 'Купание Дианы',
    year: '1742',
    imageNum: '42'
  },
  {
    author: 'Питер Брейгель',
    name: 'Охотники на снегу',
    year: '1565',
    imageNum: '43'
  },
  {
    author: 'Караваджо',
    name: 'Лютнист',
    year: '1596',
    imageNum: '44'
  },
  {
    author: 'Рембрандт',
    name: 'Даная',
    year: '1647',
    imageNum: '45'
  },
  {
    author: 'Джованни Беллини',
    name: 'Пир богов',
    year: '1514',
    imageNum: '46'
  },
  {
    author: 'Ян ван Эйк',
    name: 'Портрет четы Арнольфини',
    year: '1434',
    imageNum: '47'
  },
  {
    author: 'Сандро Боттичелли',
    name: 'Весна',
    year: '1482',
    imageNum: '48'
  },
  {
    author: 'Леонардо да Винчи',
    name: 'Благовещение',
    year: '1475',
    imageNum: '49'
  },
  {
    author: 'Альбрехт Дюрер',
    name: 'Праздник четок',
    year: '1506',
    imageNum: '50'
  },
  {
    author: 'Леонардо да Винчи',
    name: 'Мадонна Литта',
    year: '1491',
    imageNum: '51'
  },
  {
    author: 'Рафаэль',
    name: 'Дама с единорогом',
    year: '1506',
    imageNum: '52'
  },
  {
    author: 'Илья Репин',
    name: 'Иван Грозный и сын его Иван',
    year: '1885',
    imageNum: '53'
  },
  {
    author: 'Рафаэль',
    name: 'Сикстинская Мадонна',
    year: '1520',
    imageNum: '54'
  },
  {
    author: 'Тициан',
    name: 'Динарий Кесаря',
    year: '1516',
    imageNum: '55'
  },
  {
    author: 'Илья Репин',
    name: 'Вечорници',
    year: '1881',
    imageNum: '56'
  },
  {
    author: 'Тициан',
    name: 'Вакханалия',
    year: '1526',
    imageNum: '57'
  },
  {
    author: 'Рафаель',
    name: 'Мадонна в кресле',
    year: '1514',
    imageNum: '58'
  },
  {
    author: 'Веласкес',
    name: 'Менины',
    year: '1656',
    imageNum: '59'
  },
  {
    author: 'Альбрехт Дюрер',
    name: 'Адам и Ева',
    year: '1507',
    imageNum: '60'
  },
  {
    author: 'Илья Репин',
    name: 'Проводы новобранца',
    year: '1879',
    imageNum: '61'
  },
  {
    author: 'Веронезе',
    name: 'Марс и Венера',
    year: '1560',
    imageNum: '62'
  },
  {
    author: 'Виктор Васнецов',
    name: 'Иван-царевич на Сером Волке',
    year: '1888',
    imageNum: '63'
  },
  {
    author: 'Эль Греко',
    name: 'Апостолы Петр и Павел',
    year: '1592',
    imageNum: '64'
  },
  {
    author: 'Рембрандт',
    name: 'Автопортрет с Саскией',
    year: '1635',
    imageNum: '65'
  },
  {
    author: 'Илья Репин',
    name: 'Крестный ход',
    year: '1883',
    imageNum: '66'
  },
  {
    author: 'Веласкес',
    name: 'Бахус',
    year: '1628',
    imageNum: '67'
  },
  {
    author: 'Эль Греко',
    name: 'Изгнание торгующих из храма',
    year: '1600',
    imageNum: '68'
  },
  {
    author: 'Сальвадор Дали',
    name: 'Сон, вызванный полётом пчелы вокруг граната, за секунду до пробуждения',
    year: '1944',
    imageNum: '69'
  },
  {
    author: 'Винсент ван Гог',
    name: 'Ирисы',
    year: '1889',
    imageNum: '70'
  },
  {
    author: 'Веласкес',
    name: 'Венера с зеркалом',
    year: '1651',
    imageNum: '71'
  },
  {
    author: 'Тициан',
    name: 'Конный портрет Карла V',
    year: '1548',
    imageNum: '72'
  },
  {
    author: 'Питер Брейгель',
    name: 'Избиение младенцев',
    year: '1567',
    imageNum: '73'
  },
  {
    author: 'Веласкес',
    name: 'Сдача Бреды',
    year: '1635',
    imageNum: '74'
  },
  {
    author: 'Бартоломео Мурильо',
    name: 'Мадонна с четками',
    year: '1655',
    imageNum: '75'
  },
  {
    author: 'Бартоломео Мурильо',
    name: 'Явление и дар Богородицы',
    year: '1655',
    imageNum: '76'
  },
  {
    author: 'Бартоломео Мурильо',
    name: 'Мальчик с собакой',
    year: '1650',
    imageNum: '77'
  },
  {
    author: 'Бартоломео Мурильо',
    name: 'Непорочное зачатие',
    year: '1678',
    imageNum: '78'
  },
  {
    author: 'Никола Пуссен',
    name: 'Пейзаж с Полифемом',
    year: '1649',
    imageNum: '79'
  },
  {
    author: 'Ян Вермеер "Служанка с кувшином молока',
    name: 'Молочница',
    year: '1660',
    imageNum: '80'
  },
  {
    author: 'Жан Этьен Лиотар',
    name: 'Шоколадница',
    year: '1745',
    imageNum: '81'
  },
  {
    author: 'Жан Фрагонар',
    name: 'Качели',
    year: '1767',
    imageNum: '82'
  },
  {
    author: 'Жан Фрагонар',
    name: 'Поцелуй украдкой',
    year: '1788',
    imageNum: '83'
  },
  {
    author: 'Гейнсборо',
    name: 'Дама в голубом',
    year: '1780',
    imageNum: '84'
  },
  {
    author: 'Жан Батист Грёз',
    name: 'Избалованное дитя',
    year: '1765',
    imageNum: '85'
  },
  {
    author: 'Жан Батист Грёз',
    name: 'Деревенская помолвка',
    year: '1761',
    imageNum: '86'
  },
  {
    author: 'Владимир Боровиковский',
    name: 'Портрет Лопухиной',
    year: '1797',
    imageNum: '87'
  },
  {
    author: 'Джон Констебл',
    name: 'Вид на собор в Солсбери из епископского сада',
    year: '1823',
    imageNum: '88'
  },
  {
    author: 'Василий Тропинин',
    name: 'Кружевница',
    year: '1823',
    imageNum: '89'
  },
  {
    author: 'Алексей Венецианов',
    name: 'На жатве. Лето',
    year: '1827',
    imageNum: '90'
  },
  {
    author: 'Алексей Венециановн',
    name: 'Спящий пастушок',
    year: '1826',
    imageNum: '91'
  },
  {
    author: 'Алексей Венецианов',
    name: 'На пашне. Весна',
    year: '1820',
    imageNum: '92'
  },
  {
    author: 'Карл Брюллов',
    name: 'Итальянский полдень',
    year: '1827',
    imageNum: '93'
  },
  {
    author: 'Карл Брюллов',
    name: 'Всадница',
    year: '1832',
    imageNum: '94'
  },
  {
    author: 'Василий Перов',
    name: 'Приезд гувернантки в купеческий дом',
    year: '1866',
    imageNum: '95'
  },
  {
    author: 'Василий Перов',
    name: 'Тройка',
    year: '1866',
    imageNum: '96'
  },
  {
    author: 'Василий Перов',
    name: 'Сельский крестный ход на Пасхе',
    year: '1861',
    imageNum: '97'
  },
  {
    author: 'Василий Перов',
    name: 'Птицелов',
    year: '1870',
    imageNum: '98'
  },
  {
    author: 'Василий Перов',
    name: 'Охотники на привале',
    year: '1871',
    imageNum: '99'
  },
  {
    author: 'Алексей Саврасов',
    name: 'Грачи прилетели',
    year: '1871',
    imageNum: '100'
  },
  {
    author: 'Фёдор Васильев',
    name: 'Мокрый луг',
    year: '1872',
    imageNum: '101'
  },
  {
    author: 'Константин Маковский',
    name: 'Дети, бегущие от грозы',
    year: '1872',
    imageNum: '102'
  },
  {
    author: 'Константин Маковский',
    name: 'Боярский свадебный пир',
    year: '1883',
    imageNum: '103'
  },
  {
    author: 'Константин Маковский',
    name: 'Гадание',
    year: '1890',
    imageNum: '104'
  },
  {
    author: 'Константин Маковский',
    name: 'Портрет графини Софьи',
    year: '1890',
    imageNum: '105'
  },
  {
    author: 'Константин Маковский',
    name: 'Перемещение ковра Мухаммеда из Мекки в Каир',
    year: '1875',
    imageNum: '106'
  },
  {
    author: 'Василий Поленов',
    name: 'Деревня Окулова гора',
    year: '1860',
    imageNum: '107'
  },
  {
    author: 'Василий Поленов',
    name: 'Переправа через реку',
    year: '1872',
    imageNum: '108'
  },
  {
    author: 'Василий Поленов',
    name: 'В парке',
    year: '1874',
    imageNum: '109'
  },
  {
    author: 'Василий Поленов',
    name: 'Московский дворик',
    year: '1877',
    imageNum: '110'
  },
  {
    author: 'Василий Поленов',
    name: 'Бабушкин сад',
    year: '1878',
    imageNum: '111'
  },
  {
    author: 'Пьер Огюст Ренуар',
    name: 'Мост в Шату',
    year: '1875',
    imageNum: '112'
  },
  {
    author: 'Пьер Огюст Ренуар',
    name: 'Прогулка в Булонском лесу',
    year: '1873',
    imageNum: '113'
  },
  {
    author: 'Пьер Огюст Ренуар',
    name: 'Портрет Жанны Самари',
    year: '1877',
    imageNum: '114'
  },
  {
    author: 'Пьер Огюст Ренуар',
    name: 'Завтрак гребцов',
    year: '1881',
    imageNum: '115'
  },
  {
    author: 'Пьер Огюст Ренуар',
    name: 'Зонтики',
    year: '1886',
    imageNum: '116'
  },
  {
    author: 'Архип Куинджи',
    name: 'На острове Валааме',
    year: '1873',
    imageNum: '117'
  },
  {
    author: 'Архип Куинджи',
    name: 'Украинская ночь',
    year: '1876',
    imageNum: '118'
  },
  {
    author: 'Архип Куинджи',
    name: 'Берёзовая роща',
    year: '1879',
    imageNum: '119'
  },
  {
    author: 'Архип Куинджи',
    name: 'Лунная ночь на Днепре',
    year: '1880',
    imageNum: '1201'
  },
  {
    author: 'Василий Суриков',
    name: 'Утро стрелецкой казни',
    year: '1881',
    imageNum: '121'
  },
  {
    author: 'Василий Суриков',
    name: 'Взятие снежного городка',
    year: '1891',
    imageNum: '122'
  },
  {
    author: 'Василий Суриков',
    name: 'Покорение Сибири Ермаком Тимофеевичем',
    year: '1895',
    imageNum: '123'
  },
  {
    author: 'Василий Суриков',
    name: 'Переход Суворова через Альпы',
    year: '1899',
    imageNum: '124'
  },
  {
    author: 'Валентин Серов',
    name: 'Девочка с персиками',
    year: '1887',
    imageNum: '125'
  },
  {
    author: 'Исаак Левитан',
    name: 'Над вечным покоем',
    year: '1894',
    imageNum: '126'
  },
  {
    author: 'Илья Репин',
    name: 'Не ждали',
    year: '1888',
    imageNum: '127'
  },
  {
    author: 'Исаак Левитан',
    name: 'Золотая осень',
    year: '1895',
    imageNum: '128'
  },
  {
    author: 'Иван Шишкин',
    name: 'Ручей в берёзовом лесу',
    year: '1883',
    imageNum: '129'
  },
  {
    author: 'Иван Шишкин',
    name: 'Рожь',
    year: '1878',
    imageNum: '130'
  },
  {
    author: 'Иван Шишкин',
    name: 'Корабельная роща',
    year: '1898',
    imageNum: '131'
  },
  {
    author: 'Александра Маковский',
    name: 'Надоела',
    year: '1897',
    imageNum: '132'
  },
  {
    author: 'Франсуа Буше',
    name: 'Четыре сезона - Весна',
    year: '1755',
    imageNum: '133'
  },
  {
    author: 'Виктор Васнецов',
    name: 'Витязь на распутье',
    year: '1878',
    imageNum: '134'
  },
  {
    author: 'Виктор Васнецов',
    name: 'Ковер-самолёт',
    year: '1880',
    imageNum: '135'
  },
  {
    author: 'Виктор Васнецов',
    name: 'Три царевны подземного царства',
    year: '1884',
    imageNum: '136'
  },
  {
    author: 'Илья Репин',
    name: 'Приготовление к экзамену',
    year: '1864',
    imageNum: '137'
  },
  {
    author: 'Виктор Васнецов',
    name: 'Царь Иван Васильевич Грозный',
    year: '1896',
    imageNum: '138'
  },
  {
    author: 'Николай Богданов-Бельский',
    name: 'Устный счёт',
    year: '1895',
    imageNum: '139'
  },
  {
    author: 'Николай Богданов-Бельский',
    name: 'У дверей школы',
    year: '1897',
    imageNum: '140'
  },
  {
    author: 'Эдуард Мане',
    name: 'Женщина с кувшином',
    year: '1858',
    imageNum: '141'
  },
  {
    author: 'Клод Лоррен',
    name: 'Отплытие святой Урсулы',
    year: '1614',
    imageNum: '142'
  },
  {
    author: 'Карл Лемох',
    name: 'Варька',
    year: '1893',
    imageNum: '143'
  },
  {
    author: 'Василий тропинин',
    name: 'Девушка с горшком роз',
    year: '1850',
    imageNum: '144'
  },
  {
    author: 'Гюстав Курбе',
    name: 'Мастерская художника',
    year: '1855',
    imageNum: '145'
  },
  {
    author: 'Иван Богданов',
    name: 'За расчётом',
    year: '1890',
    imageNum: '146'
  },
  {
    author: 'Илья Репин',
    name: 'Летний пейзаж',
    year: '1879',
    imageNum: '147'
  },
  {
    author: 'Рене Магритт',
    name: 'Сын человеческий',
    year: '1964',
    imageNum: '148'
  },
  {
    author: 'Веласкес',
    name: 'Вилла Медичи в Риме. Полдень',
    year: '1630',
    imageNum: '149'
  },
  {
    author: 'Казимир Малевич',
    name: 'Черный квадрат',
    year: '1915',
    imageNum: '150'
  },
  {
    author: 'Пьер Огюст Ренуар',
    name: 'Две сестры',
    year: '1881',
    imageNum: '151'
  },
  {
    author: 'Альбрехт Дюрер',
    name: 'Праздник венков из роз',
    year: '1506',
    imageNum: '152'
  },
  {
    author: 'Жан-Леон Жером',
    name: 'Бой гладиаторов',
    year: '1872',
    imageNum: '153'
  },
  {
    author: 'Иероним Босх',
    name: 'Страшный суд',
    year: '1504',
    imageNum: '154'
  },
  {
    author: 'Анри Руссо',
    name: 'Спящая цыганка',
    year: '1897',
    imageNum: '155'
  },
  {
    author: 'Василий Кандинский',
    name: 'Композиция VIII',
    year: '1923',
    imageNum: '156'
  },
  {
    author: 'Жак-Луи Давид',
    name: 'Клятва Горациев',
    year: '1784',
    imageNum: '157'
  },
  {
    author: 'Караваджо',
    name: 'Отдых на пути в Египет',
    year: '1596',
    imageNum: '158'
  },
  {
    author: 'Винсент ван Гог',
    name: 'Подсолнухи',
    year: '1888',
    imageNum: '159'
  },
  {
    author: 'Илья Репин',
    name: 'Запорожцы',
    year: '1891',
    imageNum: '160'
  },
  {
    author: 'Веласкес',
    name: 'Кузница вулкана',
    year: '1630',
    imageNum: '161'
  },
  {
    author: 'Джон Уильям Уотерхаус',
    name: 'Волшебница Шалот',
    year: '1888',
    imageNum: '162'
  },
  {
    author: 'Густав Климт',
    name: 'Золотая Адель',
    year: '1907',
    imageNum: '163'
  },
  {
    author: 'Анри Матисс',
    name: 'Семейный портрет',
    year: '1911',
    imageNum: '164'
  },
  {
    author: 'Франциско Гоя',
    name: 'Расстрел повстанцев',
    year: '1808',
    imageNum: '165'
  },
  {
    author: 'Анри де Тулуз-Лотрек',
    name: 'Угол Мулен де ла Галет',
    year: '1892',
    imageNum: '166'
  },
  {
    author: 'Эдгар Дега',
    name: 'Танцовщицы у станка',
    year: '1877',
    imageNum: '167'
  },
  {
    author: 'Пабло Пикассо',
    name: 'Авиньонские девицы',
    year: '1907',
    imageNum: '168'
  },
  {
    author: 'Веласкес',
    name: 'Поклонение волхвов',
    year: '1619',
    imageNum: '169'
  },
  {
    author: 'Питер Пауль Рубенс',
    name: 'Похищение Орфии Бореем',
    year: '1615',
    imageNum: '170'
  },
  {
    author: 'Жан Энгр',
    name: 'Большая одалиска',
    year: '1814',
    imageNum: '171'
  },
  {
    author: 'Луи Лагрене',
    name: 'Марс и Венера',
    year: '1770',
    imageNum: '172'
  },
  {
    author: 'Пьер Огюст Ренуар',
    name: 'Бал в Мулен де ла Галетт',
    year: '1876',
    imageNum: '173'
  },
  {
    author: 'Караваджо',
    name: 'Обращение Савла',
    year: '1601',
    imageNum: '174'
  },
  {
    author: 'Антонис ван Дейк',
    name: 'Самсон и Далила',
    year: '1628',
    imageNum: '175'
  },
  {
    author: 'Адольф Вильям Бугро',
    name: 'Волна',
    year: '1896',
    imageNum: '176'
  },
  {
    author: 'Франческо Баккьякка',
    name: 'Мадонна с младенцем',
    year: '1520',
    imageNum: '177'
  },
  {
    author: 'Вильгельм фон Каульбах',
    name: 'Разрушение Иерусалима',
    year: '1846',
    imageNum: '178'
  },
  {
    author: 'Рафаэль',
    name: 'Триумф Галатеи',
    year: '1512',
    imageNum: '179'
  },
  {
    author: 'Анри Матисс',
    name: 'Танец',
    year: '1910',
    imageNum: '180'
  },
  {
    author: 'Рембрандт',
    name: 'Похищение Европы',
    year: '1632',
    imageNum: '181'
  },
  {
    author: 'Веласкес',
    name: 'Инфанта Маргарита',
    year: '1654',
    imageNum: '182'
  },
  {
    author: 'Рафаэль',
    name: 'Мадонна с розой',
    year: '1518',
    imageNum: '183'
  },
  {
    author: 'Пьер Огюст Ренуар',
    name: 'Большие купальщицы',
    year: '1887',
    imageNum: '184'
  },
  {
    author: 'Питер Брейгель',
    name: 'Фламандские пословицы',
    year: '1559',
    imageNum: '185'
  },
  {
    author: 'Эдуард Мане',
    name: 'Ланч на траве',
    year: '1863',
    imageNum: '186'
  },
  {
    author: 'Тициан',
    name: 'Саломея',
    year: '1515',
    imageNum: '187'
  },
  {
    author: 'Адольф Вильям Бугро',
    name: 'Девушка и Амур',
    year: '1880',
    imageNum: '188'
  },
  {
    author: 'Ян Вермеер',
    name: 'Хозяйка и служанка',
    year: '1667',
    imageNum: '189'
  },
  {
    author: 'Эдвард Мунк',
    name: 'Мадонна',
    year: '1894',
    imageNum: '190'
  },
  {
    author: 'Веронезе',
    name: 'Брак в Кане Галилейской',
    year: '1562',
    imageNum: '191'
  },
  {
    author: 'Теодор Жерико',
    name: 'Плот "Медузы"',
    year: '1819',
    imageNum: '192'
  },
  {
    author: 'Кузьма Петров-Водкин',
    name: 'Купание красного коня',
    year: '1912',
    imageNum: '193'
  },
  {
    author: 'Марк Шагал',
    name: 'Я и деревня',
    year: '1911',
    imageNum: '194'
  },
  {
    author: 'Поль Деларош',
    name: 'Казнь Джейн Грей',
    year: '1833',
    imageNum: '195'
  },
  {
    author: 'Корреджо',
    name: 'Даная',
    year: '1530',
    imageNum: '196'
  },
  {
    author: 'Питер Пауль Рубенс',
    name: 'Похищение дочерей Левкиппа',
    year: '1618',
    imageNum: '197'
  },
  {
    author: 'Пьер Огюст Ренуар',
    name: 'Две девушки',
    year: '1892',
    imageNum: '198'
  },
  {
    author: 'Франсуа Буше',
    name: 'Венера, утешающая Амура',
    year: '1751',
    imageNum: '199'
  },
  {
    author: 'Густав Климт',
    name: 'Поцелуй',
    year: '1908',
    imageNum: '200'
  }
];

export default images;
