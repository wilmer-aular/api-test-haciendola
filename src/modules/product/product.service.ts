import { IProduct, Product } from './product.model';

import { CrudService } from '../../database/crud.service';
import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

class ProductService extends CrudService<IProduct>{

  constructor() {
    super(Product, 'prduct-service');
  }

  public uploadProducts = async (): Promise<any> => {

    const count = await Product.count();

    if(count === 0) {
      const rutaArchivo = path.resolve(__dirname, 'products.xlsx'); // Ruta absoluta del archivo
      // Verificar si el archivo existe
      if (fs.existsSync(rutaArchivo)) {
          const workbook = XLSX.readFile(rutaArchivo);
          const sheet_name = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheet_name];

          const productos = XLSX.utils.sheet_to_json(worksheet);

          const data: any[] = productos.map((p: any) => {
            return {
              handle: p.Handle, 
              title: p.Title, 
              description: p.Description, 
              sku: p.SKU, 
              grams: p.Grams, 
              stock: p.Stock, 
              price: p.Price, 
              comparePrice: p['Compare Price'], 
              barcode: p.Barcode ?? null
            };
          });
        Product.bulkCreate(data);
      } else {
          console.error('El archivo no existe en la ruta especificada.');
      }
    }
  }
}

export const productService = new ProductService();
