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
        div: SimpleElement;
        span: SimpleElement;
        button: SimpleElement;
    }

    type ClickHandler = (e: MouseEvent) => void;

    interface SimpleElement
    {
        class?: string;
        onclick?: ClickHandler;
    }
}
