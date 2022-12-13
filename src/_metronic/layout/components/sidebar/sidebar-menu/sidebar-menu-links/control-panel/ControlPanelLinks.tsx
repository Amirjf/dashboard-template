import {SidebarMenuItem} from '../../SidebarMenuItem'
import {SidebarMenuItemWithSub} from '../../SidebarMenuItemWithSub'
import SidebarTitle from '../../SidebarTitle'

const ControlPanelLinks = () => {
  return (
    <>
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
    </>
  )
}

export default ControlPanelLinks
