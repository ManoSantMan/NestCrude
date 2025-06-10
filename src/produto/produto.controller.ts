import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@Controller('produtos')
@ApiTags('produtos') // Vai agrupar no Swagger
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo produto' })
  @ApiBody({ type: CreateProdutoDto })
  @ApiResponse({ status: 201, description: 'Produto criado com sucesso' })
  create(@Body() dto: CreateProdutoDto) {
    return this.produtoService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos' })
  @ApiResponse({ status: 200, description: 'Lista de produtos' })
  findAll() {
    return this.produtoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um produto por ID' })
  @ApiParam({ name: 'id', description: 'ID do produto' })
  @ApiResponse({ status: 200, description: 'Produto encontrado' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  findOne(@Param('id') id: string) {
    return this.produtoService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um produto' })
  @ApiParam({ name: 'id', description: 'ID do produto' })
  @ApiBody({ type: UpdateProdutoDto })
  @ApiResponse({ status: 200, description: 'Produto atualizado' })
  update(@Param('id') id: string, @Body() dto: UpdateProdutoDto) {
    return this.produtoService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um produto' })
  @ApiParam({ name: 'id', description: 'ID do produto' })
  @ApiResponse({ status: 200, description: 'Produto removido' })
  remove(@Param('id') id: string) {
    return this.produtoService.remove(id);
  }
}
