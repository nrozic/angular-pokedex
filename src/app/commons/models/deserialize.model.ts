export class Deserialize {
    protected deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
