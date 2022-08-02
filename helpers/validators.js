// import moment from 'moment';

const URL_REGEXP = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/gm;
const LINK_URL_REGEXP = /(http[s]?:\/\/|www\.)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}[.]{0,1}/gi;
const HTML_MARKUP_REGEXP = /<\s*[a-z]+[^>]*>/gi;
const LINKED_IN_REGEXP = /(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)?[^\s]*/gi;
const SPECIAL_CHARS_REGEXP = /^[\w_\-+~,/\\:'"().&*|[\]?# ]+$/i;
const GREETINGS_REGEXP = /\b(dr|mr|mister|mrs|ms|miss|sir|hello|hi)\b/i;
const PHONE_REGEXP = /(\+?\(?\+?[0-9]{1,3}\)?[-. ]+([0-9]{2,4})[-. ]?([0-9]{3,5}))|\+?[0-9]{7,}/gi;
const DOUBLE_REGEXP = /^\d{0,11}(\.\d{0,2}){0,1}$/;
const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const HEX_REGEXP = /[0-9A-Fa-f]{6}/;
const ZIP_CODE_REGEXP = /^[0-9]{5}(?:-[0-9]{4})?$/;
const NUMBER_REGEXP = /^[+-]?\d+(.\d+)?$/;
const PHONE_NUMBER_REGEXP = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const YOUTUBE_URL = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/gm;
const POSITIVE_INTEGER = /^[1-9]\d*$/;
const EMAIL_LIST_REGEXP = /^(\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]{2,9}\s*?,?\s*?)+$/g;
const PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

export function differentValidation (value, message = 'The value must be different') {
  return v => !v || !(v === value) || message;
}

export function lengthValidation (length, message = `Must be less than ${length} characters.`) {
  return v => !v || ((v || '').toString().trim().length <= length) || message;
}

export function minLengthValidation (length, message = `Must be more than ${length} characters.`) {
  return v => !v || ((v || '').toString().trim().length >= length) || message;
}
export function equalLengthValidation (length, message = `Must be ${length} characters.`) {
  return v => !v || ((v || '').toString().trim().length === length) || message;
}

export function emailValidation (message = 'Please enter a valid email.') {
  return v => !v || !!v.toString().match(EMAIL_REGEXP) || message;
}

export function urlValidation (message = 'Please enter valid URL.') {
  return v => !v || !!v.toString().match(URL_REGEXP) || message;
}

export function hexValidation (message = 'Please enter a valid Hex.') {
  return v => !v || !!v.toString().match(HEX_REGEXP) || message;
}

export function passMatchValidation (password, message = 'Passwords don\'t match.') {
  return v => !v || !!v.toString().match(`^${password}$`) || message;
}

export function emptyValidation (message = 'This field is required.') {
  return v => (v !== '' && typeof v !== 'undefined' && v !== null) || message;
}

export function emptyArrayValidation (message = 'This field is required.') {
  return v => (Array.isArray(v) && v.length > 0) || message;
}

export function doubleValidation (message = 'This field must be a number (format 0.00).') {
  return v => !v || !!(v + '').match(DOUBLE_REGEXP) || message;
}

export function minMaxValidation (min = 0, max = 100, message = `The value must be greeter or equal than ${min} and lower or equal than ${max}.`) {
  return v => !v || (v >= min && v <= max) || message;
}

export function preventStuffingValidation (message = 'This isn\'t a valid description.') {
  return v => !v || (v.replace(/(.{4,}?)(?:\1{3,})/g, (text, subtext) => /^(\s*(<(\/?[^>]+)>|&nbsp;|[^\s]{0,3})\s*|(.)\4+)$/.test(subtext) ? text : '') === v) || message;
}

export function preventUrlsValidation (message = 'Links are not allowed in this field.') {
  return v => !v || !v.match(LINK_URL_REGEXP) || message;
}

export function preventHtmlValidation (message = 'Please don\'t use HTML markup') {
  return v => !v || !v.match(HTML_MARKUP_REGEXP) || message;
}

export function preventLinkedinValidation (message = 'Before you continue, make sure your profile does not include your LinkedIn contact information.') {
  return v => !v || !v.match(LINKED_IN_REGEXP) || message;
}

export function preventCapitalsValidation (message = 'Too many capital letters.') {
  return v => !v || !(v.replace(/[A-Z]/g, '').length < v.length / 2) || message;
}

export function preventSpecialCharsValidation (message = 'Your title cannot include special characters like >, ;, !, @, $, %, ^, =, {, }.') {
  return v => !v || !!v.match(SPECIAL_CHARS_REGEXP) || message;
}

export function preventGreetingsValidation (message = 'Your title should describe the work you do.') {
  return v => !v || !v.match(GREETINGS_REGEXP) || message;
}

export function preventPhoneValidation (message = 'Please remove any phone number from this field. Potential clients will be able to contact you through Upwork.') {
  return v => !v || !v.match(PHONE_REGEXP) || message;
}

export function allowDigitsOnlyValidation (message = 'This field must contains digits.') {
  return v => !v || !!v.toString().match(/^\d+$/) || message;
}

// export function dateBeforeValidation (dateCompare, message = `The date should be before ${moment(dateCompare).format('MM/DD/YYYY')}`) {
//   return v => !v || moment(v).isBefore(dateCompare, 'd') || message;
// }
//
// export function dateAfterValidation (dateCompare, message = `The date should be after ${moment(dateCompare).format('MM/DD/YYYY')}`) {
//   return v => !v || moment(v).isAfter(dateCompare, 'd') || message;
// }

export function allowAlphanumericOnlyValidation (message = 'This field must contains characters.') {
  return v => !v || !!v.match(/^[a-zA-Z]*$/) || message;
}

export function zipCodeValidation (message = 'This field must be a number (format 12345).') {
  return v => !v || !!v.toString().match(ZIP_CODE_REGEXP) || message;
}

export function phoneNumberValidation (message = 'This field must be a number (format 123 456 7890).') {
  return v => !v || !!v.toString().match(PHONE_NUMBER_REGEXP) || message;
}

export function youtubeUrlValidation (message = 'Please add youtube link') {
  return v => !v || !!v.toString().match(YOUTUBE_URL) || message;
}

export function numberValidation (message = 'Please type only digits') {
  return v => !v || !!v.toString().match(NUMBER_REGEXP) || message;
}
export function positiveInteger (message = 'Please type only positive integer') {
  return v => !v || !!v.toString().match(POSITIVE_INTEGER) || message;
}

export function emailListValidation (message = 'Please enter valid, comma separated (,) email addresses to send information') {
  return v => !v || !!v.toString().match(EMAIL_LIST_REGEXP) || message;
}

export function passwordValidation (message = 'Password must be at least 8 characters, contain at least one lower case, one upper case and one digit') {
  return v => !v || !!v.toString().match(PASSWORD_REGEXP) || message;
}

export function checkboxValidation (message = 'You must accept rules to continue') {
  return v => !!v || message;
}

export function avatarValidation (message = 'Avatar size should be less than 400kb!') {
  return v => !v || v.size < 400000 || message;
}

// add-comment form rules
export function disadvantagesRule (message = 'Advantages must be less than 150 characters') {
  return v => (v && v.length <= 150) || (v.length === 0) || message;
}

export function advantagesRule (message = 'Disadvantages must be less than 150 characters') {
  return v => (v && v.length <= 150) || (v.length === 0) || message;
}

export function commentRule (message = 'Comment must be less than 2000 characters') {
  return v => (v && v.length <= 2000) || (v.length === 0) || message;
}
