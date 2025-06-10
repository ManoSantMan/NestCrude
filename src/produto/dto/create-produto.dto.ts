import { ApiProperty } from '@nestjs/swagger';


export class CreateProdutoDto {
  @ApiProperty({ example: 'Produto Exemplo', description: 'Nome do produto' })
  nome: string;

  @ApiProperty({ example: 'Descrição do produto', description: 'Descrição do produto' })
  descricao: string;

  @ApiProperty({ example: 100.00, description: 'Preço do produto' })
  preco: number;

  @ApiProperty({ example: 'Categoria Exemplo', description: 'Categoria do produto' })
  categoria: string;
}
