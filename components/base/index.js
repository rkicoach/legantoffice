import { applySettings } from '../../styles';

// apply custom config values
applySettings();

// make axs/cxs modules available as exports
export {
  Box,
  Text,
  config,
  cxs,
} from 'axs';

// export our base components
export { default as Container } from './container';
export { default as Flex } from './flex';
export { default as Image } from './image';
export { default as Heading } from './heading';
export { default as DefinitionList } from './definition-list';
export { List, ListItem } from './list';
export { default as NavItem } from './nav-item';
export { default as LinkBlock } from './link-block';
export { default as Select } from './select';
export { default as Checkbox } from './checkbox';
export { default as Badge } from './badge';
export { default as Button } from './button';
export { default as Label } from './label';
export { default as Overlay } from './overlay';
export { default as Sidebar } from './sidebar';
