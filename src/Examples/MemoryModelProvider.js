import VirtualModelProvider from "../VirtualModelProvider";
import VirtualModelManager from "../VirtualModelManager";


export default class MemoryModelProvider extends VirtualModelProvider
{
    constructor()
    {
        super();
        this.memoryStorage = {};
    }

    setMemoryStorage(data)
    {
        this.memoryStorage = data;
    }

    many(modelClass, config, workInstance)
    {
        let result = [];
        let attrs;
        this.ensureHaveModel(modelClass);

        for (var key in this.memoryStorage[modelClass]) {
            if (!this.memoryStorage[modelClass].hasOwnProperty(key)) {
                continue;
            }

            attrs = this.memoryStorage[modelClass][key];
            result.push(workInstance.buildModel(attrs));
        }

        return result;
    }

    save(modelClass, model, workInstance)
    {
        if (!this.memoryStorage[modelClass]) {
            this.memoryStorage[modelClass] = [];
        }

        this.memoryStorage[modelClass].push(model.getAttributes());
    }

    ensureHaveModel(modelClass)
    {
        if (!this.memoryStorage[modelClass]) {
            throw new Error('No data for type '+modelClass+' in memory provider');
        }
    }
}