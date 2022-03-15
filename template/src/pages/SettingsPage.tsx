import {
    Card,
    CardHeader,
    IconButton,
    List,
    Menu,
    MenuItem,
} from '@mui/material';
import React, { FunctionComponent, useState } from 'react';
import { SettingsIcon } from '../components/Icons';
import { SettingListItem, SettingsType } from '../components/Setting';
import { DarkModeSetting, DarkModeOsSetting } from '../components/Settings';

export const Settings = () => {
    return (
        <>
            <DarkModeSetting />
            <DarkModeOsSetting />
            <SettingListItem
                label="LABEL_FUZZY_SEARCH"
                name="fuzzy"
                type={SettingsType.boolean}
            />
        </>
    );
};
export const SettingsCard = () => {
    return (
        <Card square>
            <CardHeader title="Settings" />
            <List>
                <Settings />
            </List>
        </Card>
    );
};

type Menu = {
    anchorEl?: HTMLAnchorElement;
    onClose: React.MouseEventHandler<HTMLElement>;
};

export const SettingsMenuButton = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [anchorEl, setAnchorEl] = useState(null as any);

    const handleClose = () => setAnchorEl(null);
    const handleOpen: React.MouseEventHandler<HTMLButtonElement> = (e) =>
        setAnchorEl(e.target);
    return (
        <>
            <IconButton onClick={handleOpen}>
                <SettingsIcon />
            </IconButton>
            <SettingsMenu anchorEl={anchorEl} onClose={handleClose} />
        </>
    );
};
export const SettingsMenu: FunctionComponent<Menu> = ({
    anchorEl,
    onClose,
}) => {
    const open = Boolean(anchorEl);
    return (
        <Menu open={open} anchorEl={anchorEl} onClose={onClose}>
            <MenuItem>
                <DarkModeSetting />
            </MenuItem>
            <MenuItem>
                <DarkModeOsSetting />
            </MenuItem>
            <MenuItem>
                <SettingListItem
                    label="LABEL_FUZZY_SEARCH"
                    name="fuzzy"
                    type={SettingsType.boolean}
                />
            </MenuItem>
        </Menu>
    );
};
export const SettingsPage = SettingsCard;
