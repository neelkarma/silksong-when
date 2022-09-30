import { json } from "@sveltejs/kit";
import type { RequestHandler } from "$types";
import { when } from "$lib/when";

export const GET: RequestHandler = (_) => {
  const { now, daysLeft, probability } = when();
  return json({
    serverTime: now,
    daysLeft,
    probability,
  });
};
