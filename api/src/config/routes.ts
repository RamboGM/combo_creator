import { Router } from "express";
import passport from "passport";

import { AuthenticationController } from "@features/auth";
import { ProductController, ComboController } from "@features/product"; // Importar ComboController

const routes = Router();

// Rutas de autenticación
routes.get("/auth/install", AuthenticationController.install);

// Rutas de productos
routes.post(
  "/products",
  passport.authenticate("jwt", { session: false }),
  ProductController.create
);

routes.get(
  "/products/total",
  passport.authenticate("jwt", { session: false }),
  ProductController.getTotal
);

routes.get(
  "/products",
  passport.authenticate("jwt", { session: false }),
  ProductController.getAll
);

routes.delete(
  "/products/:id",
  passport.authenticate("jwt", { session: false }),
  ProductController.delete
);

// Rutas de creación de combos
routes.post(
  "/combos",
  passport.authenticate("jwt", { session: false }), // Protección con JWT
  ComboController.createCombo // Controlador de creación de combos
);

// Ruta para obtener todos los combos
routes.get(
  "/combos",
  passport.authenticate("jwt", { session: false }), // Protección con JWT
  ComboController.getAllCombos // Controlador para obtener todos los combos
);

// Ruta para obtener un combo por ID
routes.get(
  "/combos/:id",
  passport.authenticate("jwt", { session: false }), // Protección con JWT
  ComboController.getById // Controlador para obtener un combo por ID
);

// Ruta para eliminar un combo por ID
routes.delete(
  "/combos/:id",
  passport.authenticate("jwt", { session: false }), // Protección con JWT
  ComboController.deleteCombo // Controlador para eliminar un combo por ID
);

export default routes;