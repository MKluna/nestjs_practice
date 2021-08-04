import { Products } from './interfaces/Products';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-products.dto';
import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(): Products[] {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id) {
    return this.productsService.getProduct(id);
  }

  /* @Get()
  getProducts(@Req() req, @Res() res) {
    res.send(this.product);
  } */

  @Post()
  createProducts(@Body() products: CreateProductsDto) {
    const name = products.name;
    const description = products.description;
    const available = products.available;

    return this.productsService.postProduct(name, description, available);
  }

  @Delete(':id')
  deleteProducts(@Param('id') id) {
    return this.productsService.deleteProduct(id);
  }

  @Put(':id')
  updateProducts(@Body() products: CreateProductsDto, @Param('id') id) {
    const name = products.name;
    const description = products.description;
    const available = products.available;
    return this.productsService.putProduct(id, name, description, available);
  }
}
