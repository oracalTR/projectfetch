const getData = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Данные из  файла', data);
            const sendData = (url, data) => {
                return fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                    .then(data => console.log('Данные отправленные на сервер', data))
                    .catch('Ошибка отправки данных');
            };
            sendData('https://jsonplaceholder.typicode.com/posts', data);
        })
        .catch('Ошибка получения данных');
};

getData('./db.json');