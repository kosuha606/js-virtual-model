import VirtualModel from "../VirtualModel";

export default class Category extends VirtualModel
{
    static className() {
        return 'Category';
    }

    constructor() {
        super();
        this.attributes = {
            id: '',
            name: '',
        }
    }
}