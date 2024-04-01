class UserCalendar {
    constructor(activeYears, streak, totalActiveDays, dccBadges, submissionCalendar) {
      this.activeYears = activeYears;
      this.streak = streak;
      this.totalActiveDays = totalActiveDays;
      this.dccBadges = dccBadges.map(badge => ({
        timestamp: badge.timestamp,
        name: badge.badge.name,
        icon: badge.badge.icon
      }));
      this.submissionCalendar = JSON.parse(submissionCalendar);
    }
  }

 module.exports = UserCalendar;  