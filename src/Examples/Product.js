import VirtualModel from "../VirtualModel";

export default class Product extends VirtualModel
{
    constructor() {
        super();
        this.attributes = {
            name: '',
            price: '',
            description: '',
        }
    }
}