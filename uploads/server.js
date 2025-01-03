const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Настройка Multer для загрузки файлов
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Папка для сохранения файлов
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Уникальное имя файла
  },
});

const upload = multer({ storage });

// Статическая папка для фронтенда
app.use(express.static('public'));

// Маршрут для обработки формы
app.post('/open-account', upload.single('cat-photo'), (req, res) => {
  const catName = req.body['cat-name'];
  const catPhoto = req.file;

  if (!catName || !catPhoto) {
    return res.status(400).send('Пожалуйста, заполните все поля.');
  }

  console.log('Имя кота:', catName);
  console.log('Фото кота сохранено:', catPhoto.filename);

  res.send('Счёт успешно открыт! Фото кота и имя получены.');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});