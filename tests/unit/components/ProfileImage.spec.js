import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import ProfileImage from "../../../src/components/ProfileImage.vue";

describe("Profile Image", () => {
  it("renders", () => {
    const wrapper = shallowMount(ProfileImage);

    expect(wrapper.exists()).toBe(true);
  });
});
