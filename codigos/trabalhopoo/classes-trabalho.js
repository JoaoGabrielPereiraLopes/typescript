var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Trabalhador = /** @class */ (function () {
    function Trabalhador() {
    }
    return Trabalhador;
}());
//As classes abaixo são de um sistema de livraria física. Esse detalhe pode ser abstraído neste trabalho, de modo que funcionárias e funcionários sejam de qualquer tipo de empresa.
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, sal, cargo) {
        if (cargo === void 0) { cargo = 'funcionario'; }
        var _this = _super.call(this) || this;
        _this.nome = nome;
        _this.salario = sal;
        _this.cargo = cargo;
        return _this;
    }
    Funcionario.prototype.print = function () {
        console.log(this.nome, this.salario);
    };
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    Funcionario.prototype.getCargo = function () {
        return this.cargo;
    };
    return Funcionario;
}(Trabalhador));
var Assistente = /** @class */ (function (_super) {
    __extends(Assistente, _super);
    function Assistente(nome, f, sal, cargo) {
        if (sal === void 0) { sal = 1200.00; }
        if (cargo === void 0) { cargo = 'Assistente'; }
        var _this = _super.call(this, nome, sal, cargo) || this;
        _this.assistido = f;
        return _this;
    }
    Assistente.prototype.print = function () {
        console.log('Nome', this.getNome, 'Cargo', this.getCargo, 'do', this.assistido);
    };
    return Assistente;
}(Funcionario));
var Atendente = /** @class */ (function (_super) {
    __extends(Atendente, _super);
    function Atendente(nome, codigo, sal, cargo) {
        if (sal === void 0) { sal = 1500.00; }
        if (cargo === void 0) { cargo = 'Atendente'; }
        var _this = _super.call(this, nome, sal, cargo) || this;
        _this.codigoContratoAtendente = codigo;
        return _this;
    }
    Atendente.prototype.print = function () {
        console.log('Nome ', this.getNome, ' Cargo ', this.getCargo, ' do contrato de código ', this.codigoContratoAtendente);
    };
    return Atendente;
}(Funcionario));
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, descricao, sal, cargo) {
        if (sal === void 0) { sal = 7000.00; }
        if (cargo === void 0) { cargo = 'Gerente'; }
        var _this = _super.call(this, nome, sal, cargo) || this;
        _this.descricao = descricao;
        return _this;
    }
    Gerente.prototype.print = function () {
        console.log('Nome', this.getNome, 'Cargo', this.getCargo, 'Personalidade', this.descricao);
    };
    return Gerente;
}(Funcionario));
// 2 e 4
var ermenegildo = new Funcionario('emernegildo', 200);
ermenegildo.print();
var listatrabalhadores = /** @class */ (function () {
    function listatrabalhadores(lista) {
        this.geral = lista;
    }
    listatrabalhadores.prototype.retornadoindece = function (index) {
        try {
            return this.geral[index];
        }
        catch (error) {
            if (error instanceof RangeError) {
                return [];
            }
        }
    };
    listatrabalhadores.prototype.insere = function (valor) {
        var _this = this;
        valor.forEach(function (element) { return _this.geral.push(element); });
    };
    return listatrabalhadores;
}());
var mcdonalds = new listatrabalhadores([new Gerente('Sasuke', 'UM pai irresponsavel e ausente', 17000)]);
mcdonalds.insere([new Atendente('roxy', 69, 1),
    new Atendente('rudeus', 24, 1),
    new Atendente('hinata', 69, 1),
    new Assistente('Sarada', new Funcionario('Sarada', 0), 0),
    new Assistente('Sakura', new Funcionario('Sakura', 0), 0)]);
console.log(mcdonalds.geral);
