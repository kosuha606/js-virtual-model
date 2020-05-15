import VirtualModelProvider from "./VirtualModelProvider";
import VirtualModelManager from "./VirtualModelManager";

let workInstances = {};

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
        if (!workInstances[this.name]) {
            workInstances[this.name] = new this();
        }

        return workInstances[this.name].call(method, args);
    }

    call(method, args) {
        let provider = VirtualModelManager.getProvider(this.constructor.providerType());

        if (!args) {
            args = this;
        }

        return provider[method].call(
            provider,
            this.constructor.name,
            args,
            workInstances[this.constructor.name]
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