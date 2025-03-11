let inn = '8617031148';

let addresses = [
    "г. Лянтор, ул. Таежная стр.21",
    "г. Лянтор, ул. Северная, д.6, соор.2",
    "п. Нижнесортымский ул. Автомобилистов 1а",
    "г. Лянтор, ул. Дружбы народов, строение 31",
    "г. Сургут, Нефтеюганское шоссе, 16а",
    "3 км Левобережного подхода к автомобильному мосту через р. Обь",
    "г. Сургут, ул. Югорский тракт, 54",
    "г. Сургут, ул. Югорский тракт, 9А",
    "Сургутский район, пос. Федоровский, промзона, промышленный проезд 7/2",
    "г. Сургут, Ул. Сосновая, 39",
    "г. Сургут, Северный промрайон, возле кольца ГРЭС, ул. Электротехническая, 1а"
]

const translite = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
    'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo',
    'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M',
    'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
    'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch',
    'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
};

function translate(address) {
    return address
        .split('')
        .map(char => translite[char] || char)
        .join('')
        .toUpperCase()
        .replace(/(^[^ ]* )|[ ]+/g, '')
        .replace(/[^A-Z0-9]/g, '');
}

function getPlace(address) {
    const firstPlace = address.split(/[.,]/)[0];
    const place = firstPlace.replace(/^[гп]\.?\s*/, '');
    const transliteratedPlace = translate(place);
    return transliteratedPlace.substring(0, 3);
}

function getSuffix (address) {
    const suffix = address.split(/[.,]/).slice(1).join('');
    const transliteradSuffix = translate(suffix);
    return transliteradSuffix;
}

function generated (address) {
    const code = getPlace(address);
    const suffix = getSuffix(address);
    return `${inn}-${code}-${suffix}`
}

const hostId = addresses.map(generated);

console.log(hostId);