import { expect } from "chai"
import sayHello from "../src/index"
import VirtualModel from "../src/VirtualModel"

describe("index test", () => {
    describe("sayHello function", () => {
        let vm = new VirtualModel();

        expect(VirtualModel.providerType()).to.equal('storage');

        it("should say Hello guys!", () => {

            const str = sayHello();
            expect(str).to.equal("Hello guys!")
        })
    })
})