/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import SidebarTitle from './SidebarTitle'

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

      <SidebarTitle title='Control Panel' />

      {/* Inventory */}
      <SidebarMenuItemWithSub
        icon='/media/icons/duotune/ecommerce/ecm009.svg'
        to='/control-panel/inventory'
        title='Inventory'
      >
        <SidebarMenuItem
          to='/control-panel/inventory/templates'
          title='Templates'
          hasBullet={true}
        />
        <SidebarMenuItem to='/control-panel/inventory/reports' title='Reports' hasBullet={true} />
        <SidebarMenuItem to='/control-panel/inventory/feeds' title='Feeds' hasBullet={true} />
        <SidebarMenuItem to='/control-panel/inventory/Reports' title='Dealers' hasBullet={true} />
      </SidebarMenuItemWithSub>

      {/* Reviews */}
      <SidebarMenuItemWithSub
        icon='/media/icons/duotune/communication/com003.svg'
        to='/control-panel/reviews'
        title='Reviews'
      >
        <SidebarMenuItem to='/control-panel/reviews/company' title='Company' hasBullet={true} />
        <SidebarMenuItem to='/control-panel/reviews/reviews' title='Reviews' hasBullet={true} />
      </SidebarMenuItemWithSub>

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
