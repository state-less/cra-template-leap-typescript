import { Button, ButtonProps } from '@mui/material';
import { FunctionComponent } from 'react';
import { withTranslation } from '.';

type TranslatedButtonProps = ButtonProps & {
    label?: string;
    children?: string;
};

/**
 * Renders a Material UI Button. Passes the children through react-i18n
 */
export const TranslatedButton: FunctionComponent<TranslatedButtonProps> =
    withTranslation(Button, ['children']);
