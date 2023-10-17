export const formatDate = (dateAsString) => {
  const date = new Date(dateAsString)
  return [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ].join("/")
}

export const formatTime = (dateAsString) => {
  const date = new Date(dateAsString)
  return [ 
    ("0" + date.getHours()).slice(-2),
    ("0" + date.getMinutes()).slice(-2),
  ].join(":")
}