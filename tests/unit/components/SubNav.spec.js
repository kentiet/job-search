import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SubNav from "../../../src/components/SubNav.vue";

describe("SubNav", () => {
  describe("when the user is on the job page", () => {
    it("display job count", () => {
      const wrapper = shallowMount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  describe("when the user is not on the job page", () => {
    it("display job count", () => {
      const wrapper = shallowMount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
