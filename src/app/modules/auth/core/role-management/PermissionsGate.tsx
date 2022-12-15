import {cloneElement} from 'react'
import {PermissionsGateModel} from '../_models'
import {PERMISSIONS} from './permission-maps'
import useGetRole from './useGetRole'

interface hasPermissionsProps {
  permissions: {[key: string]: any}
  scopes: string[]
}

const hasPermission = ({permissions, scopes}: hasPermissionsProps) => {
  const scopesMap: any = {}
  scopes.forEach((scope) => {
    scopesMap[scope] = true
  })

  return permissions.some((permission: string) => scopesMap[permission])
}

const PermissionsGate = ({
  children,
  RenderError = () => <></>,
  scopes = [],
  errorProps = null,
}: PermissionsGateModel) => {
  const role: string = useGetRole()
  const permissions = PERMISSIONS[role]

  const permissionGranted = hasPermission({permissions, scopes})

  if (!permissionGranted && !errorProps) return <RenderError />

  if (!permissionGranted && errorProps) return cloneElement(children, {...errorProps})

  return <>{children}</>
}

export default PermissionsGate
