const regex = /bang|Bang|Clang|clang|dang|Dang|fang|Fang|gang|Gang|sang|Sang|slang|Slang|stang|Stang|yang|Yang|pang|Pang|change|Change/g

let replacingContent = false

const repContent = node => {
    if(~node.textContent.search(regex)){
        replacingContent = true
        node.textContent = node.textContent.replace(regex, 'chang')
        replacingContent = false
    }
}

const changeNodes = node => {
    if(node.nodeName == '#text') repContent(node)
    else if (node.nodeName.toLowerCase() != 'style' && node.nodeName.toLowerCase() != 'script') node.childNodes.forEach(e => changeNodes(e))
}

const listener = function(e) {changeNodes(e.target)}

const cdm_listener = function(e) {!replacingContent && repContent(event.target)}

changeNodes(document.body)
document.body.addEventListener('DOMNodeInserted', listener, false);
document.body.addEventListener('DOMCharacterModified', cdm_listener, false)