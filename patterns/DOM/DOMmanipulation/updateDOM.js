var oldnode = document.getElementById('result'),
clone = oldnode.cloneNode(true);

// work with the clone...

oldnode.parentNode.replaceChild(clone, oldnode);