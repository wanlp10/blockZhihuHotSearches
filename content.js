console.log("插件启动！" + window.location.href);

const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
let mo = new MutationObserver(function () {
    Array.from(document.querySelectorAll('div.Card.TopSearch.TopSearch--new'), item => { 
        item.style.display = "none"; 
    });
});
mo.observe(document.getElementById("root"), { attributes: true, subtree: true, childList: true });

