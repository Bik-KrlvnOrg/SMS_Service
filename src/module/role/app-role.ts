import { RolesBuilder } from 'nest-access-control';

export enum AppRole {
  Global_Administrator = 'admin',
  Administrative = 'administrative',
  Primary = 'primary',
  Billing = 'billing',
  Technical = 'technical '
}

export const roles: RolesBuilder = new RolesBuilder();
// GA
roles.grant(AppRole.Global_Administrator)
  .createAny(['student', 'tutor', 'forum', 'billing', 'profile'])
  .readOwn('profile')
  .updateAny(['student', 'tutor', 'forum', 'billing'])
  .updateOwn(['profile'])
  .deleteAny(['student', 'tutor', 'forum', 'billing', 'profile'])
  .readAny(['student', 'tutor', 'forum', 'billing'])

  //P
  .grant(AppRole.Primary)
  .createAny(['profile', 'forum'])
  .readAny(['forum'])
  .deleteOwn(['profile'])

  //A
  .grant(AppRole.Administrative)
  .createAny(['student', 'tutor', 'forum', 'profile'])
  .readOwn('profile')
  .updateAny(['student', 'tutor', 'forum'])
  .updateOwn(['profile'])
  .readAny(['student', 'tutor', 'forum', 'billing'])

  //B
  .grant(AppRole.Billing)
  .createAny(['billing'])
  .readAny(['student', 'tutor'])
  .updateAny(['billing']);