declare namespace JSX {

    type FunctionalElement = (props: any) => JSX.Element;
    interface ObjectElement
    {
        readonly type: string | FunctionalElement;
        readonly props: any;
        readonly children: Element[];
    }

    type Element = ObjectElement | string;
    interface IntrinsicElements
    {
        div: Partial<HTMLDivElement>;
        span: Partial<HTMLSpanElement>;
        button: Partial<HTMLButtonElement>;
        h1: Partial<HTMLHeadingElement>;
    }

    type ClickHandler = (e: MouseEvent) => void;
}
