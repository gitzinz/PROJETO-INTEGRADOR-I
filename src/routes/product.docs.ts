/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Lista todos os produtos
 *     description: Retorna uma lista de todos os produtos disponíveis no estoque
 *     responses:
 *       200:
 *         description: Lista de produtos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   sku:
 *                     type: string
 *                     example: "PROD123"
 *                   name:
 *                     type: string
 *                     example: "Produto X"
 *                   value:
 *                     type: number
 *                     example: 100.50
 *                   type:
 *                     type: string
 *                     example: "Categoria 1"
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /api/products/{sku}:
 *   get:
 *     summary: Busca um produto pelo SKU
 *     description: Retorna os detalhes de um produto com base no SKU
 *     parameters:
 *       - in: path
 *         name: sku
 *         required: true
 *         description: SKU do produto
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Produto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sku:
 *                   type: string
 *                   example: "PROD123"
 *                 name:
 *                   type: string
 *                   example: "Produto X"
 *                 value:
 *                   type: number
 *                   example: 100.50
 *                 type:
 *                   type: string
 *                   example: "Categoria 1"
 *       404:
 *         description: Produto não encontrado
 */

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Cria um novo produto
 *     description: Cria um novo produto no estoque
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sku:
 *                 type: string
 *                 example: "PROD123"
 *               name:
 *                 type: string
 *                 example: "Produto X"
 *               value:
 *                 type: number
 *                 example: 100.50
 *               type:
 *                 type: string
 *                 example: "Categoria 1"
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sku:
 *                   type: string
 *                   example: "PROD123"
 *                 name:
 *                   type: string
 *                   example: "Produto X"
 *                 value:
 *                   type: number
 *                   example: 100.50
 *                 type:
 *                   type: string
 *                   example: "Categoria 1"
 *       400:
 *         description: Dados inválidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Dados de entrada inválidos"
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Erro ao criar produto"
 */

/**
 * @swagger
 * /api/products/{sku}:
 *   put:
 *     summary: Atualiza um produto pelo SKU
 *     description: Atualiza as informações de um produto existente no estoque com base no SKU fornecido
 *     parameters:
 *       - in: path
 *         name: sku
 *         required: true
 *         description: SKU do produto a ser atualizado
 *         schema:
 *           type: string
 *           example: "PROD123"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sku:
 *                 type: string
 *                 example: "PROD123"
 *               name:
 *                 type: string
 *                 example: "Produto X"
 *               value:
 *                 type: number
 *                 example: 120.50
 *               type:
 *                 type: string
 *                 example: "Categoria 1"
 *     responses:
 *       202:
 *         description: Produto atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sku:
 *                   type: string
 *                   example: "PROD123"
 *                 name:
 *                   type: string
 *                   example: "Produto X"
 *                 value:
 *                   type: number
 *                   example: 120.50
 *                 type:
 *                   type: string
 *                   example: "Categoria 1"
 *       404:
 *         description: Produto não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Produto não encontrado"
 *       500:
 *         description: Erro interno ao tentar atualizar o produto
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Erro ao atualizar produto"
 */

/**
 * @swagger
 * /api/products/{sku}:
 *   delete:
 *     summary: Deleta um produto pelo SKU
 *     description: Exclui um produto do estoque com base no SKU fornecido
 *     parameters:
 *       - in: path
 *         name: sku
 *         required: true
 *         description: SKU do produto a ser excluído
 *         schema:
 *           type: string
 *           example: "PROD123"
 *     responses:
 *       204:
 *         description: Produto excluído com sucesso
 *       404:
 *         description: Produto não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Produto não encontrado"
 *       500:
 *         description: Erro interno ao tentar excluir o produto
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Erro ao excluir produto"
 */
