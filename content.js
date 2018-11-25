const regex = /bang|Bang|Clang|clang|dang|Dang|fang|Fang|gang|Gang|sang|Sang|slang|Slang|stang|Stang|yang|Yang|pang|Pang|change|Change/g

const repContent = node => {
    if(~node.textContent.search(regex)) node.textContent = node.textContent.replace(regex, 'chang')
}

const changeNodes = node => {
    if(node.nodeName == '#text') repContent(node)
    else if (node.nodeName.toLowerCase() != 'style' && node.nodeName.toLowerCase() != 'script') node.childNodes.forEach(e => changeNodes(e))
}

changeNodes(document.body)
