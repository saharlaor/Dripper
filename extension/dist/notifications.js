chrome.alarms.create("Alarm", {
  periodInMinutes: 5,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  const hour = new Date().getHours();
  if (alarm.name === "Alarm" && hour >= 7 && hour <= 22) {
    chrome.notifications.create("Reminder", {
      title: "Don't forget to drink water",
      message: "It is healthy for you!",
      iconUrl: "./water_drops_48.png",
      type: "basic",
    });
  }
});
