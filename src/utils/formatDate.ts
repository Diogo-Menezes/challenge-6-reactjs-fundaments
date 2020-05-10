const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pt-PT', {
    hour: 'numeric',
    minute: 'numeric',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(date));

export default formatDate;
