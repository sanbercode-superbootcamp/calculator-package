var calc = {
    tambah: function(a, b){
        if(isNaN(a) || isNaN(b)){ return "error"; }
        else{ return a + b; }
        
    },
    kurang: function(a, b){
        if(isNaN(a) || isNaN(b)){ return "error"; }
        else{ return a - b; }
    },
    kali: function(a, b){
        if(isNaN(a) || isNaN(b)){ return "error"; }
        
        else{ return a * b; }
    },
    bagi: function(a, b){
        if(isNaN(a) || isNaN(b)){ return "error"; }
        
        else{ return a / b; }
    }
}

module.exports = calc;

//function tambah(a, b){}

//console.log(calc.kurang(1, "word"));