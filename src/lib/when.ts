export const when = () => {
  const now = new Date();
  const xboxLimit = new Date(2023, 5, 13);
  const daysUntilXbox =
    (xboxLimit.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  const probability = 1 / daysUntilXbox;

  return {
    now: now.toISOString(),
    daysLeft: daysUntilXbox,
    probability,
  };
};
