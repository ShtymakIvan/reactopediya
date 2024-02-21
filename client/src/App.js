import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@mui/material';

const styles = {
  articleItem: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  content: {
    fontSize: '16px',
  },
};

function App() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const fetchArticles = async () => {
    const response = await axios.get('/api/articles');
    setArticles(response.data);
  };

  useEffect(() => {
    fetchArticles();
  }, []); // Викликаємо fetchArticles при монтуванні компоненту

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/upload', { title, content }); // Зміна шляху на '/api/upload'
    setTitle('');
    setContent('');
    fetchArticles();
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>Список статей</Typography>
      <ul>
        {articles.map((article) => (
          <li key={article._id} style={styles.articleItem}>
            <Typography variant="h4" style={styles.title}>{article.title}</Typography>
            <Typography style={styles.content}>{article.content}</Typography>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <TextField label="Заголовок" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />
        <TextField label="Текст статті" value={content} onChange={(e) => setContent(e.target.value)} fullWidth multiline />
        <Button type="submit" variant="contained" color="primary">Додати</Button>
      </form>
    </Container>
  );
}

export default App;
