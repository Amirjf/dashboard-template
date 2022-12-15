/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import SidebarTitle from './SidebarTitle'
import ControlPanelLinks from './sidebar-menu-links/control-panel/ControlPanelLinks'
import PermissionsGate from '../../../../../app/modules/auth/core/role-management/PermissionsGate'
import {SCOPES} from '../../../../../app/modules/auth/core/role-management/permission-maps'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />

      <PermissionsGate scopes={[SCOPES.canDelete]}>
        {/* Main Control Panel */}
        <ControlPanelLinks />
      </PermissionsGate>

      <PermissionsGate scopes={[SCOPES.canEdit, SCOPES.canCreate]}>
        <SidebarTitle title='ADMIN' />
      </PermissionsGate>
      <PermissionsGate scopes={[SCOPES.canView]}>
        <SidebarTitle title='Manager' />
      </PermissionsGate>

      <SidebarTitle title='Users Management' />

      <SidebarMenuItem
        to='/apps/user-management/users'
        icon='/media/icons/duotune/general/gen051.svg'
        title='User management'
        fontIcon='bi-layers'
      />
      <SidebarMenuItemWithSub
        icon='/media/icons/duotune/communication/com013.svg'
        to='/crafted/pages/profile'
        title='Profile'
      >
        <SidebarMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <SidebarMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </SidebarMenuItemWithSub>
    </>
  )
}

export {SidebarMenuMain}
