export enum ValidationErrorType {
  LOGIN = 'login',
  EMAIL = 'email',
  PASSWORD = 'password',
  PASSWORD_REP = 'passwordRep',
  EMAIL_TAKEN = 'emailTaken',
  DEFAULT = 'default',
}

export function getErrorMessage(errorType: ValidationErrorType): string {
  switch (errorType) {
    case ValidationErrorType.LOGIN:
      return 'Nieprawidłowy e-mail lub hasło.';
    case ValidationErrorType.EMAIL:
      return 'Podany adres e-mail jest nieprawidłowy.';
    case ValidationErrorType.PASSWORD:
      return 'Hasło musi zawierać conajmniej 8 znaków, w tym jedną zwykłą literę, dużą literę, cyfrę oraz któryś ze znaków specjalnych - "?", "!", "@", "#", "$", "%".';
    case ValidationErrorType.PASSWORD_REP:
      return 'Podane hasła nie są jednakowe.';
    case ValidationErrorType.EMAIL_TAKEN:
      return 'Podany adres email jest już zajęty, jeśli masz już konto zaloguj się.';
    case ValidationErrorType.DEFAULT:
      return 'Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.';
    default:
      return 'Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.';
  }
}
