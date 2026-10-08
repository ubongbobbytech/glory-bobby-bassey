import { describe, expect, test } from "bun:test";
import { drivePreview, publicPortfolioAsset } from "./portfolio-media";

describe("externally deployed portfolio playback", () => {
  test("uploaded video uses the public Lovable origin rather than a Netlify-local proxy", () => {
    expect(publicPortfolioAsset("/__l5e/assets-v1/video/coach-wendy.mp4")).toBe("https://glory-bobby-bassey.lovable.app/__l5e/assets-v1/video/coach-wendy.mp4");
  });
  test("shared Drive links become on-site preview URLs without sharing parameters", () => {
    expect(drivePreview("https://drive.google.com/file/d/1to928aVZaW2lt9mIWxINrKd4TCN9nMwc/view?usp=sharing")).toBe("https://drive.google.com/file/d/1to928aVZaW2lt9mIWxINrKd4TCN9nMwc/preview");
  });
});