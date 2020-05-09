import {AppTheme} from 'types/theme';

export type AppStylesProps = Record<string, string | number>;

export type AppStyles = (theme: AppTheme) => Record<string, any>;
