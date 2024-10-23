import { Router } from 'express';

const router = Router();

router.post('/create-combo', async (req, res) => {
  const { name, products, discount, customQuantity, manageInventory } = req.body;

  // Aquí harías las llamadas a la API de Tienda Nube para obtener los productos
  // y configurarlos con las reglas del combo sin generar nuevos SKUs.

  const combo = {
    name,
    products: products.map(product => ({
      ...product,
      discountedPrice: product.price * (1 - discount / 100),
    })),
    customQuantity,
    manageInventory,
  };

  // Guardar el combo en la base de datos o realizar las acciones necesarias
  res.status(200).json({ message: 'Combo creado exitosamente', combo });
});

export default router;
