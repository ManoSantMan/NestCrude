import { Document } from 'mongoose';
export declare class Produto extends Document {
    nome: string;
    descricao: string;
    quantidade: number;
    preco: number;
}
export declare const ProdutoSchema: import("mongoose").Schema<Produto, import("mongoose").Model<Produto, any, any, any, Document<unknown, any, Produto> & Produto & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Produto, Document<unknown, {}, import("mongoose").FlatRecord<Produto>> & import("mongoose").FlatRecord<Produto> & {
    _id: import("mongoose").Types.ObjectId;
}>;
