import VirtualModelProvider from "./VirtualModelProvider";
import VirtualModelManager from "./VirtualModelManager";

let workInstances = {};

export default class VirtualModel {
    static type() {
        return 'virtual';
    }

    static className() {
        return 'VirtualModel';
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
        if (!workInstances[this.className()]) {
            workInstances[this.className()] = new this();
        }

        return workInstances[this.className()].call(method, args);
    }

    call(method, args) {
        let provider = VirtualModelManager.getProvider(this.constructor.providerType());

        if (!args) {
            args = this;
        }

        return provider[method].call(
            provider,
            this.constructor.className(),
            args,
            this ? this : workInstances[this.constructor.className()]
        );
    }

    buildModel(attrs) {
        let model = new this.constructor();
        model.setAttributes(attrs);

        return model;
    }

    getProvider() {
        return VirtualModelManager.getProvider(this.constructor.providerType());
    }

    static providerType() {
        return VirtualModelProvider.defaultProviderType();
    }
}