import VirtualModelProvider from "./VirtualModelProvider";

export default
{
    providers: {},

    getProvider(type = null) {
        if (!type) {
            type = VirtualModelProvider.defaultProviderType();
        }

        if (typeof(this.providers[type]) === 'undefined') {
            throw new Error('No such provider with type '+type);
        }

        return this.providers[type];
    },

    addProvider(provider) {
        if (!typeof provider === VirtualModelProvider) {
            throw new Error('Only virtual providers can be set to virtual manager');
        }

        this.providers[provider.type()] = provider;
    }
}