import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import ActionButton from "../../../src/components/ActionButton.vue";

describe("ActionButton", () => {
  it("render text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Clickable",
        type: "primary",
      },
    });

    expect(wrapper.text()).toMatch("Clickable");
  });

  it("apple one of the styles button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Clickable",
        type: "primary",
      },
    });

    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
