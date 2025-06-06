import {
  asideClassButtonAction,
  h2ClassButtonAction,
  h3ClassButtonAction,
  mb0ClassButtonAction,
  mb2ClassButtonAction
} from "./customButtonActions"

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

  editor.ui.registry.addButton('addMb2Class', {
    text: 'Add mb-2 Class',
    icon: 'paragraph',
    tooltip: 'Add .mb-2 class to paragraph',
    onAction: () => mb2ClassButtonAction(editor),
  });

  editor.ui.registry.addButton('add!Mb0Class', {
    text: 'Add mb-0! Class',
    icon: 'paragraph',
    tooltip: 'Add .mb-0! class to paragraph',
    onAction: () => mb0ClassButtonAction(editor),
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

  editor.ui.registry.addContextMenu('addMb2ClassMenu', {
    update: (element) => {
      return element.nodeName === 'P' ? 'addMb2Class' : '';
    },
  });

  editor.ui.registry.addContextMenu('add!Mb0ClassMenu', {
    update: (element) => {
      return element.nodeName === 'P' ? 'add!Mb0Class' : '';
    },
  });
}