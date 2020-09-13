import theme from './themes/light';
import 'styled-components';

export type ITheme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme extends ITheme {}
}
