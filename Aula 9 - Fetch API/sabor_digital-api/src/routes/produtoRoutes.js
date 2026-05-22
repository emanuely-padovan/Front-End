const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');


router.get('/', ProdutoController.listar);
router.get('/:id', ProdutoController.buscarPorId);
router.post('/', ProdutoController.cadastrar);
// router.patch('/:id', ProdutoController.atualizarP)
router.put('/:id', ProdutoController.atualizar);
router.delete('/:id', ProdutoController.deletar);

module.exports = router;
