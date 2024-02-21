const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 5000;

// Папка для збереження завантажених файлів
const uploadDir = path.join(__dirname, 'uploads');

// Налаштування multer для обробки файлів
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

app.use(express.json());
app.use('/uploads', express.static(uploadDir));

// Роут для завантаження файлів
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Помилка: файл не було завантажено');
  }
  res.send('Файл успішно завантажено');
});

// Роут для додавання статей
app.post('/api/articles', (req, res) => {
  // Отримання даних з запиту
  const { title, content } = req.body;

  // Тут ви можете робити все, що потрібно з отриманими даними
  // Наприклад, збереження в базу даних

  // Повертаємо відповідь клієнту
  res.send('Стаття успішно додана');
});

app.listen(port, () => {
  console.log(`Сервер запущений на порту ${port}`);
});
