import 'styled-components';
import { defaultTheme, lightTeme } from '../styles/themes';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}