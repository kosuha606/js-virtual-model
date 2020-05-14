import { expect } from "chai"
import VirtualModel from "../src/VirtualModel"
import VirtualModelManager from "../src/VirtualModelManager";
import MemoryModelProvider from "../src/Examples/MemoryModelProvider";
import Product from "../src/Examples/Product";


describe("index test", () => {
    describe("VirtualModel", () => {
        it("storage type", () => {
            let memoryProvider = new MemoryModelProvider();
            VirtualModelManager.addProvider(memoryProvider);

            expect(VirtualModel.providerType()).to.equal('storage');

            let products = Product.call('many', {});
        })
    })
})