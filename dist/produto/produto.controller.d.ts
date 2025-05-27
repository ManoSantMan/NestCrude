import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    create(dto: CreateProdutoDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/produto.schema").Produto> & import("./schemas/produto.schema").Produto & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/produto.schema").Produto> & import("./schemas/produto.schema").Produto & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/produto.schema").Produto> & import("./schemas/produto.schema").Produto & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, dto: UpdateProdutoDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/produto.schema").Produto> & import("./schemas/produto.schema").Produto & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<void>;
}
