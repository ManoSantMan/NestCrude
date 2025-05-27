import { Model } from 'mongoose';
import { Produto } from './schemas/produto.schema';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
export declare class ProdutoService {
    private produtoModel;
    constructor(produtoModel: Model<Produto>);
    create(createProdutoDto: CreateProdutoDto): Promise<import("mongoose").Document<unknown, {}, Produto> & Produto & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Produto> & Produto & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Produto> & Produto & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateDto: UpdateProdutoDto): Promise<import("mongoose").Document<unknown, {}, Produto> & Produto & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<void>;
}
