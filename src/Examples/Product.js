import VirtualModel from "../VirtualModel";

export default class Product extends VirtualModel
{
    static className() {
        return 'Product';
    }

    constructor() {
        super();
        this.attributes = {
            id: '',
            name: '',
            price: '',
            description: '',
        }
    }
}