import { asideClassButtonAction, h2ClassButtonAction, h3ClassButtonAction } from "./customButtonActions"

export const setupOptions = (editor) => {
  editor.ui.registry.addButton('addAsideClass', {
    text: 'Add .aside',
    icon: 'paragraph',
    tooltip: 'Add .aside class to paragraph',
    onAction: () => asideClassButtonAction(editor),
  });

  editor.ui.registry.addButton('addHeading2Class', {
    text: 'Add H2 Class',
    icon: 'header',
    tooltip: 'Add .text-2xl class to H2',
    onAction: () => h2ClassButtonAction(editor),
  });

  editor.ui.registry.addButton('addHeading3Class', {
    text: 'Add H3 Class',
    icon: 'header',
    tooltip: 'Add .text-xl class to H3',
    onAction: () => h3ClassButtonAction(editor),
  });

  editor.ui.registry.addContextMenu('addAsideClassMenu', {
    update: (element) => {
      return element.nodeName === 'P' ? 'addAsideClassButton' : '';
    },
  });

  editor.ui.registry.addContextMenu('addHeading2ClassMenu', {
    update: (element) => {
      return element.nodeName === 'H2' ? 'addHeading2Class' : '';
    },
  });

  editor.ui.registry.addContextMenu('addHeading3ClassMenu', {
    update: (element) => {
      return element.nodeName === 'H3' ? 'addHeading3Class' : '';
    },
  });
}