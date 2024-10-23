import { Request, Response } from "express";
import { Combo } from "../../models/Combo";
import { v4 as uuidv4 } from "uuid";

const combos: Combo[] = []; // Array temporal para almacenar los combos

// Crear un nuevo combo
const createCombo = (req: Request, res: Response) => {
  const { comboName, discount, products, customQuantity, manageInventory } = req.body;

  // Validación básica de datos
  if (!comboName || !products || !discount) {
    return res.status(400).json({ message: "Faltan datos necesarios para crear el combo." });
  }

  const newCombo: Combo = {
    id: uuidv4(),
    comboName,
    discount,
    products,
    customQuantity,
    manageInventory,
  };

  combos.push(newCombo); // Guardamos el combo en el array temporal
  return res.status(201).json(newCombo);
};

// Obtener todos los combos
const getAllCombos = (req: Request, res: Response) => {
  return res.status(200).json(combos);
};

// Obtener un combo por ID
const getById = (req: Request, res: Response) => {
  const { id } = req.params;
  const combo = combos.find((c) => c.id === id);

  if (!combo) {
    return res.status(404).json({ message: "Combo no encontrado" });
  }

  return res.status(200).json(combo);
};

// Eliminar un combo por ID
const deleteCombo = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = combos.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Combo no encontrado" });
  }

  combos.splice(index, 1);
  return res.status(200).json({ message: "Combo eliminado correctamente" });
};

// Exportamos el controlador completo
export const ComboController = {
  createCombo,
  getAllCombos,
  getById,
  deleteCombo,
};
