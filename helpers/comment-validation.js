export function disadvantagesRule (value) {
  return (value && value.length <= 150) || (value.length === 0) || 'Advantages must be less than 150 characters'
}

export function advantagesRule (value) {
  return (value && value.length <= 150) || (value.length === 0) || 'Disadvantages must be less than 150 characters'
}

export function commentRule (value) {
  return (value && value.length <= 2000) || (value.length === 0) || 'Comment must be less than 2000 characters'
}
