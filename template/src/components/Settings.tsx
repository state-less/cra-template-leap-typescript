import { Theme } from '@mui/material';
import { FunctionComponent, useContext } from 'react';
import { themeContext } from '../provider/ThemeProvider';
import { BrightIcon, DarkIcon, OSIcon, UserIcon } from './Icons';
import { SettingListItem, SettingProps, SettingsType } from './Setting';

export type UseThemeProps = {
    darkModeDefault?: boolean;
    osDefault?: boolean;
};
export type UseThemeResult = {
    theme: Theme;
    darkMode: boolean;
    toggleDarkMode: () => void;
    prefersDarkMode: boolean;
    setOsValue: () => void;
    os: boolean;
};

/** Provides a toggle for a userdefined  darkmode. Setting is stored in localstorage. */
export const DarkModeSetting: FunctionComponent = (props) => {
    const { darkMode, toggleDarkMode, os } = useContext(
        themeContext
    ) as UseThemeResult;

    return (
        <SettingListItem
            {...props}
            label="LABEL_DARKMODE"
            disabled={os}
            Icon={!darkMode ? BrightIcon : DarkIcon}
            OptionIcon={UserIcon}
            type={SettingsType.boolean}
            tooltip="Userdefined"
            name="darkmode"
            controlTooltip={darkMode ? 'Enable light mode' : 'Enable dark mode'}
            value={darkMode}
            onChange={toggleDarkMode}
        />
    );
};

/** Provides a toggle for a OS defined darkmode. Setting is stored in localstorage. */
export const DarkModeOsSetting = () => {
    const { darkMode, os, setOsValue } = useContext(
        themeContext
    ) as UseThemeResult;

    return (
        <SettingListItem
            label="LABEL_DARKMODE_OS"
            Icon={!darkMode ? BrightIcon : DarkIcon}
            OptionIcon={OSIcon}
            type={SettingsType.boolean}
            name="darkmode-os"
            tooltip="Operating System"
            controlTooltip={
                os ? 'Use userdefined value' : 'Use OS defined value'
            }
            value={os}
            onChange={setOsValue}
        />
    );
};
