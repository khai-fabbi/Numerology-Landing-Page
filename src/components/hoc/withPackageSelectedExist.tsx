import type { ComponentType } from 'react'

import Custom404 from '@/pages/404'
import { useStore } from '@/store/useStore'

export function withPackageSelectedExist(Component: ComponentType<any>) {
  // eslint-disable-next-line react/display-name
  return () => {
    const packageSelected = useStore((state) => state.packageSelected)
    if (!packageSelected) return <Custom404 />
    return <Component packageSelected={packageSelected} />
  }
}
