import React from 'react';
import type { Theme } from './stitches.config';
export declare enum ThemeTypes {
    default = "default"
}
export declare type ThemeContextValue = {
    themeType: string;
    theme: Theme;
    aspectRatio: {
        width: number;
        height: number;
    };
    /**
     * @param {ThemeTypes} themeToUpdateTo - optional
     * Use this to toggle or update the currentTheme.
     * if a param is passed, it will set the theme to passed value, otherwise will toggle between light and dark
     * depending on current applied theme
     */
    toggleTheme: (themeToUpdateTo?: ThemeTypes) => void;
};
export declare type ThemeProviderProps = {
    themeType?: string;
    theme?: Theme;
    aspectRatio?: {
        width: number;
        height: number;
    };
};
export declare const ThemeContext: React.Context<ThemeContextValue>;
/**
 * Wrap this around your root component to get access to theme
 * eg:
 * <ThemeProvider type="dark" appBuilder={{ aspectRatio: { width:1, height: 1} }}>
 *  <App />
 * </ThemeProvider>
 */
export declare const HMSThemeProvider: React.FC<React.PropsWithChildren<ThemeProviderProps>>;
export declare const useTheme: () => ThemeContextValue;
