class book{
    private serie:string
    private author:string
    private available:boolean
    private title:string
    public constructor(serie:string,author:string,available:boolean,title:string){
        this.serie=serie
        this.author=author
        this.available=available
        this.title=title
    }

    public give(){
        if(this.available){
            this.available=false
        }
        else{
            console.log('not available')
        }
    }

    public take(){
        if(!this.available){
            this.available=true
        }
        else{
            console.log('this book is available')
        }
    }

    public __str__(){
        return [this.author,this.available,this.serie,this.title]
    }
}

class library{
    private books:book[]
    
    public constructor(books:book[]){
        this.books=books
    }

    public add_book(aded:book){
        this.books.push(aded)
    }

    public describe(){
        for(let x=0;x<this.books.length;x++){
            console.log(this.books[x])
        }
    }

    public give(x:number){
        this.books[x].give()
    }

    public take(x){
        this.books[x].take()
    }
}