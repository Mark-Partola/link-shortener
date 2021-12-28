import { LitElement } from "lit";
import "./app-logo";
import "./app-input";
import "./app-button";
export declare class AppHeader extends LitElement {
    static styles: import("lit").CSSResult;
    value: string;
    loading: boolean;
    error: boolean;
    hash: string | null;
    render(): import("lit-html").TemplateResult<1>;
    handleChange(e: CustomEvent<{
        value: string;
    }>): void;
    handleSubmit(): Promise<void>;
}
