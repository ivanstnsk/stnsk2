import { AppTheme } from 'types/theme';

export type AppStylesProps = Record<string, string | number | boolean>;

export type AppStyles = (theme: AppTheme) => Record<string, any>;

export type AppInnerStyles = Record<string, string | undefined>;
