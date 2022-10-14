import { describe, expect, it } from "vitest";
import nextElementInList from "../../../src/utils/nextElementInList";

describe("nextElementInList", () => {
  it("locates element in the list and returns the next element in list", () => {
    const list = ["a", "b", "c", "d", "e"];

    const val = "c";

    const res = nextElementInList(list, val);
    expect(res).toBe("d");
  });

  describe("when element is at the end of the list", () => {
    it("locates next element at start of list", ()=> {
        const list = ["a", "b", "c", "d", "e"];

        const val = "e";
    
        const res = nextElementInList(list, val);
        expect(res).toBe("a");
    })
  })
});
