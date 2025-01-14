export const asideClassButtonAction = (editor) => {
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

export const h2ClassButtonAction = (editor) => {
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

export const h3ClassButtonAction = (editor) => {
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

export const mb2ClassButtonAction = (editor) => {
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

export const mb0ClassButtonAction = (editor) => {
  const selectedNode = editor.selection.getNode();
  if (selectedNode.nodeName === 'P') {
    if (!selectedNode.classList.contains('!mb-0')) {
      selectedNode.classList.add('!mb-0');
    } else {
      selectedNode.classList.remove('!mb-0');
    }
  } else {
    editor.notificationManager.open({
      text: 'Please select a paragraph to add the .!mb-0 class.',
      type: 'warning',
    });
  }
}
