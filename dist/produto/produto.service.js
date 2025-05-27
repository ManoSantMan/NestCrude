"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const produto_schema_1 = require("./schemas/produto.schema");
let ProdutoService = class ProdutoService {
    constructor(produtoModel) {
        this.produtoModel = produtoModel;
    }
    async create(createProdutoDto) {
        return this.produtoModel.create(createProdutoDto);
    }
    async findAll() {
        return this.produtoModel.find().exec();
    }
    async findOne(id) {
        const produto = await this.produtoModel.findById(id).exec();
        if (!produto)
            throw new common_1.NotFoundException('Produto não encontrado');
        return produto;
    }
    async update(id, updateDto) {
        return this.produtoModel.findByIdAndUpdate(id, updateDto, { new: true });
    }
    async remove(id) {
        await this.produtoModel.findByIdAndDelete(id);
    }
};
exports.ProdutoService = ProdutoService;
exports.ProdutoService = ProdutoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(produto_schema_1.Produto.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProdutoService);
//# sourceMappingURL=produto.service.js.map