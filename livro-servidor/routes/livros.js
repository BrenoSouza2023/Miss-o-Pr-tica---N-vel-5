const express = require('express');
const router = express.Router();
const LivroDAO = require('./modelo/livro-dao');

router.get('/', async (req, res) => {
  try {
    const livros = await LivroDAO.obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter livros' });
  }
});
router.post('/', async (req, res) => {
  try {
    const novoLivro = await LivroDAO.incluir(req.body);
    res.json({ mensagem: 'Livro incluído com sucesso', livro: novoLivro });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao incluir livro' });
  }
});
router.delete('/:codigo', async (req, res) => {
  const codigoLivro = req.params.codigo;

  try {
    const resultado = await LivroDAO.excluir(codigoLivro);
    if (resultado.deletedCount > 0) {
      res.json({ mensagem: 'Livro excluído com sucesso' });
    } else {
      res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao excluir livro' });
  }
});

module.exports = router;
