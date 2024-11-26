import { vi } from "vitest";

// Mock Firebase imports
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

// Mock console methods to avoid noise in test output
console.log = vi.fn();
console.error = vi.fn();
