'use strict'

/*** 
 * 
 * Directions:
 * 1. Extract hw1.zip
 * 2. In the hw1 directory you'll find a hw1.js and hw1.test.js file. hw1.js is the only file you need to modify.
 * 3. Open hw1.js in VS Code, or your preferred text editor or IDE.
 * 4. Implement all the TODOs described in commments below and save your work.
 * 
 * 
 * Validating your changes:
 * 1. Ensure you have Node.js LTS or newer installed: https://nodejs.org/en/download/
 * 2. Open cmd or terminal, change directory (cd) to the location of your hw1 directory.
 * 3. Once inside the hw1 directory, execute the following command: npm install
 * 4. The above command will install the jest dependency which will allow you to execute the unit tests in hw1.test.js
 * 5. Execute the following command to validate your changes in hw1.js are working as expected: npm test
 * 6. You will see output indicating the tests have passed or failed; if you see failures, there is an issue with your implementation
 * 
 ***/

const Homework1 = class Homework1 {

    // This is already implemented to indicate what a passing test looks like
    static sum = (a, b) => {
        return a + b;
    }

}

/**
 * *****************
 * ***** TODO ******
 * *****************
 * 
 * Implement the Circle class below. It needs to have a radius(Number) property and a color(String) properties. Both properties should be set in a constructor
 * Additionally, the Circle class should have a method called `calcArea` which will return the area (radius*radius*pi) of the circle. 
 * Be sure to use the built-in Math object Javascript provides to retrieve the value of PI.
 * 
 * References: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

const Circle = class Circle { 
    //properties init in constructor
    constructor(radius,color){
        this.radius = parseFloat(radius);
        this.color = color;
    }

    calcArea(){
        //return area
        return this.radius * this.radius * Math.PI;
    }

}


/**
 * *****************
 * ***** TODO ******
 * *****************
 * 
 * Implement the Student class below. 
 * 
 * The student class should have the following properties set by the constructor:
 * firstName(String), lastName(String), gpa(Number), degreeType(String)
 * 
 * The student class should have two additional properties initialized with the following default values:
 * grade(String) = undefined
 * graduated(Boolean) = false
 * 
 * References: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

const Student = class Student { 
    constructor(firstName,lastName,gpa,degreeType){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gpa = gpa;
        this.degreeType = degreeType;
    }
    //check the declarations of these just to be safe:
    grade = undefined;
    graduated = false;
}


/**
 * *****************
 * ***** TODO ******
 * *****************
 * 
 * Implement the Product class below. 
 * 
 * The product class should have the following properties set by the constructor:
 * name(String), price(Number), availability(String)
 * The constructor should only accept a single String parameter as input, the input format will be as follows: 'Apple,1.00,In Stock'
 * The constructor must parse this input and set the above properties appropriately
 */

const Product = class Product {
    constructor(strInput){
        //parse the input accordingly
        //this.strInput = strInput;
        const strArr = strInput.split(",");

        let name=strArr[0];
        let price = parseFloat(strArr[1]);
        let availability = strArr[2];

        this.name= name;
        this.price = price;
        this.availability = availability;
    }

    /**
     * *****************
     * ***** TODO ******
     * *****************
     * 
     * Implement the static method inStock below 
     * 
     * This method will accept an array of Products and return an array only containing products which are in stock
     * This can be implmeneted in one line.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
     */
    static inStock = (products) => {
        //reference: // const user = arr.find(element => element.id === "765");

        //find what products are in stock
        let inStockArr = products.filter(element =>element.availability === "In Stock");
        return inStockArr;
    }


    /**
     * *****************
     * ***** TODO ******
     * *****************
     * 
     * Implement the static method halfOff below 
     * 
     * This method will accept an array of Products and return an array of the same products with every price reduced by 50%
     * This method can also be written in one line; if doing so, consider using String interpolation when calling the product constructor
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
     */
    static halfOff = (products) => {//---need fix
        //reference:
        /*
            const arr = [1, 2, 3, 4]
            const arrPlus2 = arr.map((element) => element + 2);
            console.log(arr);
            console.log(arrPlus2);
        */
       const halfPriceArr = products.map((element)=> new Product(`${element.name},${parseFloat( element.price * 0.5)},${element.availability}`));
       //debug:
       //console.log("-------typeof products[0].price "+typeof products[0].price)
    //    console.log("-------products[0]"+ products[0]);
    //    console.log("-------typeof products[0] "+ typeof products[0]);
    //    console.log("-------products[0].name "+products[0].name)
    //    console.log("-------products[0].price "+products[0].price)
    //    console.log("-------products[0].availability "+products[0].availability)
    //    console.log("-------products "+products)
    //    console.log("-------halfpricedarr: "+halfPriceArr)
    //    console.log("-------halfPricedArr[0] "+halfPriceArr[0])
    //    console.log("-------typeof halfPricedArr[0] "+typeof halfPriceArr[0])
    //    console.log("-------halfPricedArr[0].name "+halfPriceArr[0].name)
    //    console.log("-------halfPricedArr[0].price "+halfPriceArr[0].price)
    //    console.log("-------halfPricedArr[0].availability "+halfPriceArr[0].availability)

       return halfPriceArr;
    }

    /**
     * *****************
     * ***** TODO ******
     * *****************
     * 
     * Implement the static method printProducts below 
     * 
     * This method will accept an array of Products and will console.log all the products in the following format: 
     * Product: Apple, Cost: $1.00, Available: Yes
     * Take note, for 'Available' we are not returning 'In Stock' or 'Out of Stock' but 'Yes' or 'No' 
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat (currency formatting)
     */
    static printProducts = (products) => { //---need fix
        //available vars
        let avail = 'Yes'
        let notAvail = 'No'
        //let isProduct = true;
        for(let i=0;i<products.length;i++){
            if(products[i].availability === 'In Stock'){
                console.log(`Product: ${products[i].name}, Cost: ${new Intl.NumberFormat('us-US', {style: 'currency', currency: 'USD'}).format(products[i].price)}, Availability: ${avail}`);
            }
            else{
                console.log(`Product: ${products[i].name}, Cost: ${new Intl.NumberFormat('us-US', {style: 'currency', currency: 'USD'}).format(products[i].price)}, Availability: ${notAvail}`);
            }
        }
        //debug
        // console.log(`Product: ${products.name}, Cost: ${products.price}, Available: ${products.availability}`);
        
    }

 };

// ----------------------------------
// DO NOT MODIFY CODE BELOW THIS LINE
// ----------------------------------

module.exports = {
    'Homework1': Homework1,
    'Circle': Circle,
    'Student': Student,
    'Product': Product
};