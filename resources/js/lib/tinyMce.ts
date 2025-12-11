export type TinyMCEEditor = {
    setContent: (content: string) => void;
    getContent: () => string;
    selection: {
        getNode: () => HTMLElement;
    };
    notificationManager: {
        open: (config: { text: string; type: string }) => void;
    };
    ui: {
        registry: {
            addButton: (name: string, config: unknown) => void;
            addContextMenu: (name: string, config: unknown) => void;
        };
    };
};

export const asideClassButtonAction = (editor: TinyMCEEditor) => {
    const selectedNode = editor.selection.getNode();
    if (selectedNode.nodeName === 'P') {
        if (!selectedNode.classList.contains('aside')) {
            selectedNode.classList.add('aside');
        } else {
            selectedNode.classList.remove('aside');
        }
    } else {
        editor.notificationManager.open({
            text: 'Please select a paragraph to add the .aside class.',
            type: 'warning',
        });
    }
}

export const h2ClassButtonAction = (editor: TinyMCEEditor) => {
    const selectedNode = editor.selection.getNode();
    if (selectedNode.nodeName === 'H2') {
        if (!selectedNode.classList.contains('text-2xl')) {
            selectedNode.classList.add('text-2xl');
        } else {
            selectedNode.classList.remove('text-2xl');
        }
    } else {
        editor.notificationManager.open({
            text: 'Please select an H2 to add the .text-2xl class.',
            type: 'warning',
        });
    }
}

export const h3ClassButtonAction = (editor: TinyMCEEditor) => {
    const selectedNode = editor.selection.getNode();
    if (selectedNode.nodeName === 'H3') {
        if (!selectedNode.classList.contains('text-xl')) {
            selectedNode.classList.add('text-xl');
        } else {
            selectedNode.classList.remove('text-xl');
        }
    } else {
        editor.notificationManager.open({
            text: 'Please select an H3 to add the .text-xl class.',
            type: 'warning',
        });
    }
}

export const mb2ClassButtonAction = (editor: TinyMCEEditor) => {
    const selectedNode = editor.selection.getNode();
    if (selectedNode.nodeName === 'P') {
        if (!selectedNode.classList.contains('mb-2')) {
            selectedNode.classList.add('mb-2');
        } else {
            selectedNode.classList.remove('mb-2');
        }
    } else {
        editor.notificationManager.open({
            text: 'Please select a paragraph to add the .mb-2 class.',
            type: 'warning',
        });
    }
}

export const mb0ClassButtonAction = (editor: TinyMCEEditor) => {
    const selectedNode = editor.selection.getNode();
    if (selectedNode.nodeName === 'P') {
        if (!selectedNode.classList.contains('mb-0!')) {
            selectedNode.classList.add('mb-0!');
        } else {
            selectedNode.classList.remove('mb-0!');
        }
    } else {
        editor.notificationManager.open({
            text: 'Please select a paragraph to add the .mb-0! class.',
            type: 'warning',
        });
    }
}

export const setupOptions = (editor: TinyMCEEditor) => {
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
        update: (element: HTMLElement) => {
            return element.nodeName === 'P' ? 'addAsideClassButton' : '';
        },
    });

    editor.ui.registry.addContextMenu('addHeading2ClassMenu', {
        update: (element: HTMLElement) => {
            return element.nodeName === 'H2' ? 'addHeading2Class' : '';
        },
    });

    editor.ui.registry.addContextMenu('addHeading3ClassMenu', {
        update: (element: HTMLElement) => {
            return element.nodeName === 'H3' ? 'addHeading3Class' : '';
        },
    });

    editor.ui.registry.addContextMenu('addMb2ClassMenu', {
        update: (element: HTMLElement) => {
            return element.nodeName === 'P' ? 'addMb2Class' : '';
        },
    });

    editor.ui.registry.addContextMenu('add!Mb0ClassMenu', {
        update: (element: HTMLElement) => {
            return element.nodeName === 'P' ? 'add!Mb0Class' : '';
        },
    });
}