"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interfaceTest = function () {
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    let myObj = { size: 10, label: "Size 10 Object" };
    class Square {
        constructor(color, area) {
            this.area = area;
            this.color = color;
        }
    }
    //  返回值类型
    function createSquare(config) {
        let newSquare = new Square("white", 100);
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    // 不需要new，直接大括号
    let mySquare = createSquare(new class {
        constructor() {
            this.color = "black";
        }
    });
    console.log(mySquare);
    let p1 = new class {
        constructor() {
            this.x = 6;
            this.y = 7;
        }
    };
    class SimpleSearch {
        search(source, subString) {
            let result = source.search(subString);
            return result > -1;
        }
    }
    let mySearch;
    mySearch = new SimpleSearch();
    const result = mySearch.search("hello", "e");
    console.log(result);
};
