abstract class Gasto
{
	protected valor: number;
    protected nome:string
    protected abstract mudanca(input:number): number;
    protected abstract get_nome():string
}

class Gastos extends Gasto{
    protected origem:string;
    protected constancia:number
    public constructor(valor:number,nome:string,origem:string,constancia:number){
        super();
        this.valor=valor;
        this.nome=nome;
        this.origem=origem
        this.constancia=constancia
    }
    public mudanca(input:number):number {
        return input-this.valor*this.constancia
    }
    public get_valor(){
        return this.valor
    }
    public get_origem(){
        return this.origem
    }
    public get_nome():string{
        return this.nome
    }
}

class gastos_fixos extends Gastos{
// essa função deriva de Gastos possuindo portanto, dois métodos(mundanca(que muda o capital com base no valor do gastos)
//e get_nome(que retorna o nome do gasto)), e dois atributos, nome e valor 
    private date:number[]
    private tipo_de_gasto:string
    public constructor(valor:number,nome:string,origem:string,constancia:number,date:number[],tipo_de_gastos:string){
        super(valor,nome,origem,constancia)
        this.date=date
        this.tipo_de_gasto=tipo_de_gastos
    }
    public get_date():number[]{
        return this.date
    }
    public get_constancia(){
        this.constancia
    }
}

class gastos_eventual extends Gastos{
// essa função deriva de Gastos possuindo portanto, dois métodos(mundanca(que muda o capital com base no valor do gastos)
//e get_nome(que retorna o nome do gasto)), e dois atributos, nome e valor 
    private dispensavel:boolean
    private date:number[]
    private tipo_de_gasto:string
    public constructor(valor:number,nome:string,origem:string,constancia:number,dispensavel:boolean,date:number[],tipo_de_gastos:string){
        super(valor,nome,origem,constancia)
        this.dispensavel=dispensavel
        this.date=date
        this.tipo_de_gasto=tipo_de_gastos
    }
    public get_date():number[]{
        return this.date
    }
    public get_constancia(){
        this.constancia
    }
}

class Despesa_mensal{
    private despesas:Gastos[]
    private propietario:string
    public constructor(despesas:Gastos[],propietario:string){
        this.propietario=propietario
        this.despesas=despesas
    }
    public nomes():Gastos[]{
        return this.despesas
    }
    public sobra(valor:number):number{
        this.despesas.forEach((element) => valor=element.mudanca(valor));
        return valor
    }
    public empresas():{}{
        let gastos={}
        this.despesas.forEach((element) =>{
            if(!(element.get_origem() in gastos)){
                gastos[element.get_origem()]=element.get_valor()
            }else{
                gastos[element.get_origem()]+=element.get_valor()
            }
        });
        return gastos
    }
}
var aluguel=new gastos_fixos(300,'aluguel','Asafe',1,[1],'domicílio')
var agua=new gastos_fixos(90,'agua','light',1,[1],'contas')
var mercado=new gastos_fixos(400,'mercado','Rio sul',2,[1,15],'compras')
var luz=new gastos_fixos(170,'luz','light',1,[1],'contas')

var coxinha= new gastos_eventual(10,'coxinha','barraquinha do seu Judis',5,true,[1,6,10,20,30],'comida')
var saida= new gastos_eventual(50,'saida','Caxias shoping',5,true,[1,4,7,10,30],'comida')

var Judis=new Despesa_mensal([aluguel,agua,mercado,luz,coxinha,luz],'judis')
console.log(Judis.empresas())

agua=new gastos_fixos(90000,'agua','light',1,[1],'contas')
luz=new gastos_fixos(170000,'luz','light',1,[1],'contas')
var salarios=new gastos_fixos(1000000,'salarios','funcionarios',1,[1],'salario')
var impostos=new gastos_fixos(1000000,'impostos','governo',1,[1],'imposto')

var empresa=new Despesa_mensal([agua,luz,salarios,impostos],'Dudu')
console.log(empresa.empresas())