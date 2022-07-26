export function disadvantagesRule (message = 'Advantages must be less than 150 characters') {
  return v => (v && v.length <= 150) || (v.length === 0) || message;
}

export function advantagesRule (message = 'Disadvantages must be less than 150 characters') {
  return v => (v && v.length <= 150) || (v.length === 0) || message;
}

export function commentRule (message = 'Comment must be less than 2000 characters') {
  return v => (v && v.length <= 2000) || (v.length === 0) || message;
}
