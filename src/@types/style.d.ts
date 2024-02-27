import 'styled-components';
import { theme } from '../themes';

declare module 'styled-components'{
    type Themetype = typeof theme;

    export interface DefaultTheme extends Themetype {}
}