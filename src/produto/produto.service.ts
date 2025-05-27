import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Produto } from './schemas/produto.schema';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(@InjectModel(Produto.name) private produtoModel: Model<Produto>) {}

  async create(createProdutoDto: CreateProdutoDto) {
    return this.produtoModel.create(createProdutoDto);
  }

  async findAll() {
    return this.produtoModel.find().exec();
  }

  async findOne(id: string) {
    const produto = await this.produtoModel.findById(id).exec();
    if (!produto) throw new NotFoundException('Produto não encontrado');
    return produto;
  }

  async update(id: string, updateDto: UpdateProdutoDto) {
    return this.produtoModel.findByIdAndUpdate(id, updateDto, { new: true });
  }

  async remove(id: string) {
    await this.produtoModel.findByIdAndDelete(id);
  }
}
