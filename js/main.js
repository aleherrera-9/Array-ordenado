const priceHoddie = 1500;
const priceTshirt = 800;
const priceCap = 600;
let hoddieQty = 0;
let tshirtQty = 0;
let capQty = 0;
let prod1 = [];
class Product {
    constructor(type, price, quantity) {
        this.name = type;
        this.price = parseInt(price);
        this.qty = quantity;
    }
}
function options() {
    let menu
    do {
        menu = prompt("Bieveni@ a IBASHO, ingresa una opcion del menu:" + "\n 1-Agregar productos al carrito");
        if (menu == 1) {
            addProducts();
        }
    } while (menu != 1);
}
//agrega la cantidad deseada y con un for el color de los items
function add() {
    qty = parseInt(prompt("Ingrese la cantidad deseada del producto"));
    return qty;
}
function addProducts() {
    let flag = 0;
    let option;
    let menu = 0;
    do {
        do {

            let option = prompt("Ingresa una item a agregar:"
                + "\n 1-Buzo"
                + "\n 2-Remera"
                + "\n 3-Gorra"
            );
            switch (option) {
                case '1':
                    prod1.push(new Product("Buzo", priceHoddie, add()));
                    break;
                case '2':
                    prod1.push(new Product("Remera", priceTshirt, add()));
                    break;
                case '3':
                    prod1.push(new Product("Gorra", priceCap, add()));
                    break;
                default:
                    alert("la opcion no es correcta")

            }
        } while (option == 1 || option == 2 || option == 3);

        do {
            menu = prompt("Ingrese una opcion"
                + "\n 1-Agregar un producto"
                + "\n 2-Ordenar el array"
            );
            switch (menu) {
                case '1':
                    flag = 1;
                    break;
                case '2':
                    flag = 2;
                    order();
                    alert("array ordenado por nombre de producto")
                    console.log(prod1);
                    break;
                default:
                    alert("la opcion no es correcta")
            }
        } while (menu != 1 && menu != 2)

    } while (flag == 1 && flag != 2);
}

function order() {
    prod1.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    
}
options();




