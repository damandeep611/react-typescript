export const TABS = {
  VIEW: "view",
  CODE: "code",
} as const;

export type TabType = (typeof TABS)[keyof typeof TABS];
