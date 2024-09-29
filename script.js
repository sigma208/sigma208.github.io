document.addEventListener('DOMContentLoaded', function() {
    const videoList = document.getElementById('video-list');

    // Пример данных для видео
    const videos = [
        {
            title: 'Видео 1',
            thumbnail: 'https://avatars.mds.yandex.net/i?id=81578aa6d12fdd408f0ceb506702b71124cb5f5f-11917684-images-thumbs&n=13',
            link: 'video.html'
        },
        {
            title: 'Видео 2',
            thumbnail: 'https://avatars.mds.yandex.net/i?id=81578aa6d12fdd408f0ceb506702b71124cb5f5f-11917684-images-thumbs&n=13',
            link: 'video.html'
        },
        {
            title: 'Видео 3',
            thumbnail: 'https://avatars.mds.yandex.net/i?id=81578aa6d12fdd408f0ceb506702b71124cb5f5f-11917684-images-thumbs&n=13',
            link: 'video.html'
        }
    ];

    // Добавление видео на страницу
    videos.forEach(video => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');

        a.href = video.link;
        img.src = video.thumbnail;
        img.alt = video.title;

        a.appendChild(img);
        li.appendChild(a);
        videoList.appendChild(li);
    });
});