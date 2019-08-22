/// <reference path='jsx.d.ts' />

export default function render (parent: ChildNode, newNode: JSX.Element)
{
    const node = parent.childNodes[0];
    if (!newNode)
    {
        node.remove();
    }
    else
    {
        parent.replaceChild(create(newNode), node);
    }
}

render.h = (type: string | JSX.FunctionalElement, props: any, ...children: any[]): JSX.Element =>
{
    return { type, props, children };
}

const create = (node: JSX.Element): HTMLElement | Text =>
{
    // Text node
    if (typeof(node) === 'string')
    {
        return document.createTextNode(node);
    }

    // Functional node representation
    if (typeof(node.type) === 'function')
    {
        return create(node.type(node.props));
    }

    // Create plane node
    const el = document.createElement(node.type);
    for (const prop in node.props)
    {
        if (prop.startsWith('on'))
        {
            el.addEventListener(prop.substr(2), node.props[prop]);
        }
        else
        {
            el.setAttribute(prop, node.props[prop]);
        }
    }

    // Handle getting back an array of children. Eg: [[item1, item2]] instead of just [item1, item2].
    const flatten = node.children.reduce((acc: JSX.Element[], val) => acc.concat(val), []);
    for (const child of flatten)
    {
        el.append(create(child));
    }

    return el;
}
