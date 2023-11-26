const banco = require('./conexao');
const Schema = banco.Schema;

const LivroSchema = new Schema({ 
  _id:banco.Schema.Types.Objectld,  
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String]
});

const Livro = banco.model('livros', LivroSchema);

module.exports = Livro;