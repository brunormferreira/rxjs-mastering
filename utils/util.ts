const list = document.getElementById('list');

const logValues = (value: any) => {
  const node = document.createElement('li');
  const textNode = document.createTextNode(value);
  node.appendChild(textNode);
  list.appendChild(node);
}

export {
  logValues,
}
