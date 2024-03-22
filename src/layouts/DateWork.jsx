const time = new Date();
const day = time.getDate()
const hours = time.getHours();
const minutes = time.getMinutes();
const mounthNumber = time.getMonth();
const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];

const monthName = months[mounthNumber]

export const calculateSunriceSunsetTime = (sunsetHour, currentHour) => {
    const sunset = parseInt(sunsetHour, 10);
    const current = parseInt(currentHour, 10);

    if (sunset > current) {
        return `через ${sunset - current} ч`;
    } else if (sunset < current) {
        return `${current - sunset} ч назад`;
    } else {
        return 'сейчас';
    }
};


export function increaseTimeByTenHours(time) {
    // Разбиваем строку времени на часы и минуты
    const [hours, minutes] = time.split(':');

    // Парсим часы из строки в целое число
    let parsedHours = parseInt(hours, 10);

    // Если время в формате pm и часы не 12, то прибавляем 12 часов
    if (time.includes('pm') && parsedHours !== 12) {
        parsedHours += 12;
    }

    // Прибавляем 12 часов (или увеличиваем часы на 12)
    parsedHours += 12;

    // Ограничиваем часы до 24 (если прибавлено больше 24, то переходим на следующий день)
    parsedHours %= 24;

    // Возвращаем время в формате HH:MM
    return `${parsedHours.toString().padStart(2, '0')}:${minutes}`;
}




export {months,hours}