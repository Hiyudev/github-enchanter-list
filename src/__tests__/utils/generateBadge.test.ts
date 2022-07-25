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
        hex: "000000",
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

  it("should generate badge with a label", () => {
    const url = generateBadgeURL({
      hex: "000000",
      label: "made with",
      title: "test",
      style: "plastic",
      slug: "react"
    })

    expect(url).toBeDefined();
    expect(url).not.toContain("undefined");
    expect(url).toContain("made%20with");
  });

  it("should generate badge with a custom message", () => {
    const url = generateBadgeURL({
      hex: "000000",
      label: "",
      title: "this {slug}",
      style: "plastic",
      slug: "react"
    })

    expect(url).toBeDefined();
    expect(url).not.toContain("undefined");
    expect(url).toContain("this%20react");
  });

  it("should generate badge with a custom label", () => {
    const url = generateBadgeURL({
      hex: "000000",
      label: "test-{slug}",
      title: "test",
      style: "plastic",
      slug: "react"
    })

    expect(url).toBeDefined();
    expect(url).not.toContain("undefined");
    expect(url).toContain("test_react");
  });
});
