import { AriaAttributes } from "react";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    p?: string;
    c?: string;
    b?: string;
  }
}
