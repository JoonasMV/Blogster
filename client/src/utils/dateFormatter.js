const formatDate = (dateAsString) => {
  const date = new Date(dateAsString)
  return [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ].join("/")
}

export default formatDate