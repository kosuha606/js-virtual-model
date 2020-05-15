import VirtualModel from "../VirtualModel";

export default class Category extends VirtualModel
{
    constructor() {
        super();
        this.attributes = {
            id: '',
            name: '',
        }
    }
}