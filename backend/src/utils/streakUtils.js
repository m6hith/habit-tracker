exports.calculateStreak = (checkIns) => {
  if (checkIns.length === 0) return 0;

  let streak = 1;
  for (let i = checkIns.length - 1; i > 0; i--) {
    const diff =
      (new Date(checkIns[i].date) - new Date(checkIns[i - 1].date)) /
      (1000 * 60 * 60 * 24);

    if (diff <= 1) streak++;
    else break;
  }
  return streak;
};
