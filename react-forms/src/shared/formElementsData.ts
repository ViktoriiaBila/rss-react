export enum EFormElementNames {
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  birthDate = 'birthDate',
  country = 'country',
  messageText = 'messageText',
  agree = 'agree',
  notify = 'notify',
}

export enum EFormElementTitle {
  firstName = 'Name:',
  lastName = 'Surname:',
  email = 'E-mail:',
  birthDate = 'BirthDate:',
  country = 'Country:',
  messageText = 'Write your message:',
  agree = 'I argee with processing of my personal data',
  notify = 'I want to get notifications',
}

export enum EFormElementType {
  text = 'text',
  date = 'date',
  select = 'select-one',
  checkbox = 'checkbox',
}

export enum EFormElementErrorMessage {
  firstName = 'must be filled and consist of only letters',
  lastName = 'must be filled and consist of only letters',
  email = 'must be filled and follow the format - xxx@xxx.xxx',
  birthDate = 'must be chosen',
  country = 'must be chosen',
  messageText = 'must be filled',
  agree = 'must be chosen',
}
