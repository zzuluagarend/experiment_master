import { HashTable } from "../helpers";

export class ReactElementFactory {
  public static Instance: ReactElementFactory = new ReactElementFactory();
  private creatorHash: HashTable<(name: string) => JSX.Element> = {};

  public registerElement(
    elementType: string,
    elementCreator: (name: string) => JSX.Element
  ) {
    this.creatorHash[elementType] = elementCreator;
  }
  public getAllTypes(): Array<string> {
    var result = new Array<string>();
    for (var key in this.creatorHash) {
      result.push(key);
    }
    return result.sort();
  }
  public isElementRegisgered(elementType: string) {
    return !!this.creatorHash[elementType];
  }
  public createElement(elementType: string, params: any): JSX.Element {
    var creator = this.creatorHash[elementType];
    if (creator == null) return null;
    return creator(params);
  }
}
