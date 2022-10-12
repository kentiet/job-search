import { mount } from "@vue/test-utils";
import { describe, it } from "vitest";

import MainNav from "../../../src/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    console.log(wrapper.text());
  });
});
