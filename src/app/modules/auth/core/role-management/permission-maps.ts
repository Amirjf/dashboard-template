export const ROLES = {
  viewer: 'VIEWER',
  superAdministrator: 'super-administrator',
  administrator: 'administrator',
  manager: 'manager',
}

export const SCOPES = {
  canCreate: 'can-create',
  canEdit: 'can-edit',
  canDelete: 'can-delete',
  canView: 'can-view',
}

export const PERMISSIONS = {
  [ROLES.viewer]: [SCOPES.canView],
  [ROLES.superAdministrator]: [SCOPES.canView, SCOPES.canEdit, SCOPES.canCreate, SCOPES.canDelete],
  [ROLES.administrator]: [SCOPES.canView, SCOPES.canEdit, SCOPES.canCreate],
  [ROLES.manager]: [SCOPES.canView],
}
