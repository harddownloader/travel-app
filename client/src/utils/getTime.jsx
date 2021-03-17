const getTimeFormat = (language) => {
  if (language == 'en') return 'en-US'
  if (language == 'ru') return 'ru-RU'
  if (language == 'de') return 'de-DE'
}

const getTime = (language, timeZone) => {
  let date = new Date()
  let time = Intl.DateTimeFormat(getTimeFormat(language), {
    timeZone: timeZone,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date)
  return time.charAt(0).toUpperCase() + time.slice(1)
}

export default getTime