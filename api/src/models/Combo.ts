export interface Combo {
  id: string;            // UUID o algún identificador único
  comboName: string;      // Nombre del combo
  discount: number;       // Descuento aplicado al combo
  products: string[];     // Array de IDs de productos seleccionados
  customQuantity: boolean; // Si permite cantidad personalizada
  manageInventory: boolean; // Si gestiona inventario
}
