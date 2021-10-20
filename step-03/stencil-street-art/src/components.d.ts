/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ArtList {
    }
    interface ArtListItem {
        "coordinates": string;
        "link": string;
        "location": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLArtListElement extends Components.ArtList, HTMLStencilElement {
    }
    var HTMLArtListElement: {
        prototype: HTMLArtListElement;
        new (): HTMLArtListElement;
    };
    interface HTMLArtListItemElement extends Components.ArtListItem, HTMLStencilElement {
    }
    var HTMLArtListItemElement: {
        prototype: HTMLArtListItemElement;
        new (): HTMLArtListItemElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "art-list": HTMLArtListElement;
        "art-list-item": HTMLArtListItemElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface ArtList {
    }
    interface ArtListItem {
        "coordinates"?: string;
        "link"?: string;
        "location"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "art-list": ArtList;
        "art-list-item": ArtListItem;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "art-list": LocalJSX.ArtList & JSXBase.HTMLAttributes<HTMLArtListElement>;
            "art-list-item": LocalJSX.ArtListItem & JSXBase.HTMLAttributes<HTMLArtListItemElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
