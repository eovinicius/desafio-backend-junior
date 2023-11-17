export class Entity<T> {
  private _id: number;
  protected props: T;

  constructor(props: T, id?: number) {
    this._id = id ?? Math.random();
    this.props = props;
  }

  get id() {
    return this._id;
  }
}
