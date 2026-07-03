export function reportLovableError(error: Error, info?: Record<string, any>) {
  console.error("[Lovable Error Boundary]:", error, info);
}
