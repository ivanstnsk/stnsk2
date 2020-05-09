import {useEffect, useState} from 'react';
import {
  MOBILE_WINDOW_MAX_WIDTH_PX,
  TABLET_WINDOW_MAX_WIDTH_PX,
} from 'constants/sizes';
import {EModules} from 'types';

type TModuleHook = EModules;

const getModuleNameByScreenWidth = (screenWidth: number): EModules => {
  if (screenWidth > TABLET_WINDOW_MAX_WIDTH_PX) {
    return EModules.LAPTOP;
  }
  if (screenWidth > MOBILE_WINDOW_MAX_WIDTH_PX) {
    return EModules.TABLET;
  }
  return EModules.MOBILE;
}

export const useModule = (): TModuleHook => {
  const [moduleName, setModuleName] = useState<EModules>(EModules.LAPTOP);

  useEffect(() => {
    window.onresize = (event: UIEvent) => {
      const w = event.target as Window; 
      const module = getModuleNameByScreenWidth(w.innerWidth);
      setModuleName(module);
    }
  }, [setModuleName]);

  return moduleName;
}