function addLanguage(langName) {
        const li = document.createElement('li');
        li.innerHTML = `${langName}`
        document.querySelector('.language').appendChild(li)
    }

    addLanguage("python")
    addLanguage("typescript")

    

    // isko use krne se program will run fast and secure. kyuki isme 
    // tree ko traverse nhi krna padta h beacuse of appendChild
    // aur upar wale me innerHTML ki wajh se tree bar bar traverse krta h

    function addOptiLanguage(langName) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(langName))
        document.querySelector('.language').appendChild(li)
    }

    addOptiLanguage('golang')

    // edit 

    const secondLang = document.querySelector("li:nth-child(2)")
    // secondLang.innerHTML = "mojo"  isse bhi kr sakte h par hame optimize tarike se krna h

    const newli = document.createElement('li')
    newli.textContent = "mojo"
    secondLang.replaceWith(newli)

    // outer html

    const firstLang = document.querySelector("li:first-child")
    firstLang.outerHTML = '<li> TypeScript </li>'

    // remove

    const lastLang = document.querySelector('li:last-child')
    lastLang.remove()