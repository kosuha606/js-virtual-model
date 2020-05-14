import VirtualModelProvider from "../VirtualModelProvider";


export default class MemoryModelProvider extends VirtualModelProvider
{
    constructor()
    {
        super();
        this.memoryStorage = {};
    }

    many(type, config)
    {
        console.log(type, config);
    }
}