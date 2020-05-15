import VirtualModelProvider from "./VirtualModelProvider";
import VirtualModelManager from "./VirtualModelManager";

let workInstance = null;

export default class VirtualModel
{
    static type() {
        return 'virtual';
    }

    constructor() {
        this.attributes = {};
    }

    getAttributes() {
        return this.attributes;
    }

    setAttributes(attributes) {
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

    static call(method, args) {
        if (!workInstance) {
            workInstance = new this();
        }

        return workInstance.call(method, args);
    }

    call(method, args) {
        let provider = VirtualModelManager.getProvider(this.constructor.providerType());

        return provider[method].call(
            provider,
            this.constructor.name,
            args,
            workInstance
        );
    }

    buildModel(attrs) {
        let model = new this.constructor();
        model.setAttributes(attrs);

        return model;
    }

    static providerType() {
        return VirtualModelProvider.defaultProviderType();
    }
}