import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";

import Headline from "../../../src/components/Headline.vue";
describe("Headline", () => {
  it("display introductory action verb", () => {
    vi.useFakeTimers();
    const wrapper = shallowMount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");

    expect(actionPhrase.text()).toBe("Build for everyone");
    vi.useRealTimers();
  });

  it("changes action verb at a consistent interval", () => {
    vi.useFakeTimers();
    shallowMount(Headline);
    vi.advanceTimersByTime(3000);
    expect(setInterval).toHaveBeenCalledOnce();
    vi.useRealTimers();
  });
});
