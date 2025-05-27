import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/estoque'),
    ProdutoModule,
  ],
})
export class AppModule {}
