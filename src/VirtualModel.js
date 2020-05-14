import VirtualModelProvider from "./VirtualModelProvider";

export default class VirtualModel
{
    constructor()
    {
        this.isNewRecord = true;
        this.attributes = [];
    }

    static one()
    {

    }

    static many()
    {

    }

    static create()
    {

    }

    static createMany()
    {

    }

    getAttributes()
    {
        return this.attributes;
    }

    setAttributes(attributes)
    {
        if (!attributes) {
            return;
        }

        for (var key in attributes) {
            if (!attributes.hasOwnProperty(key)) {
                continue;
            }

            this.attributes[key] = attributes[key];
        }
    }

    static providerType()
    {
        return VirtualModelProvider.defaultProviderType();
    }
}