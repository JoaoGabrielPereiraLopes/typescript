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
var Gasto = /** @class */ (function () {
    function Gasto() {
    }
    return Gasto;
}());
var Gastos = /** @class */ (function (_super) {
    __extends(Gastos, _super);
    function Gastos(valor, nome, origem, constancia) {
        var _this = _super.call(this) || this;
        _this.valor = valor;
        _this.nome = nome;
        _this.origem = origem;
        _this.constancia = constancia;
        return _this;
    }
    Gastos.prototype.mudanca = function (input) {
        return input - this.valor * this.constancia;
    };
    Gastos.prototype.get_valor = function () {
        return this.valor;
    };
    Gastos.prototype.get_origem = function () {
        return this.origem;
    };
    Gastos.prototype.get_nome = function () {
        return this.nome;
    };
    return Gastos;
}(Gasto));
var gastos_fixos = /** @class */ (function (_super) {
    __extends(gastos_fixos, _super);
    function gastos_fixos(valor, nome, origem, constancia, date, tipo_de_gastos) {
        var _this = _super.call(this, valor, nome, origem, constancia) || this;
        _this.date = date;
        _this.tipo_de_gasto = tipo_de_gastos;
        return _this;
    }
    gastos_fixos.prototype.get_date = function () {
        return this.date;
    };
    gastos_fixos.prototype.get_constancia = function () {
        this.constancia;
    };
    return gastos_fixos;
}(Gastos));
var gastos_eventual = /** @class */ (function (_super) {
    __extends(gastos_eventual, _super);
    function gastos_eventual(valor, nome, origem, constancia, dispensavel, date, tipo_de_gastos) {
        var _this = _super.call(this, valor, nome, origem, constancia) || this;
        _this.dispensavel = dispensavel;
        _this.date = date;
        _this.tipo_de_gasto = tipo_de_gastos;
        return _this;
    }
    gastos_eventual.prototype.get_date = function () {
        return this.date;
    };
    gastos_eventual.prototype.get_constancia = function () {
        this.constancia;
    };
    return gastos_eventual;
}(Gastos));
var Despesa_mensal = /** @class */ (function () {
    function Despesa_mensal(despesas, propietario) {
        this.propietario = propietario;
        this.despesas = despesas;
    }
    Despesa_mensal.prototype.nomes = function () {
        return this.despesas;
    };
    Despesa_mensal.prototype.sobra = function (valor) {
        this.despesas.forEach(function (element) { return valor = element.mudanca(valor); });
        return valor;
    };
    Despesa_mensal.prototype.empresas = function () {
        var gastos = {};
        this.despesas.forEach(function (element) {
            if (!(element.get_origem() in gastos)) {
                gastos[element.get_origem()] = element.get_valor();
            }
            else {
                gastos[element.get_origem()] += element.get_valor();
            }
        });
        return gastos;
    };
    return Despesa_mensal;
}());
var aluguel = new gastos_fixos(300, 'aluguel', 'Asafe', 1, [1], 'domicílio');
var agua = new gastos_fixos(90, 'agua', 'light', 1, [1], 'contas');
var mercado = new gastos_fixos(400, 'mercado', 'Rio sul', 2, [1, 15], 'compras');
var luz = new gastos_fixos(170, 'luz', 'light', 1, [1], 'contas');
var coxinha = new gastos_eventual(10, 'coxinha', 'barraquinha do seu Judis', 5, true, [1, 6, 10, 20, 30], 'comida');
var saida = new gastos_eventual(50, 'saida', 'Caxias shoping', 5, true, [1, 4, 7, 10, 30], 'comida');
var Judis = new Despesa_mensal([aluguel, agua, mercado, luz, coxinha, luz], 'judis');
console.log(Judis.empresas());
agua = new gastos_fixos(90000, 'agua', 'light', 1, [1], 'contas');
luz = new gastos_fixos(170000, 'luz', 'light', 1, [1], 'contas');
var salarios = new gastos_fixos(1000000, 'salarios', 'funcionarios', 1, [1], 'salario');
var impostos = new gastos_fixos(1000000, 'impostos', 'governo', 1, [1], 'imposto');
var empresa = new Despesa_mensal([agua, luz, salarios, impostos], 'Dudu');
console.log(empresa.empresas());
