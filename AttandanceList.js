export class AttendanceList {
    
    lista = new Array();
    constructor(lista){
        this.lista=lista;
    }

    add(name){
        this.lista.push(name)
        return this.lista
    }

    place(name, index){
        this.lista[index]=name
    }

    has(name){
        return this.lista.includes(name);
    }

    getList(){
        
        return this.lista
    }    
}