export class AttendanceList {
    
    
    constructor(){
        this.lista = new Array();
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