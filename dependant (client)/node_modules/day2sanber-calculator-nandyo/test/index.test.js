var assert = require("assert");
var chai = require("chai"); //atau ("chai").expect nanti var expect
var calc = require("../src/index.js");

describe("Pertambahan", function(){
    
    context("Base Case", function(){
    it("Fungsi penambahan", function(){
        chai.expect(calc.tambah(1, 2)).to.equal(3);
    });
    });
        
    context("Edge Case", function(){
    it("Return number", function(){
        chai.expect(calc.tambah(1, 2)).is.a("number");
    });
    
    it("Parameter mengandung string/null return error", function(){
        chai.expect(calc.tambah(1, "worddd")).to.equal("error");
        chai.expect(calc.tambah("worrdd", 2)).to.equal("error");
        chai.expect(calc.tambah()).to.equal("error");
    });
    });
    
});

describe("Pengurangan", function(){
    
    context("Base Case", function(){
    it("Fungsi pengurangan", function(){
        chai.expect(calc.kurang(1, 2)).to.equal(-1);
    });
    });
        
    context("Edge Case", function(){
    it("Return number", function(){
        chai.expect(calc.kurang(1, 2)).is.a("number");
    });
    
    it("Parameter mengandung string/null return error", function(){
        chai.expect(calc.kurang(1, "worddd")).to.equal("error");
        chai.expect(calc.kurang("worrdd", 2)).to.equal("error");
        chai.expect(calc.kurang()).to.equal("error");
    });
    });
    
});

describe("Perkalian", function(){
    
    context("Base Case", function(){
    it("Fungsi perkalian", function(){
        chai.expect(calc.kali(1, 2)).to.equal(2);
    });
    });
        
    context("Edge Case", function(){
    it("Return number", function(){
        chai.expect(calc.kali(1, 2)).is.a("number");
    });
    
    it("Parameter mengandung string/null return error", function(){
        chai.expect(calc.kali(1, "worddd")).to.equal("error");
        chai.expect(calc.kali("worrdd", 2)).to.equal("error");
        chai.expect(calc.kali()).to.equal("error");
    });
    });
    
});

describe("Pembagian", function(){
    
    context("Base Case", function(){
    it("Fungsi pembagian", function(){
        chai.expect(calc.bagi(1, 2)).to.equal(0.5);
    });
    });
        
    context("Edge Case", function(){
    it("Return number", function(){
        chai.expect(calc.bagi(1, 2)).is.a("number");
    });
    it("Parameter mengandung string/null return error", function(){
        chai.expect(calc.bagi(1, "worddd")).to.equal("error");
        chai.expect(calc.bagi("worrdd", 2)).to.equal("error");
        chai.expect(calc.bagi()).to.equal("error");
    });
    });
    
});