import { getIcons } from "../../lib/simpleIcons";
import { generateBadgeURL } from "../../utils/badge";

describe("Testing url generation", () => {
  it("should generate all icons badges without any errors / undefineds", () => {
    const icons = getIcons();
    icons.map((icon) => {
      if (!icon.title) return;

      const url = generateBadgeURL({
        hex: icon.hex,
        label: "",
        title: icon.title,
        style: "plastic",
        slug: icon.slug
      })

      expect(url).toBeDefined();
      expect(url).not.toContain("undefined");
    });
  });

  it("should generate badge with the corresponding style", () => {
    const styles = ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social']

    styles.map((style) => {
      const url = generateBadgeURL({
        hex: "#000000",
        label: "",
        title: "test",
        style,
        slug: "react"
      })

      expect(url).toBeDefined();
      expect(url).not.toContain("undefined");
      expect(url).toContain(`style=${style}`);
    });
  })
})
