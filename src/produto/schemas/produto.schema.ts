import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Produto extends Document {
  @Prop({ required: true })
  nome: string;

  @Prop()
  descricao: string;

  @Prop({ required: true })
  quantidade: number;

  @Prop({ required: true })
  preco: number;
}

export const ProdutoSchema = SchemaFactory.createForClass(Produto);
