// #1

class CalorieCalculator {
    constructor() {
        this.products = new Map();
    }

    addProduct(productName, calories) {
        this.products.set(productName, calories);
    }

    getProductCalories(productName) {
        if (this.products.has(productName)) {
            return this.products.get(productName);
        } else {
            return 'Product not found';
        }
    }

    removeProduct(productName) {
        if (this.products.has(productName)) {
            this.products.delete(productName);
        }
    }
}

//#2

class UniqueUsernames {
    constructor() {
        this.usernames = new Set();
    }

    addUser(username) {
        this.usernames.add(username);
    }

    exists(username) {
        return this.usernames.has(username);
    }

    count() {
        return this.usernames.size;
    }
}


export { CalorieCalculator, UniqueUsernames }