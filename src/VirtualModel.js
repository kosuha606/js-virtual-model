import VirtualModelProvider from "./VirtualModelProvider";
import VirtualModelManager from "./VirtualModelManager";

export default class VirtualModel
{
    static type()
    {
        return 'virtual';
    }

    constructor()
    {
        this.attributes = {};
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

    static call(method, args)
    {
        return VirtualModelManager.getProvider(VirtualModel.providerType())[method].call(
            2,
            VirtualModel.type(),
            args
        );
    }

    static providerType()
    {
        return VirtualModelProvider.defaultProviderType();
    }
}