abstract class Trabalhador
{
	public abstract print(): void;
}

//As classes abaixo são de um sistema de livraria física. Esse detalhe pode ser abstraído neste trabalho, de modo que funcionárias e funcionários sejam de qualquer tipo de empresa.
class Funcionario extends Trabalhador
{
	private nome: string;
	private salario: number;
    private cargo:string;
	
	public constructor(nome: string, sal: number, cargo:string='funcionario')
	{
        super();
		this.nome = nome;
		this.salario = sal;
        this.cargo = cargo;
	}
    public print():void{
        console.log(this.nome, this.salario);
    }
    

	public getNome(): string
	{
		return this.nome;
	}

	public getSalario(): number
	{
		return this.salario;
	}

    public getCargo():string{
        return this.cargo;
    }
}

class Assistente extends Funcionario
{
	private assistido: Funcionario;
    
	public constructor(nome: string, f: Funcionario, sal: number = 1200.00, cargo:string = 'Assistente')
	{
		super(nome, sal, cargo);
		this.assistido = f;
	}

    public print():void{
        console.log('Nome',this.getNome,'Cargo',this.getCargo,'do', this.assistido)
    }
}

class Atendente extends Funcionario
{
	private codigoContratoAtendente: number; //número que pode ser arbitrário
	public constructor(nome: string, codigo: number, sal: number = 1500.00, cargo:string = 'Atendente')
	{
		super(nome, sal, cargo);
		this.codigoContratoAtendente = codigo;
	}

    public print(): void {
        console.log('Nome ',this.getNome,' Cargo ',this.getCargo,' do contrato de código ',this.codigoContratoAtendente);
    }
    
}

class Gerente extends Funcionario
{
	private descricao: string; //Descrição do gerente: atencioso, rigoroso etc.
	public constructor(nome: string, descricao: string, sal: number = 7000.00, cargo:string = 'Gerente')
	{
		super(nome, sal, cargo);
		this.descricao = descricao;
	}

    public print(): void {
        console.log('Nome',this.getNome,'Cargo',this.getCargo,'Personalidade', this.descricao);
    }
}


// 2 e 4

const ermenegildo= new Funcionario('emernegildo',200)
ermenegildo.print()
class listatrabalhadores{
	private geral:Trabalhador[]
	public constructor(lista:Trabalhador[]){
		this.geral=lista
	}
	public retornadoindece(index:number){
		try{
			return this.geral[index]
		}
		catch(error){
			if (error instanceof RangeError) {
				return []
			}
		}
	}
	public insere(valor:Trabalhador[]):void{
		valor.forEach((element) => this.geral.push(element));																				
	}
	public getgeral():Trabalhador[]{
		return this.geral
	}
}
const mcdonalds= new listatrabalhadores([new Gerente('Sasuke','UM pai irresponsavel e ausente',17000)])
mcdonalds.insere([new Atendente('roxy',69,1),
new Atendente('rudeus',24,1),
new Atendente('hinata',69,1),
new Assistente('Sarada' , new Funcionario('Sarada',0),0),
new Assistente('Sakura', new Funcionario('Sakura',0),0)])
console.log(mcdonalds.getgeral())
