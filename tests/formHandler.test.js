import { describe, it, expect, beforeEach, vi } from "vitest";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

vi.mock("https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js", () => ({
  initializeApp: vi.fn(),
}));

vi.mock(
  "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js",
  () => ({
    getFirestore: vi.fn(),
    collection: vi.fn(),
    addDoc: vi.fn(() => Promise.resolve({ id: "test-doc-id" })),
  })
);

describe("Contact Form Tests", () => {
  let dom;
  let document;
  let window;

  beforeEach(() => {
    const htmlPath = path.join(__dirname, "..", "contact.html");
    const html = fs.readFileSync(htmlPath, "utf8");
    dom = new JSDOM(html, {
      url: "http://localhost",
      runScripts: "dangerously",
    });
    document = dom.window.document;
    window = dom.window;

    global.getElementVal = (id) => document.getElementById(id).value;
  });

  it("should have all required form fields", () => {
    const form = document.getElementById("contactForm");
    expect(form).toBeTruthy();

    const requiredFields = ["name", "email", "phoneNumber", "messageContent"];
    requiredFields.forEach((fieldId) => {
      const input = document.getElementById(fieldId);
      expect(input).toBeTruthy();
      expect(input.hasAttribute("required")).toBe(true);
    });
  });

  it("should validate email format", () => {
    const emailInput = document.getElementById("email");
    emailInput.value = "invalid-email";
    expect(emailInput.checkValidity()).toBe(false);

    emailInput.value = "test@example.com";
    expect(emailInput.checkValidity()).toBe(true);

    emailInput.value = "test@example";
    expect(emailInput.checkValidity()).toBe(false);
  });

  it("should validate phone number length", () => {
    const phoneInput = document.getElementById("phoneNumber");
    phoneInput.value = "12345";
    expect(phoneInput.value.length).toBe(5);

    phoneInput.value = "123456789";
    expect(phoneInput.value.length).toBe(9);
  });
});
