const Book = require('./models/book');

class BookController {
  static async getAllBooks(req, res) {
    try {
      const books = await Book.getAll();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при получении списка книг.' });
    }
  }

  static async getBookById(req, res) {
    try {
      const book = await Book.getById(req.params.id);
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при получении книги.' });
    }
  }

  static async createBook(req, res) {
    const { title, author } = req.body;
    const book = { title, author };

    try {
      const createdBook = await Book.create(book);
      res.json(createdBook);
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при создании книги.' });
    }
  }

  static async updateBook(req, res) {
    const { title, author } = req.body;
    const book = { title, author };

    try {
      await Book.update(req.params.id, book);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при обновлении книги.' });
    }
  }

  static async deleteBook(req, res) {
    try {
      await Book.delete(req.params.id);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при удалении книги.' });
    }
  }
}

module.exports = BookController;
