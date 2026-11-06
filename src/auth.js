// Front-end-only login (this site has no server).
// Passwords are stored as SHA-256 hashes, never in plain text.
// ponytail: client-side check only guards the UI; real protection needs a backend.
const USERS = {
  admin: { hash: "41c152f07ae1c62317a2102e3505ef89215cc11375347072669e094c058fe083", role: "admin" },
  user: { hash: "8230fc4c9f4ccddfe4a521a6fdd2448e76c73e501f9556676c00cf944ea27759", role: "user" },
};

async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function login(username, password) {
  const u = USERS[username.trim().toLowerCase()];
  if (!u || (await sha256(password)) !== u.hash) return null;
  sessionStorage.setItem("role", u.role);
  return u.role;
}

export const getRole = () => sessionStorage.getItem("role");
export const logout = () => sessionStorage.removeItem("role");
