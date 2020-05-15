import { expect } from "chai"
import VirtualModel from "../src/VirtualModel"
import VirtualModelManager from "../src/VirtualModelManager";
import MemoryModelProvider from "../src/Examples/MemoryModelProvider";
import Product from "../src/Examples/Product";
import Category from "../src/Examples/Category";


describe("index test", () => {
    let memoryProvider = new MemoryModelProvider();
    memoryProvider.setMemoryStorage({
        Category: [
            {
                id: 1,
                name: 'Ягода',
            },
            {
                id: 1,
                name: 'Овощь',
            },
            {
                id: 1,
                name: 'Фрукт',
            },
        ],
        Product: [
            {
                id: 1,
                name: 'Арбуз',
                price: '100',
                description: 'Хороший арбуз',
            }
        ]
    });
    VirtualModelManager.addProvider(memoryProvider);

    describe("VirtualModel", () => {
        it("storage type", () => {

            expect(VirtualModel.providerType()).to.equal('storage');
        });

        it("Get products", () => {
            let products = Product.call('many', {});

            expect(products.length).to.equal(1);
        });

        it("Get categories", () => {
            let categories = Category.call('many', {});

            expect(categories.length).to.equal(3);
        });

        it("Save product", () => {
            let product = new Product();
            product.setAttributes({
                id: '1',
                name: 'Новый продукт',
                price: '100',
                description: 'New',
            });

            product.call('save');

            let products = Product.call('many', {});
            expect(products.length).to.equal(2);
        });
    })
})