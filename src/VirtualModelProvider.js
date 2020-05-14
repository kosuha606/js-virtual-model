
export default class VirtualModelProvider
{
    type()
    {
        return VirtualModelProvider.defaultProviderType();
    }

    static defaultProviderType()
    {
        return 'storage';
    }
}