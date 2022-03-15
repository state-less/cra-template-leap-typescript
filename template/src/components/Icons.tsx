import {
    Brightness1,
    Brightness4Outlined,
    DesktopWindowsOutlined,
    SupervisedUserCircle,
} from '@mui/icons-material';
import PaletteIcon from '@mui/icons-material/Palette';
import SettingsIcon from '@mui/icons-material/Settings';
import { FunctionComponent } from 'react';

export const UserIcon = SupervisedUserCircle;
export const BrightIcon = Brightness1;
export const DarkIcon = Brightness4Outlined;

export const OSIcon = DesktopWindowsOutlined;

export const YubiKeyIcon: FunctionComponent<any> = (props) => (
    <img
        alt="react server yubikey-icon"
        width="24px"
        {...props}
        src="https://img.icons8.com/fluency/1024/000000/yubikey.png"
    />
);

export const MetaMaskIcon: FunctionComponent<any> = (props) => (
    <img
        alt="react server metamask-icon"
        height="16px"
        src="https://cdn-images-1.medium.com/max/1200/1*Ajditq7CoiSbj9-2OPAO8w.png"
        {...props}
    />
);

export { PaletteIcon, SettingsIcon };
