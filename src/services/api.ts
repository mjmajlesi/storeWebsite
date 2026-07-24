/**
 * Local mock API service.
 * Replaces json-server + axios to make the app fully portable on GitHub Pages.
 * All data is served from the strongly-typed mockData module.
 * Simulated network latency (500ms) makes animations visible.
 */

import { MOCK_PRODUCTS } from "../data/mockData";
import { IProduct } from "../pages/store";

function delay(ms: number = 500): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProducts(): Promise<IProduct[]> {
  await delay();
  // Return a shallow copy to avoid accidental mutations
  return [...MOCK_PRODUCTS];
}

export async function getProduct(id: string | number): Promise<IProduct | undefined> {
  await delay();
  return MOCK_PRODUCTS.find((p) => p.id === String(id));
}

/**
 * Simulated login endpoint.
 * Accepts any username/password for demo purposes.
 * In a real app this would validate credentials server-side.
 */
export async function FLogin(_username: string, _password: string): Promise<{ success: boolean }> {
  await delay(800);
  return { success: true };
}
