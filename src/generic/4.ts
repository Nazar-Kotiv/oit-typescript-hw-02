/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PropTitle {
  title: string;
}
class Component<T extends PropTitle> {
  constructor(public props: T) {}
}

class Page extends Component<PropTitle> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
